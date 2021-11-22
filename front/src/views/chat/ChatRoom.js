import React, {useState, useEffect, useRef} from 'react';
import { useParams } from "react-router";
import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import axios from 'axios';

import {
    Button,
    Card,
    CardHeader,
    Container,
    Row,
    Col, Table, Media, Nav, NavItem, NavLink, Navbar, Modal, ModalBody, ModalFooter
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

function ChatRoom(){

    const conn = new SockJS("http://localhost:8080/ws-stomp");
    const stompconn = Stomp.over(conn);

    const {id, uuid, routineId}=useParams();

    const myVideoRef = useRef();
    const remoteVideoRef = useRef();
    const [localVideoState, SetLocalVideoState] = useState(true);
    const [localAudioState, SetLocalAudioState] = useState(true);
    const [isWorkoutOver, setIsWorkoutOver]=useState(false);
    const [modalOpen, setModalOpen]=useState(false);

    const localRoom = id;
    const localUserName = localStorage.getItem("uuid");

    const peerConnectionConfig = {
        iceServers: [
            {urls: 'stun:stun.stunprotocol.org:3478'},
            {urls: 'stun:stun.l.google.com:19302'},
        ],
    };

    const mediaConstraints = {
        audio: true,
        video: true
    };

    let routine;
    const [alarmText, setAlarmText]=useState("No message");

    let localStream;
    // let localVideoTracks;
    let myPeerConnection;

    function start() {
        stompconn.connect({}, function(){
            stompconn.subscribe("/sub/video-signal/"+localUserName, function(msg){
                let message = JSON.parse(msg.body);
                switch (message.type) {
                    case "text":
                        log('Text message from ' + message.from + ' received: ' + message.data);
                        break;

                    case "offer":
                        log('Signal OFFER received');
                        handleOfferMessage(message);
                        break;

                    case "answer":
                        log('Signal ANSWER received');
                        handleAnswerMessage(message);
                        break;

                    case "ice":
                        log('Signal ICE Candidate received');
                        handleNewICECandidateMessage(message);
                        break;

                    case "join":
                        log('Client is starting to ' + (message.data === "true)" ? 'negotiate' : 'wait for a peer'));
                        handlePeerConnection(message);
                        break;

                    default:
                        handleErrorMessage('Wrong type message received from server');
                }
            });

            sendToServer({
                from: localUserName, // uuid
                type: 'join',
                data: localRoom // room number
            })

            stompconn.onclose=function(message) {
                log('Socket has been closed');
            };

            stompconn.onerror = function(message) {
                handleErrorMessage("Error: " + message);
            };
        })
    }

    function stop() {
        log("Send 'leave' message to server");
        sendToServer({
            from: localUserName,
            type: 'leave',
            data: localRoom
        });

        if (myPeerConnection) {
            log('Close the RTCPeerConnection');

            myPeerConnection.onicecandidate = null;
            myPeerConnection.ontrack = null;
            myPeerConnection.onnegotiationneeded = null;
            myPeerConnection.oniceconnectionstatechange = null;
            myPeerConnection.onsignalingstatechange = null;
            myPeerConnection.onicegatheringstatechange = null;
            myPeerConnection.onnotificationneeded = null;
            myPeerConnection.onremovetrack = null;

            if (remoteVideoRef.current.srcObject) {
                remoteVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
            if (myVideoRef.current.srcObject) {
                myVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }

            remoteVideoRef.current.src = null;
            myVideoRef.current.src = null;

            myPeerConnection.close();
            myPeerConnection = null;

            log("Close the socket");
            if (conn != null) {
                conn.close();
            }
        }
    }

    const videoButtonOff = () => {
        console.log(myVideoRef.current);
        myVideoRef.current.srcObject.getVideoTracks().forEach((track) => {
            track.enabled = !track.enabled;
            SetLocalVideoState(!localVideoState);
        });
    };

    const audioButtonOff = () => {
        console.log(myVideoRef.current);
        myVideoRef.current.srcObject.getAudioTracks().forEach((track) => {
            track.enabled = !track.enabled;
            SetLocalAudioState(!localAudioState);
        });
        myVideoRef.current.muted=!myVideoRef.current.muted;
    };

    function exit_room(){
        axios.get("/room/"+id+"/user/"+uuid+"/exit")
            .then(
                ()=>{
                    if(isWorkoutOver) {
                        window.location.href="/routine/"+ routineId+"/evaluation";
                        // window.location.href="/room/create";
                    }
                    else {
                        // window.location.href="/room/create";
                        // alert("You left the room before finishing your work out!");
                        // window.location.href="";
                        setModalOpen(!(modalOpen));
                    }
                }
                )
            .catch((error)=>{
                console.log(error);
            })
    };

    function log(message) {
        console.log(message);
    }

    function handleErrorMessage(message) {
        console.error(message);
    }

    function sendToServer(msg) {
        let msgJSON = JSON.stringify(msg);
        stompconn.send("/pub/video-signal", {}, msgJSON);
    }

    async function getMedia(constraints) {
        if (localStream) {
            localStream.getTracks().forEach(track => {
                track.stop();
            });
        }
        await navigator.mediaDevices.getUserMedia(constraints)
            .then(getLocalMediaStream).catch((error)=>
                {
                    console.log(error);
                    stop();
                }
            );
    }

    function handlePeerConnection(message) {
        console.log("message: ", message)
        if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = null;
        }
        createPeerConnection();
        getMedia(mediaConstraints);
        if (message.data === "true") {
            myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
        }
    }

    function createPeerConnection() {
        console.log("createPeerConnection enter!");
        myPeerConnection = new RTCPeerConnection(peerConnectionConfig);

        myPeerConnection.onicecandidate = handleICECandidateEvent;
        myPeerConnection.ontrack = handleTrackEvent;

        // myPeerConnection.onremovetrack = handleRemoveTrackEvent;
        // myPeerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
        // myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;
        // myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
    }

    function getLocalMediaStream(mediaStream) {
        localStream = mediaStream;
        if (myVideoRef.current) {
            myVideoRef.current.srcObject = mediaStream;
            myVideoRef.current.muted = true;
        }

        console.log("localStream:", localStream);
        localStream.getTracks().forEach((track) => {
            myPeerConnection.addTrack(track, localStream);
        });
    }

    function handleGetUserMediaError(error) {
        log('navigator.getUserMedia error: ', error);
        log("error name: ", error.name);
        switch(error.name) {
            case "NotFoundError":
                alert("Unable to open your call because no camera and/or microphone were found.");
                break;
            case "SecurityError":
            case "PermissionDeniedError":
                // Do nothing; this is the same as the user canceling the call.
                break;
            default:
                alert("Error opening your camera and/or microphone: " + error.message);
                break;
        }

        stop();
    }

    function handleICECandidateEvent(event) {
        if (event.candidate) {
            sendToServer({
                from: localUserName,
                type: 'ice',
                candidate: event.candidate
            });
            log('ICE Candidate Event: ICE candidate sent');
        }
    }

    function handleTrackEvent(event) {
        log('Track Event: set stream to remote video element');
        console.log(remoteVideoRef);
        remoteVideoRef.current.srcObject = event.streams[0];
    }

    function handleNegotiationNeededEvent() {
        myPeerConnection.createOffer().then(function(offer) {
            return myPeerConnection.setLocalDescription(offer);
        })
            .then(function() {
                sendToServer({
                    from: localUserName,
                    type: 'offer',
                    sdp: myPeerConnection.localDescription
                });
                log('Negotiation Needed Event: SDP offer sent');
            })
            .catch(function(reason) {
                // an error occurred, so handle the failure to connect
                handleErrorMessage('failure to connect error: ', reason);
            });
    }

    function handleOfferMessage(message) {
        log('Accepting Offer Message');
        log(message);
        let desc = new RTCSessionDescription(message.sdp);
        if (desc != null && message.sdp != null) {
            log('RTC Signalling state: ' + myPeerConnection.signalingState);
            myPeerConnection.setRemoteDescription(desc)
                .then(function () {
                    log("-- Creating answer");
                    return myPeerConnection.createAnswer();
                })
                .then(function (answer) {
                    log("-- Setting local description after creating answer");
                    return myPeerConnection.setLocalDescription(answer);
                })
                .then(function () {
                    log("Sending answer packet back to other peer");
                    sendToServer({
                        from: localUserName,
                        type: 'answer',
                        sdp: myPeerConnection.localDescription
                    });

                })
                .catch(handleErrorMessage)
        }
    }

    function handleAnswerMessage(message) {
        log("The peer has accepted request");
        myPeerConnection.setRemoteDescription(message.sdp).catch(handleErrorMessage);
    }

    function handleNewICECandidateMessage(message) {
        let candidate = new RTCIceCandidate(message.candidate);
        log("Adding received ICE candidate: " + JSON.stringify(candidate));
        myPeerConnection.addIceCandidate(candidate).catch(handleErrorMessage);
    }

    let count=0;

    function workoutStart(){
        let totalWorkoutTime=0;

        setTimeout(()=>{
            setAlarmText("User A" + " 차례입니다.\n"
                + routine[0].trainingSec + "초 동안 "
                + routine[0].trainingName + "을 하세요.\n" + new Date());
        }, 5*1000)
        totalWorkoutTime+=routine[0].trainingSec;

        for(let a=0;a<routine.length;a++){
            for(let b=0;b<routine[a].trainingSetCnt*2;b++){
                if(a!=0 || b!=0){
                    (function(x, y, time){
                        setTimeout(()=>{
                            if(y%2==0){
                                setAlarmText("User A" + " 차례입니다.\n"
                                    + routine[x].trainingSec + "초 동안 "
                                    + routine[x].trainingName + "을 하세요.\n" + new Date());
                            }
                            else{
                                setAlarmText("User B" + " 차례입니다.\n"
                                    + routine[x].trainingSec + "초 동안 "
                                    + routine[x].trainingName + "을 하세요.\n" + new Date());
                            }
                        }, (time+5)*1000);
                    })(a, b, totalWorkoutTime)

                    if(b==0) totalWorkoutTime+=routine[a-1].trainingSec;
                    else totalWorkoutTime += routine[a].trainingSec;
                }
            }
        }

        setTimeout(()=>{
            setAlarmText("운동이 모두 종료되었습니다.");
            setIsWorkoutOver(!(isWorkoutOver));
        }, (totalWorkoutTime+5)*1000);
    }



    useEffect(()=>{
        start();

        const workoutReady=setInterval(()=>{
            axios.get("/start")
                .then((res)=>{
                    if(res.data.count==2){
                        axios.get("/room/"+id)
                            .then((res)=>{
                                console.log(res.data);
                                // setRoutine(res.data);
                                routine=res.data;
                            })
                            .then(()=>{
                                setAlarmText("10초 후에 운동이 시작됩니다. 준비해주세요: " + new Date());
                                startSession();
                                clearInterval(workoutReady);
                            })
                    }
                    else{
                        setAlarmText("아직 준비되지 않았습니다");
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
        }, 1000);

    }, []);

    function startSession(){
        setTimeout(()=>{
            setAlarmText("지금부터 운동을 시작하겠습니다: " + new Date());
            workoutStart();
        }, 10000)
    }

    return(
        <div>
            <h1>Simple WebRTC Signalling Server</h1>
            <input type="hidden" id="id" name="id" value={id}/>
            <div class="col-lg-12 mb-3">
                <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
                <Container>
                    <Row noGutters className="position-relative w-100 align-items-center">

                        <Col className="d-none d-lg-flex justify-content-start">
                            <div className="h4 mx-auto" text={"User: " + localUserName}>
                                User: {localUserName}
                            </div>
                            <div className="h4 mx-auto" text={"Room #" + id}>
                                Room #: {id}
                            </div>
                            <Button id="video_button" onClick={videoButtonOff}>
                                {localVideoState ? (
                                    "Video On"
                                ) : (
                                    "Video Off"
                                )}
                            </Button>
                            <Button id="audio_button" onClick={audioButtonOff}>
                                {localAudioState ? (
                                    "Audio On"
                                ) : (
                                    "Audio Off"
                                )}
                            </Button>
                            <Button type="button" onClick={exit_room}>
                                Exit Room
                            </Button>
                        </Col>
                    </Row>
                </Container>
                </Navbar>

                <div className="row justify-content-around mb-3">
                    <div className="col-lg-6 mb-3 mx-auto">
                        <video id="local_video" autoPlay playsInline ref={myVideoRef}></video>
                    </div>
                    <div className="col-lg-6 mb-3 mx-auto">
                        <video id="remote_video" autoPlay playsInline ref={remoteVideoRef}></video>
                    </div>
                </div>
                <footer className=" footer">
                    <Container>
                        <h3 className=" text-primary font-weight-light mb-2">
                            Alarm: {alarmText}
                        </h3>
                    </Container>
                </footer>
            </div>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Modal title
                    </h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>Are you really wanna go out room?</ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        No
                    </Button>
                    <Button color="primary" type="button" onClick={()=>{window.location.href="/room/create"}}>
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default React.memo(ChatRoom);