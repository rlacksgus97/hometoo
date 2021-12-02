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
import DemoNavbar from "../components/Navbars/DemoNavbar";

export default function ChallengeCreate() {
  const [type, setType] = useState("");
  const [isCheckedList, setIsCheckedList] = useState([false, false]);
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("authenticatedUserName")
  );
  const [context, setContext] = useState("");
  const [file, setFile] = useState([]);

  const typeHandler = (e) => {
    e.preventDefault();
    setType(e.target.value);
    if (e.target.value == "photo") {
      setIsCheckedList([true, false]);
    } else {
      setIsCheckedList([false, true]);
    }
    console.log(e.target.value);
  };

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const contextHandler = (e) => {
    e.preventDefault();
    setContext(e.target.value);
  };

  const fileHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const createChallenge = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", type);
    formData.append("username", username);
    formData.append("title", title);
    formData.append("context", context);
    formData.append("file", file);

    console.log(type);
    console.log(username);
    console.log(title);
    console.log(context);

    UserService.setupAxiosInterceptors();
    // axios({
    //   method: "post",
    //   url: "/api/challenges",
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
      .post("/api/challenges", formData)
      .then((res) => {
        window.location.href = "/challenge";
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
                        onSubmit={createChallenge}
                      >
                        <h1 className="font-weight-bold">챌린지 만들기</h1>
                        <h5>나만의 자세로 챌린지를 만들어 봐요!</h5>
                        <FormGroup>
                          <div className="mb-3">
                            <h10>*챌린지 타입을 선택하세요.</h10>
                            <InputGroup className="input-group-alternative">
                              <Input
                                type="checkbox"
                                name="type"
                                value="photo"
                                onChange={typeHandler}
                                checked={isCheckedList[0] ? true : false}
                              />
                            </InputGroup>
                            <h10>자세 챌린지 (사진 업로드)</h10>
                            <InputGroup className="input-group-alternative">
                              <Input
                                type="checkbox"
                                name="type"
                                value="video"
                                onChange={typeHandler}
                                checked={isCheckedList[1] ? true : false}
                              />
                            </InputGroup>
                            <h10>동작 챌린지 (동영상 업로드)</h10>
                          </div>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-copy-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="제목을 입력해주세요."
                              type="text"
                              name="title"
                              value={title}
                              onChange={titleHandler}
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
                          <Input
                            className="form-control-alternative"
                            placeholder="내용을 입력해주세요."
                            rows="5"
                            cols="80"
                            type="textarea"
                            name="context"
                            value={context}
                            onChange={contextHandler}
                          />
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <Input
                              type="file"
                              accept="image/*"
                              // accept="image/*, video/*"
                              // name="file"
                              // value={file}
                              onChange={fileHandler}
                            />
                          </InputGroup>
                          <FormText>챌린지 사진을 선택해주세요.</FormText>
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
                          <FormText>챌린지 영상을 선택해주세요.</FormText>
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
