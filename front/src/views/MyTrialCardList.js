import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import DemoNavbar from "../components/Navbars/DemoNavbar";
import Hero from "./Hero";
import MyTrialCard from "./MyTrialCard";
import UserService from "../service/UserService";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyTrialCardList() {
  const [username, setUsername] = useState(
    localStorage.getItem("authenticatedUserName")
  );

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
    axios.get("/api/trials/my/" + username).then((res) => {
      console.log(res.data);
      settrialList(res.data);
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
                            {username}님이 참여한 시도입니다!
                          </h1>
                        </Col>
                        <Col md="12" style={{ display: "flex" }}>
                          <h5>내 점수를 확인해보세요!</h5>
                        </Col>
                        <Col md="12" style={{ display: "flex" }}>
                          <h8>
                            *영상 챌린지는 점수 집계에 1분정도 소요됩니다.
                          </h8>
                        </Col>
                        {trialList.lenth !== 0 ? (
                          <>
                            {trialList.map((trial) => {
                              return (
                                <>
                                  <Col md="4" className="mb-5">
                                    <MyTrialCard trial={trial} />
                                  </Col>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <Col md="12">
                              아직 참여한 시도가 없어요! 챌린지에 참여해보세요!
                            </Col>
                          </>
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
