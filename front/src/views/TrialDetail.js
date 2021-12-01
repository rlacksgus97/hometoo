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
import DemoNavbar from "../components/Navbars/DemoNavbar";

export default function ChallengeCardList() {
  const { trialid } = useParams();
  const [trialDetail, settrialDeatil] = useState({
    id: 0,
    type: "",
    url: "",
    username: "",
    score: 0.0,
  });

  useEffect(() => {
    UserService.setupAxiosInterceptors();
    axios.get("/api/trials/" + trialid).then((res) => {
      console.log(res.data);
      settrialDeatil(res.data);
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
                      {trialDetail.type == "photo" ? (
                        <CardImg
                          alt="Card image cap"
                          // src="https://picsum.photos/256/186"
                          src={"http://221.143.144.143:80/" + trialDetail.url}
                          top
                          width="100%"
                        />
                      ) : (
                        <video
                          src={"http://221.143.144.143:80/" + trialDetail.url}
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
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder={trialDetail.username}
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
                      placeholder={trialDetail.score}
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
