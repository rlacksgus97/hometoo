import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import TrialCard from "./TrialCard";
import UserService from "../service/UserService";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TrialCardList() {
  const { challengeid } = useParams();
  const [challengeDetail, setchallengeDetail] = useState({
    id: 0,
    type: "",
    url: "",
    username: "",
    title: "",
    context: "",
    trial_user_List: [],
  });

  const [trialList, settrialList] = useState([
    {
      id: 0,
      type: "",
      url: "",
      username: "",
      score: 0.0,
    },
  ]);

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/challenges/" + challengeid).then((res) => {
      console.log(res.data);
      setchallengeDetail(res.data);
    });
  }, []);

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/challenges/" + challengeid + "/trials/").then((res) => {
      console.log(res.data);
      settrialList(res.data);
    });
  }, []);

  return (
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
                          <h1 className="font-weight-bold">
                            {challengeDetail.title} 챌린지
                          </h1>
                        </Col>
                        <Col md="12" style={{ display: "flex" }}>
                          <h5>
                            {challengeDetail.username}님의 챌린지에{" "}
                            {trialList.length} 명이 참여중이에요!
                          </h5>
                        </Col>
                        <Col md="12" style={{ display: "flex" }}>
                          <Button
                            color="danger"
                            style={{ marginLeft: "auto" }}
                            onClick={() => {
                              window.location.href =
                                "/trial/create/" + challengeid;
                            }}
                          >
                            + 나도 참여하기
                          </Button>
                        </Col>
                        {trialList.lenth !== 0 ? (
                          <>
                            {trialList.map((trial) => {
                              return (
                                <>
                                  <Col md="4" className="mb-5">
                                    <TrialCard trial={trial} />
                                  </Col>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <div>
                            <Col md="4">
                              <TrialCard />
                            </Col>
                            <Col md="4">
                              <TrialCard />
                            </Col>
                            <Col md="4">
                              <TrialCard />
                            </Col>
                          </div>
                        )}

                        {/* <Col md="4">
                              <TrialCard />
                            </Col> */}
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
  );
}
