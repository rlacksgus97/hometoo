import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import UserService from "../service/UserService";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ChallengeCardList() {
  const { trialid } = useParams();
  const [myScore, setmyScore] = useState(0);
  const [trialDetail, settrialDeatil] = useState({
    id: 0,
    type: "",
    challenge_url: "",
    trial_url: "",
    url: "",
    score: 0.0,
  });

  const checkMyScore = (e) => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/trials/" + trialid + "/estimate").then((res) => {
      console.log(res.data);
      setmyScore(res.data);
    });
  };

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/trials/" + trialid + "/estimate/detail").then((res) => {
      console.log(res.data);
      settrialDeatil(res.data);
    });
  }, []);

  return (
    <>
      {/* <DemoNavbar /> */}
      <div className="position-relative">
        <Hero />
      </div>
      <section className="section section-components pb-0">
        <Container className="justify-content-md-center" fluid>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <Col className="d-flex justify-content-between" lg="8">
                    <div>
                      {trialDetail.type == "photo" ? (
                        <CardImg
                          alt="Card image cap"
                          // src="https://picsum.photos/256/186"
                          src={
                            "http://221.143.144.143:80/" +
                            trialDetail.challenge_url
                          }
                          top
                          width="100%"
                        />
                      ) : (
                        <video
                          src={
                            "http://221.143.144.143:80/" +
                            trialDetail.challenge_url
                          }
                          crossOrigin="anonymous"
                          type="type/mp4"
                          controls
                          width="100%"
                        >
                          비디오 재생 중 에러가 발생했습니다.
                        </video>
                      )}
                    </div>
                    <div>
                      {trialDetail.type == "photo" ? (
                        <CardImg
                          alt="Card image cap"
                          // src="https://picsum.photos/256/186"
                          src={
                            "http://221.143.144.143:80/" + trialDetail.trial_url
                          }
                          top
                          width="100%"
                        />
                      ) : (
                        <video
                          src={
                            "http://221.143.144.143:80/" + trialDetail.trial_url
                          }
                          crossOrigin="anonymous"
                          type="type/mp4"
                          controls
                          width="100%"
                        >
                          비디오 재생 중 에러가 발생했습니다.
                        </video>
                      )}
                    </div>
                  </Col>
                </CardBody>
                <div>제 점수는요... {myScore}</div>
              </Card>
              <div style={{ display: "flex" }}>
                <Button
                  color="primary"
                  style={{ marginLeft: "auto" }}
                  onClick={checkMyScore}
                >
                  점수 확인하기
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
