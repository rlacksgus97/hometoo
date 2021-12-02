import React, {useState, useEffect} from "react";
import axios from 'axios';
import $ from 'jquery';

import {
    Button,
    Card,
    CardHeader,
    Container,
    Row,
    Col, Table, Media, CardBody
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import Hero from "../Hero";
import RoutineCard from "../routine/RoutineCard";

function CreateRoom(){

    const [roomList, setRoomList]=useState("");

    useEffect(
        ()=>{
            axios.get("/rooms")
                .then(res=>{
                    console.log(res.data)
                    setRoomList(res.data)
                })
        }, [])

    $(function(){
        const uuidInput = document.querySelector('input#uuid');

        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r & 0x3) | 0x8);
                return v.toString(16);
            });
        }

        if (localStorage.getItem("uuid") === null) {
            localStorage.setItem("uuid", guid());
        }
        // uuidInput.value = localStorage.getItem("uuid");
        // console.log("local.uuid:" + localStorage.getItem("uuid"));
        // console.log("input.value:" + uuidInput.value);
    });

    function addUuidToButtonLink(r) {
        // setRoomId(r.id);
        let id='button-link-'+r.id;
        // let ref = document.getElementById(id).href;
        let uuid=localStorage.getItem("uuid");

        // console.log("link.href:" + document.getElementById(id).href);
        // document.getElementById(id).href = ref + '/' + uuid;

        axios.get("/room/"+r.id+"/usable")
            .then(res=>{
                console.log(res.data);
                if(res.data.canEnter===true){
                    let rId=res.data.routineId;
                    // Room 도메인 element에 Routine 추가한 후 아래 코드 수정할 예정
                    axios.post("/room/"+r.id+"/client/"+localStorage.getItem("authenticatedUserEmail"))
                        .then(()=>{window.location.href="/room/"+r.id+"/user/"+uuid+"/routine/"+rId})

                }
                else{
                    alert("This room is already full");
                }
            })
            .catch(error=>{
                console.log(error);
            })


    }

    function createRoom(){
        window.location.href="/room/create/routine"
    }

    return(
        <>
            <DemoNavbar />
            <div className="position-relative">
                <Hero />
            </div>
            <section className="section section-components pb-5">
                <Container className="justify-content-md-center" fluid>
                    <Row className="justify-content-center mt--300">
                        <Col lg="8">
                            <Card className="bg-gradient-secondary shadow">
                                <CardBody className="p-lg-5">
                                    <div>
                                        <Container fluid lg="8">
                                            <Row lg="3">
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <h1 className="font-weight-bold">화상 홈트</h1>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <h5>화상 채팅방에 입장해서 다른 사람들과 함께 운동해보세요!</h5>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <Table className="align-items-center table-flush" responsive>
                                                     <thead className="thead-light">
                                                    <tr>
                                                         <th scope="col">방 번호</th>
                                                         <th scope="col">호스트</th>
                                                         <th scope="col">루틴</th>
                                                         <th scope="col">입장자 수</th>
                                                         <th scope="col">입장 가능</th>
                                                     </tr>
                                                    </thead>
                                                     <tbody>
                                                     {(roomList!=="") ? (
                                                             <>
                                                                 {
                                                                     roomList.map((room)=>{
                                                                         return(
                                                                             <tr onClick={()=>{addUuidToButtonLink(room)}}>
                                                                             <th scope="row">
                                                                                 <Media className="align-items-center">
                                                                                     <Media>
                                                                                       <span className="mb-0 text-sm">
                                                                                         # {room.id}
                                                                                       </span>
                                                                                     </Media>
                                                                                 </Media>
                                                                             </th>
                                                                             <th scope="row">
                                                                                 <Media className="align-items-center">
                                                                                     <Media>
                                                                                           <span className="mb-0 text-sm">
                                                                                             {room.hostUser}
                                                                                           </span>
                                                                                     </Media>
                                                                                 </Media>
                                                                             </th>
                                                                             <th scope="row">
                                                                                 <Media className="align-items-center">
                                                                                     <Media>
                                                                                       <span className="mb-0 text-sm">
                                                                                         Random Routine
                                                                                       </span>
                                                                                     </Media>
                                                                                 </Media>
                                                                             </th>
                                                                             <th scope="row">
                                                                                 <Media className="align-items-center">
                                                                                     <Media>
                                                                                       <span className="mb-0 text-sm">
                                                                                         {room.cur_num}
                                                                                       </span>
                                                                                     </Media>
                                                                                 </Media>
                                                                             </th>
                                                                                 <th scope="row">
                                                                                     <Media className="align-items-center">
                                                                                         <Media>
                                                                                       <span className="mb-0 text-sm">
                                                                                         {((room.cur_num)<2) ? "YES" : "NO"}
                                                                                       </span>
                                                                                         </Media>
                                                                                     </Media>
                                                                                 </th>
                                                                             </tr>
                                                                             )
                                                                         })
                                                                 }
                                                             </>
                                                         ) : (
                                                             <>
                                                                 <div className="text-center">
                                                                     No Room
                                                                 </div>
                                                             </>
                                                             )}
                                                     </tbody>
                                                    </Table>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <Button className="col" onClick={createRoom}>
                                                    Create Room
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )}

export default React.memo(CreateRoom);