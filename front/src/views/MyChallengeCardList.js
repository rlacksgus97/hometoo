import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import DemoNavbar from "../components/Navbars/DemoNavbar";
import Hero from "./Hero";
import MyChallengeCard from "./MyChallengeCard";
import UserService from "../service/UserService";
import axios from "axios";

export default function MyChallengeCardList() {
  const [username, setUsername] = useState(
    localStorage.getItem("authenticatedUserName")
  );
  const [challengeList, setchallengeList] = useState([
    {
      id: 0,
      type: "",
      title: "",
      url: "",
      username: "",
    },
  ]);

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/challenges/my/" + username).then((res) => {
      console.log(res.data);
      setchallengeList(res.data);
    });
  }, []);

  return (
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
                          <h1 className="font-weight-bold">
                            {username}님의 챌린지 목록입니다!
                          </h1>
                        </Col>
                        <Col md="12" style={{ display: "flex" }}>
                          <h5>내 챌린지에 어떤 사람들이 참가했을까요?</h5>
                        </Col>
                        {challengeList ? (
                          <>
                            {challengeList.map((challenge) => {
                              return (
                                <>
                                  <Col md="4" className="mb-5">
                                    <MyChallengeCard challenge={challenge} />
                                  </Col>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <Col md="12">
                              아직 생성한 챌린지가 없어요! 챌린지를 만들어봐요!
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
  );
}
