import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Row,
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

import BoardService from "../service/BoardService";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Hero from "./Hero";
import React from "react";
import UserService from "../service/UserService";
import classnames from "classnames";
import moment from "moment";

// nodejs library that concatenates classes

// reactstrap components

// core components

//css

// axios BoardService

// index page sections
// import Download from "../IndexSections/Download.js";

class Board extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      boards: [],
    };
    this.createBoard = this.createBoard.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    BoardService.getBoards().then((res) => {
      let temp = res.data;
      for (var i = 0; i < temp.length; i++) {
        temp[i]["createDate"] = moment(new Date(temp[i]["createDate"])).format(
          "YYYY-MM-DD"
        );
        if (temp[i]["updateDate"]) {
          temp[i]["updateDate"] = moment(
            new Date(temp[i]["updateDate"])
          ).format("YYYY-MM-DD");
        }
      }
      this.setState({ boards: temp });
    });
  }

  readBoard(no) {
    this.props.history.push("/board/detail/" + no);
  }

  createBoard() {
    this.props.history.push("/board/create");
  }

  loginCheck(writer) {
    if (writer == localStorage.getItem("authenticatedUserName")) {
      return true;
    } else {
      return false;
    }
  }

  updateBoard(writer, no) {
    if (!this.loginCheck(writer)) {
      alert("작성한 유저가 아닙니다.");
    } else {
      this.props.history.push("/board/update/" + no);
    }
  }

  deleteBoardView = async function (writer, no) {
    if (!this.loginCheck(writer)) {
      alert("작성한 유저가 아닙니다.");
    } else {
      if (
        window.confirm(
          "삭제된 글은 복구 할 수 없습니다.\n정말로 글을 삭제하시겠습니까?"
        )
      ) {
        BoardService.deleteBoard(no).then((res) => {
          console.log("delete result => " + JSON.stringify(res.data));
          if (res.data == "Delete Success") {
            window.location.reload(true);
          } else {
            alert("글 삭제가 실패했습니다.");
          }
        });
      }
    }
  };

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <Hero />
          </div>
          <section className="section section-components pb-5">
            <Container className="justify-content-md-center" fluid>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <div className="col">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row>
                          <Col>
                            <h1 className="font-weight-bold">
                              모두의 게시판 <span></span>
                            </h1>
                            <h5>
                              홈트레이닝에 관한 자유로운 토론 게시판입니다.
                              <br />
                              필요한 정보들이나 팁들을 자유롭게 공유해주세요.
                              <br />
                              화상채팅에 같이할 동료들을 구해도 좋습니다.
                            </h5>
                          </Col>
                          <Col md="12" style={{ display: "flex" }}>
                            <Button
                              color="primary"
                              style={{ marginLeft: "auto" }}
                              onClick={this.createBoard}
                            >
                              <span className="btn-inner--icon mr-1">
                                <i className="ni ni-fat-add" />
                              </span>
                              <span className="btn-inner--text">글 쓰기</span>
                            </Button>
                          </Col>
                        </Row>
                      </CardHeader>
                      <div className="m-10">
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light text-center">
                            <tr>
                              <th scope="col">글 번호</th>
                              <th scope="col">제목</th>
                              <th scope="col">작성자</th>
                              <th scope="col">작성일</th>
                              <th scope="col">수정일</th>
                              <th scope="col">조회수</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            {this.state.boards.map((board) => (
                              <tr key={board.forumId}>
                                <td> {board.forumId} </td>
                                <td id="cursor">
                                  {" "}
                                  <a
                                    onClick={() =>
                                      this.readBoard(board.forumId)
                                    }
                                  >
                                    {" "}
                                    {board.title}{" "}
                                  </a>
                                </td>
                                <td> {board.writer}</td>
                                <td id="createDate"> {board.createDate}</td>
                                <td id="updateDate"> {board.updateDate}</td>
                                <td> {board.hits}</td>
                                <td className="text-right">
                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      className="btn-icon-only text-light"
                                      href="#pablo"
                                      role="button"
                                      size="sm"
                                      color=""
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      <i className="ni ni-bold-down" />
                                    </DropdownToggle>
                                    <DropdownMenu
                                      className="dropdown-menu-arrow"
                                      right
                                    >
                                      <DropdownItem
                                        onClick={() =>
                                          this.updateBoard(
                                            board.writer,
                                            board.forumId
                                          )
                                        }
                                      >
                                        수정
                                      </DropdownItem>
                                      <DropdownItem
                                        onClick={() =>
                                          this.deleteBoardView(
                                            board.writer,
                                            board.forumId
                                          )
                                        }
                                      >
                                        삭제
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                      <CardFooter className="py-4">
                        <nav aria-label="...">
                          <Pagination
                            className="pagination justify-content-end mb-0"
                            listClassName="justify-content-end mb-0"
                          >
                            <PaginationItem className="disabled">
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                tabIndex="-1"
                              >
                                <i className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                1
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                2 <span className="sr-only">(current)</span>
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                3
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                              </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </nav>
                      </CardFooter>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        {/*<CardsFooter />*/}
      </>
    );
  }
}

export default Board;
