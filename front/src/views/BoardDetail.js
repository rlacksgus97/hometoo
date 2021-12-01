import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import {
  Badge,
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
  Row,
} from "reactstrap";

import BoardService from "../service/BoardService";
import CardsFooter from "components/Footers/CardsFooter.js";
import CommentsBlock from "simple-react-comments";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Download from "../components/IndexSections/Download";
import Hero from "./Hero";
import React from "react";
import classnames from "classnames";

// nodejs library that concatenates classes

// reactstrap components

// core components

//css

// 댓글기능

// index page sections
// import Download from "../IndexSections/Download.js";

class BoardDetail extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      no: this.props.match.params.no,
      board: {},
      comments: [],
    };

    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    console.log(this.state.no);

    BoardService.getOneBoard(this.state.no).then((res) => {
      this.setState({ board: res.data });
    });

    BoardService.getComments(this.state.no).then((res) => {
      var data = new Array();
      for (var i = 0; i < res.data.length; i++) {
        var temp = new Object();
        temp.fullName = res.data[i]["writer"];
        temp.createdAt = new Date(res.data[i]["createDate"]);
        temp.text = res.data[i]["contents"];

        data.push(temp);
      }
      this.setState({ comments: data });
    });
  }
  // createComment = (event) => {
  //   // event.preventDefault();
  //   let tempComment = {
  //     forumId: this.state.no,
  //     writer: localStorage.getItem("authenticatedUserName"),
  //     delYn: "N",
  //     contents: this.state.comments.at(-1)["contents"],
  //   };
  //   console.log("tempComment => " + JSON.stringify(tempComment));
  //   BoardService.createComment(this.state.no, tempComment).then((res) => {
  //     window.location.reload(true);
  //   });
  // };

  createComment = (event) => {
    // event.preventDefault();
    let tempComment = {
      forumId: this.state.no,
      writer: localStorage.getItem("authenticatedUserName"),
      delYn: "N",
      contents: this.state.comments.at(-1)["contents"],
    };
    console.log("tempComment => " + JSON.stringify(tempComment));
    BoardService.createComment(this.state.no, tempComment).then((res) => {
      window.location.reload(true);
    });
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <Hero />
          </div>
          {/*이름, 이메일, 메모 카드 섹션*/}
          <section className="section">
            <Container className="justify-content-md-center" fluid>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-4">
                      <h1 className="display-3 text-black">게시글</h1>
                      <p className="mt-0">
                        운동 정보, 트레이닝에 관한 정보를 자유롭게 대화해주세요.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-copy-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            // placeholder={this.state.board.title}
                            value={this.state.board.title}
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                            disabled="true"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            // placeholder={this.state.board.writer}
                            value={this.state.board.writer}
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                            disabled="true"
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          // placeholder={this.state.board.contents}
                          value={this.state.board.contents}
                          rows="10"
                          type="textarea"
                          disabled={true}
                        />
                      </FormGroup>
                      <h1 className="display-3 text-black">댓글 목록</h1>
                      <div>
                        <CommentsBlock
                          comments={this.state.comments}
                          signinUrl={"/signin"}
                          isLoggedIn
                          // reactRouter // set to true if you are using react-router
                          //TODO: 로그인 된 정보를 fullName에 넣어줘야함
                          onSubmit={(text) => {
                            if (text.length > 0) {
                              // this.setState({
                              //     comments: [
                              //         ...this.state.comments,
                              //         {
                              //             createdAt: new Date(Date.now()),
                              //             fullName: 'Name',
                              //             text,
                              //         },
                              //     ],
                              // });
                              var temp = new Object();
                              temp.createdAt = new Date(Date.now());
                              temp.fullName = localStorage.getItem(
                                "authenticatedUserName"
                              );
                              temp.contents = text;
                              this.state.comments.push(temp);
                              console.log("submit:", text, temp);
                              console.log("state:", this.state.comments);
                              this.createComment();
                            }
                          }}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default BoardDetail;
