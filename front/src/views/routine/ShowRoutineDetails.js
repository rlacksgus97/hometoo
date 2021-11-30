import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import {Button, Card, CardBody, Col, Container, Form, FormGroup, Label, Row, Table} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import $ from "jquery";

function ShowRoutineDetails(){

    const {routineId}=useParams();
    const [routine, setRoutine]=useState([]);

    useEffect(()=>{
        axios.get("/routine/"+routineId)
            .then(res=>{
                console.log(res.data)
                setRoutine(res.data);
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
        uuidInput.value = localStorage.getItem("uuid");
        console.log("local.uuid:" + localStorage.getItem("uuid"));
    });

    function goBackToSelectRoomRoutinePage(){
        window.location.href="/room/create/routine";
    }

    function roomCreate(){
        let body=routine;

        axios.post("/room/create/"+routineId+"/host/"+localStorage.getItem("authenticatedUserEmail"), body)
            .then((res)=>{
                window.location.href="/room/" + res.data
                    + "/user/" + localStorage.getItem("uuid")
                    + "/routine/" + routineId;
            })
            .catch(error=>{
                console.log(error);
            })
    }

    return(
        <>
            <DemoNavbar />
            <main>
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="justify-content-center">
                        <Row>
                            <Col lg="5">
                                <div className="bg-secondary shadow border-0" style={{width: "900px", height: "auto"}}>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <big>Routine</big>
                                        </div>
                                        <Form>
                                            <FormGroup className="mb-3">
                                                <Table className="align-items-center table-flush" responsive>
                                                    <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">Training Name</th>
                                                        <th scope="col">Training Sec</th>
                                                        <th scope="col">Training Set Cnt</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        {routine.map((training, i) => (
                                                                <tr key={training.trainingId} className="mt-5">
                                                                    <th className="md">
                                                                        {training.trainingName}
                                                                    </th>
                                                                    <th className="md">
                                                                        {training.trainingSec}
                                                                    </th>
                                                                    <th className="md">
                                                                        {training.trainingSetCnt}
                                                                    </th>
                                                                </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </FormGroup>
                                            <Button
                                                style={{float: "left"}} onClick={roomCreate}>
                                                Create Room
                                            </Button>
                                            <Button
                                                style={{float: "left"}} onClick={goBackToSelectRoomRoutinePage}>
                                                Go Back To Select Page
                                            </Button>
                                        </Form>
                                    </CardBody>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <SimpleFooter />
            <input type="hidden" id="uuid" name="uuid" value="${uuid}"/>
        </>
    )
}

export default React.memo(ShowRoutineDetails)