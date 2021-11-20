import { Button, Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import ChallengeCard from "./ChallengeCard";
import axios from "axios";

export default function ChallengeCardList() {
  const [challengeList, setChallengeList] = useState();

  useEffect(() => {
    axios.get("/challenges/").then((res) => {
      if (res.data) {
        console.log(res.data);
        setChallengeList(res.data);
      } else {
        alert("fail");
      }
    });
  }, []);

  return (
    <div>
      <Container fluid style={{ width: "1500px" }}>
        <Row lg="3">
          <Col md="12" style={{ display: "flex" }}>
            <Button color="primary" style={{ marginLeft: "auto" }}>
              + New Challenge
            </Button>
          </Col>
          <Col md="3">
            <ChallengeCard />
          </Col>
          <Col md="3">
            <ChallengeCard />
          </Col>
          <Col md="3">
            <ChallengeCard />
          </Col>
          <Col md="3">
            <ChallengeCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
