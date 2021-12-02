import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import React, { useState } from "react";

import Hero from "./Hero";
import UserService from "../service/UserService";
import axios from "axios";
import { useParams } from "react-router-dom";
import DemoNavbar from "../components/Navbars/DemoNavbar";

export default function TrialCreate() {
  const { challengeid } = useParams();
  const [username, setUsername] = useState(
    localStorage.getItem("authenticatedUserName")
  );
  const [file, setFile] = useState([]);

  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const createTrial = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userName", username);

    console.log(file);

    UserService.setupAxiosInterceptors();
    // axios({
    //   method: "post",
    //   url: "/api/challenges/" + challengeid + "/trials/",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    const axiosInstance = axios.create({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 6000,
    });

    axiosInstance
      .post("/api/challenges/" + challengeid + "/trials/", formData)
      .then((res) => {
        window.location.href = "/challenge/" + challengeid;
        return res;
      })
      .catch(this.handleError);
  };

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
                    <Container className="justify-content-md-center" fluid>
                      <Form
                        encType="multipart/form-data"
                        onSubmit={createTrial}
                      >
                        <h1 className="font-weight-bold">챌린지 참가</h1>
                        <h5>나의 자세로 챌린지에 도전해 봐요!</h5>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="이름을 입력해주세요."
                              // type="email"
                              type="text"
                              name="username"
                              value={username}
                              onChange={usernameHandler}
                              disabled={true}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <Input
                              type="file"
                              // name="file"
                              // value={file}
                              onChange={fileHandler}
                            />
                          </InputGroup>
                          <FormText>
                            챌린지에 도전할 나의 사진을 선택해주세요.
                          </FormText>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <Input
                              type="file"
                              accept="video/mp4"
                              // accept="image/*, video/*"
                              // name="file"
                              // value={file}
                              onChange={fileHandler}
                            />
                          </InputGroup>
                          <FormText>
                            챌린지에 도전할 나의 영상을 선택해주세요.
                          </FormText>
                        </FormGroup>
                        <div style={{ display: "flex" }}>
                          <Input
                            color="primary"
                            style={{ marginLeft: "auto" }}
                            type="submit"
                          ></Input>
                        </div>
                      </Form>
                      {/* <div style={{ display: "flex" }}>
                          <Button
                            color="primary"
                            style={{ marginLeft: "auto" }}
                            type="button"
                            onClick={createChallenge}
                          >
                            만들기
                          </Button>
                        </div> */}
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
