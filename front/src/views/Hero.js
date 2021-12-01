import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import { Button, Col, Container, Row } from "reactstrap";

import React from "react";

export default function Hero() {
  return (
    <section className="section section-lg section-shaped pb-250">
      <div className="shape shape-style-1 shape-default">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Container className="py-lg-md d-flex">
        <div className="col px-0">
          <Row>
            <Col className="d-flex justify-content-between">
              <h1 className="display-3 text-white">
                모두의 홈트 <span></span>
              </h1>
              <div className="btn-wrapper">
                <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="info"
                  href="/board"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="ni ni-user-run" />
                  </span>
                  <span className="btn-inner--text">홈트 게시판</span>
                </Button>
                <Button
                  className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                  color="default"
                  href="/challenge"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="ni ni-trophy" />
                  </span>
                  <span className="btn-inner--text">홈트 챌린지</span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
}
