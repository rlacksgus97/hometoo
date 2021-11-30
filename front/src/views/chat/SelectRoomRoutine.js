import React, {useEffect, useState} from 'react';
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import {Button, Card, CardBody, CardHeader, Col, Container, Media, Row, Table} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import axios from "axios";
import Hero from "../Hero";

function SelectRoomRoutine(){

    const [routines, setRoutines]=useState([]);

    useEffect(()=>{
        axios.get("/routines")
            .then((res)=>{
                console.log(res.data)
                setRoutines(res.data)
            })
    }, [])

    function showRoutineDetail(routine){
        window.location.href="/room/create/routine/"+routine.routineId;
    }

    function goBackToRoomSelectPage(){
        window.location.href="/room/create";
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
                                                    <h1 className="font-weight-bold">루틴 선택</h1>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <h5>화상 채팅방에서 수행할 루틴을 선택하세요.</h5>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <Table className="align-items-center table-flush" responsive>
                                                        <thead className="thead-light">
                                                        <tr>
                                                            <th scope="col">User Name</th>
                                                            <th scope="col">Routine Name</th>
                                                            <th scope="col">Routine Average Score</th>
                                                            <th scope="col">Evaluation Count</th>
                                                            <th scope="col">Routine Detail</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {(routines!==null) ? (
                                                            <>
                                                                {
                                                                    routines.map((routine)=>{
                                                                        return(
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    <Media className="align-items-center">
                                                                                        <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.userName}
                                                                                  </span>
                                                                                        </Media>
                                                                                    </Media>
                                                                                </th>
                                                                                <th scope="row">
                                                                                    <Media className="align-items-center">
                                                                                        <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.routineName}
                                                                                  </span>
                                                                                        </Media>
                                                                                    </Media>
                                                                                </th>
                                                                                <th scope="row">
                                                                                    <Media className="align-items-center">
                                                                                        <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.avgScore}
                                                                                  </span>
                                                                                        </Media>
                                                                                    </Media>
                                                                                </th>
                                                                                <th scope="row">
                                                                                    <Media className="align-items-center">
                                                                                        <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.evalCnt}
                                                                                  </span>
                                                                                        </Media>
                                                                                    </Media>
                                                                                </th>
                                                                                <th scope="row" onClick={()=>{showRoutineDetail(routine)}}>
                                                                                    <Media className="align-items-center">
                                                                                        <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    Click Here To See Details
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
                                                                    No Routine
                                                                </div>
                                                            </>
                                                        )}

                                                        </tbody>
                                                    </Table>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <Button className="col" onClick={goBackToRoomSelectPage}>
                                                        {/*className="btn-neutral btn-icon"*/}
                                                        Go Back
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
    )
}

export default React.memo(SelectRoomRoutine)