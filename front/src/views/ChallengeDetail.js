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

import DemoNavbar from "../components/Navbars/DemoNavbar";
import Hero from "./Hero";
import UserService from "../service/UserService";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ChallengeCardList() {
  const { challengeid } = useParams();
  const [challengeDeatil, setchallengeDeatil] = useState({
    id: 0,
    type: "",
    url: "",
    username: "",
    title: "",
    context: "",
    trial_user_List: [],
  });

  const [bestTrialList, setbestTrialList] = useState([]);

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/challenges/" + challengeid + "/best_trials").then((res) => {
      console.log(res.data);
      setbestTrialList(res.data);
    });
  }, []);

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    // console.log("/challenges/" + String(location.state.cid));
    axios.get("/api/challenges/" + challengeid).then((res) => {
      console.log(res.data);
      setchallengeDeatil(res.data);
    });
  }, []);

  return (
    <>
      <DemoNavbar />
      <div className="position-relative">
        <Hero />
      </div>
      <section className="section section-components pb-0">
        <Container className="justify-content-md-center" fluid>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <Col className="d-flex justify-content-between">
                    <div>
                      {challengeDeatil.type == "photo" ? (
                        <CardImg
                          alt="Card image cap"
                          // src="https://picsum.photos/256/186"
                          // src={
                          //   "http://221.143.144.143:80/" + challengeDeatil.url
                          // }
                          src={
                            "http://58.122.7.167:9000/" + challengeDeatil.url
                          }
                          top
                          width="100%"
                        />
                      ) : (
                        <video
                          // src={
                          //   "http://221.143.144.143:80/" + challengeDeatil.url
                          // }
                          src={
                            "http://58.122.7.167:9000/" + challengeDeatil.url
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
                    <div className="w-50 px-2">
                      <div className="d-flex justify-content-center">
                        <h5>
                          <i className="ni ni-notification-70 px-3" />
                          명예의 전당
                          <i className="ni ni-notification-70 px-3" />
                        </h5>
                      </div>
                      <ListGroup>
                        {bestTrialList.length !== 0 ? (
                          <>
                            {bestTrialList.map((bestTrial) => {
                              return (
                                <>
                                  <ListGroupItem className="d-flex justify-content-between">
                                    <div>{bestTrial.username}</div>
                                    <div>{bestTrial.score} 점</div>
                                  </ListGroupItem>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <ListGroupItem className="d-flex justify-content-between">
                              아직 참가자가 없어요! 가장 먼저 참가해보세요!
                            </ListGroupItem>
                          </>
                        )}
                      </ListGroup>
                      <div className="d-flex justify-content-between">
                        <Button
                          color="primary"
                          style={{ marginLeft: "auto" }}
                          onClick={() => {
                            window.location.href = "/trial/" + challengeid;
                          }}
                        >
                          참가자 더보기
                        </Button>
                        <Button
                          color="danger"
                          style={{ marginLeft: "auto" }}
                          onClick={() => {
                            window.location.href =
                              "/trial/create/" + challengeid;
                          }}
                        >
                          지금 참가하기
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <FormGroup className="mt-5">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-single-copy-04" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder={challengeDeatil.title}
                        type="text"
                        disabled={true}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder={challengeDeatil.username}
                        type="text"
                        disabled={true}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-5">
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="name"
                      placeholder={challengeDeatil.context}
                      rows="5"
                      type="textarea"
                      disabled={true}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
