import React, {useEffect, useState} from 'react';
import Hero from "../Hero";
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import ChallengeCard from "../ChallengeCard";
import axios from "axios";
import RoutineCard from "./RoutineCard";

function MyRoutineList(){

    const [routineList, setRoutineList]=useState([]);

    useEffect(()=>{
        axios.get("/myRoutines/" + localStorage.getItem("authenticatedUserName"))
            .then((res) => {
                setRoutineList(res.data);
            })
    }, [])

    return(
        <>
            {/* <DemoNavbar /> */}
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
                                                    <h1 className="font-weight-bold">내 루틴 리스트</h1>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <h5>{localStorage.getItem("authenticatedUserName")}님의 루틴 리스트입니다. 버튼을 클릭하면 루틴 상세정보를 볼 수 있습니다.</h5>
                                                </Col>
                                                {routineList ? (
                                                    <>
                                                        {routineList.map((routine, index) => {
                                                            return (
                                                                <>
                                                                    <Col md="4">
                                                                        <RoutineCard routine={routine} num={index+1} />
                                                                    </Col>
                                                                </>
                                                            );
                                                        })}
                                                    </>
                                                ) : (
                                                    <>
                                                        <Col md="12">
                                                            아직 등록된 루틴이 없어요! 루틴을 만들어봐요!
                                                        </Col>
                                                    </>
                                                )}
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

export default React.memo(MyRoutineList)