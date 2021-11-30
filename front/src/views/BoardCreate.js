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
import CommentsBlock from "simple-react-comments";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
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

class BoardCreate extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      writer: localStorage.getItem("authenticatedUserName"),
      contents: "",
      type: "F",
      delYn: "N",
    };

    this.changeWriterHandler = this.changeWriterHandler.bind(this);
    this.changeContentsHandler = this.changeContentsHandler.bind(this);
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    console.log(this.state.no);

    BoardService.getOneBoard(this.state.no).then((res) => {
      this.setState({ board: res.data });
    });
  }

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changeWriterHandler = (event) => {
    this.setState({ writer: event.target.value });
  };

  changeContentsHandler = (event) => {
    this.setState({ contents: event.target.value });
  };

  createBoard = (event) => {
    event.preventDefault();
    let board = {
      type: this.state.type,
      title: this.state.title,
      writer: this.state.writer,
      contents: this.state.contents,
      delYn: this.state.delYn,
    };
    console.log("board => " + JSON.stringify(board));
    BoardService.createBoard(board).then((res) => {
      this.props.history.push("/board");
    });
  };

  cancel() {
    this.props.history.push("/board");
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <Hero />
          </div>
          {/*이름, 이메일, 메모 카드 섹션*/}
          <section className="section section-components pb-0">
            <Container className="justify-content-md-center" fluid>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-4">
                      <FormGroup
                        className={classnames({
                          focused: this.state.nameFocused,
                        })}
                      >
                        <h1 className="font-weight-bold">새 글 작성하기</h1>
                        <h5>
                          운동 정보, 트레이닝에 관한 정보를 자유롭게
                          대화해주세요.
                        </h5>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-copy-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="제목을 입력해주세요."
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                            value={this.state.title}
                            onChange={this.changeTitleHandler}
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
                            placeholder="writer1"
                            type="writer"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                            value={this.state.writer}
                            onChange={this.changeWriterHandler}
                            disabled={true}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="내용을 입력해주세요."
                          rows="10"
                          type="textarea"
                          value={this.state.contents}
                          onChange={this.changeContentsHandler}
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                          onClick={this.createBoard}
                        >
                          저장
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default BoardCreate;
