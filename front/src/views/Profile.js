import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import { Button, Card, Col, Container, Row } from "reactstrap";

import BoardService from "../service/BoardService";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import React from "react";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import UserService from "../service/UserService";
import axios from "axios";

// reactstrap components

// core components

//css

//user

class Profile extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("authenticatedUserEmail"),
      name: localStorage.getItem("authenticatedUserName"),
      posts: "",
      comments: "",
      challenges: "",
      photo: localStorage.getItem("authenticatedUserEmail").length % 7,
    };
  }

  logoutUser = (event) => {
    event.preventDefault();
    UserService.logout();
    this.props.history.push("/board");
  };

  clickBoard = (event) => {
    event.preventDefault();
    this.props.history.push("/board");
  };

  withdrawUser = async function () {
    if (
      window.confirm(
        "모든 활동내역들을 복구 할 수 없습니다.\n정말로 탈퇴하시겠습니까?"
      )
    ) {
      UserService.withdrawUser(this.state.name).then((res) => {
        console.log("delete user result => " + JSON.stringify(res.data));
        if (res.data == "Success") {
          this.props.history.push("/");
        } else {
          alert("회원 삭제가 실패했습니다.");
        }
      });
    }
  };

  componentDidMount() {
    UserService.pageLoginCheck();
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    BoardService.getForumCount(this.state.name).then((res) => {
      this.setState({ posts: res.data });
    });
    BoardService.getCommentCount(this.state.name).then((res) => {
      this.setState({ comments: res.data });
    });
    axios
      .get("http://localhost:8080/api/challenges/my/count/" + this.state.name)
      .then((res) => {
        this.setState({ challenges: res.data });
      });
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/" +
                              this.state.photo +
                              ".jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="danger"
                          onClick={() => this.withdrawUser()}
                          size="sm"
                        >
                          회원탈퇴
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div
                          onClick={() =>
                            (window.location.href = "/challenge/mychallenge")
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <span className="heading">
                            {this.state.challenges}개
                          </span>
                          <span className="description">Chanllenges</span>
                        </div>
                        <div
                          onClick={this.clickBoard}
                          style={{ cursor: "pointer" }}
                        >
                          <span className="heading">{this.state.posts}개</span>
                          <span className="description">Posts</span>
                        </div>
                        <div
                          onClick={this.clickBoard}
                          style={{ cursor: "pointer" }}
                        >
                          <span className="heading">
                            {this.state.comments}개
                          </span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>이름 : {this.state.name}</h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      이메일 : {this.state.email}
                    </div>
                    {/*<div className="h6 mt-4">*/}
                    {/*  <i className="ni business_briefcase-24 mr-2" />*/}
                    {/*  Solution Manager - Creative Tim Officer*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*  <i className="ni education_hat mr-2" />*/}
                    {/*  University of Computer Science*/}
                    {/*</div>*/}
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Button
                      className="mr-4"
                      color="neutral"
                      onClick={() => (window.location.href = "/myRoutineList")}
                    >
                      My Routines
                    </Button>
                    <Button
                      className="mr-4"
                      color="info"
                      onClick={() => (window.location.href = "/myChallenges")}
                    >
                      My Challenges
                    </Button>
                    <Button
                      className="mr-4"
                      color="warning"
                      onClick={() => (window.location.href = "/myTrials")}
                    >
                      My Trials
                    </Button>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        {/*<SimpleFooter />*/}
      </>
    );
  }
}

export default Profile;
