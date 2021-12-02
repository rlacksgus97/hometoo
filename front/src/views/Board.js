import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Table,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

//css
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

// axios BoardService
import BoardService from '../service/BoardService';
import UserService from "../service/UserService";

// index page sections
// import Download from "../IndexSections/Download.js";
import Download from "../components/IndexSections/Download";
import moment from "moment";
class Board extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        this.state = {
            boards: [],
            currentPage: 0,
            pagesCount: 0,
            pageSize: 10
        }

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
                temp[i]['createDate'] = moment(new Date(temp[i]['createDate'])).format("YYYY-MM-DD");
                if (temp[i]['updateDate']) {
                    temp[i]['updateDate'] = moment(new Date(temp[i]['updateDate'])).format("YYYY-MM-DD");
                }
            }
            this.setState({boards: temp});
            this.setState({pagesCount: Math.ceil(temp.length/this.state.pageSize)});
            console.log(this.state.pageSize, this.state.pagesCount, 'test');
        });
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    }

    readBoard(no) {
        this.props.history.push('/board/detail/'+no);
    }

    createBoard() {
        this.props.history.push('/board/create');
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
            this.props.history.push('/board/update/'+no);
        }
    }

    deleteBoardView = async function (writer, no) {
        if (!this.loginCheck(writer)) {
            alert("작성한 유저가 아닙니다.");
        } else {
            if(window.confirm("삭제된 글은 복구 할 수 없습니다.\n정말로 글을 삭제하시겠습니까?")) {
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
    }

    render() {
        const {currentPage} = this.state;
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
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
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                모두의 홈트 게시판{" "}
                                                <span></span>
                                            </h1>
                                            <p className="lead text-white">
                                                홈트레이닝에 관한 자유로운 토론 게시판입니다.<br />
                                                필요한 정보들이나 팁들을 자유롭게 공유해주세요.<br />
                                                화상채팅에 같이할 동료들을 구해도 좋습니다.
                                            </p>
                          {/*                  <div className="btn-wrapper">*/}
                          {/*                      <Button*/}
                          {/*                          className="btn-icon mb-3 mb-sm-0"*/}
                          {/*                          color="info"*/}
                          {/*                          href="http://localhost:3000/sample"*/}
                          {/*                      >*/}
                          {/*<span className="btn-inner--icon mr-1">*/}
                          {/*  <i className="ni ni-user-run" />*/}
                          {/*</span>*/}
                          {/*                          <span className="btn-inner--text">화상채팅 홈트</span>*/}
                          {/*                      </Button>*/}
                          {/*                      <Button*/}
                          {/*                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"*/}
                          {/*                          color="default"*/}
                          {/*                          href="http://localhost:3000/login"*/}
                          {/*                      >*/}
                          {/*<span className="btn-inner--icon mr-1">*/}
                          {/*  <i className="ni ni-trophy" />*/}
                          {/*</span>*/}
                          {/*                          <span className="btn-inner--text">*/}
                          {/*  홈트 챌린지*/}
                          {/*</span>*/}
                          {/*                      </Button>*/}
                          {/*                  </div>*/}
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
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    {/*테이블시작*/}
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container className="justify-content-md-center" fluid>
                            {/* Table */}
                            <Row>
                                <div className="col">
                                    <Card className="shadow">
                                        <CardHeader className="border-0">
                                            <Row>
                                                <Col>
                                                    <h1 className="display-3 text-black">게시판</h1>
                                                </Col>
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                    color="default"
                                                    onClick={this.createBoard}
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-fat-add" />
                          </span>
                                                    <span className="btn-inner--text">
                            글 쓰기
                          </span>
                                                </Button>
                                            </Row>
                                        </CardHeader>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                            <tr>
                                                <th scope="col">글 번호</th>
                                                <th scope="col">제목</th>
                                                <th scope="col">작성자</th>
                                                <th scope="col">작성일</th>
                                                <th scope="col">수정일</th>
                                                <th scope="col">조회수</th>
                                                <th scope="col" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.boards
                                                    .slice(
                                                        currentPage * this.state.pageSize,
                                                        (currentPage + 1) * this.state.pageSize
                                                    )
                                                    .map(
                                                        board =>
                                                            <tr key={board.forumId}>
                                                                <td> {board.forumId} </td>
                                                                <td id="cursor"> <a onClick={() => this.readBoard(board.forumId)}> {board.title} </a></td>
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
                                                                            <i className="ni ni-bold-down"/>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                                            <DropdownItem
                                                                                onClick={() => this.updateBoard(board.writer, board.forumId)}
                                                                            >
                                                                                수정
                                                                            </DropdownItem>
                                                                            <DropdownItem
                                                                                onClick={() => this.deleteBoardView(board.writer, board.forumId)}
                                                                            >
                                                                                삭제
                                                                            </DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </td>
                                                            </tr>
                                                    )
                                            }
                                            </tbody>
                                        </Table>
                                        <CardFooter className="py-4">
                                            <nav aria-label="...">
                                                <Pagination
                                                    className="pagination justify-content-end mb-0"
                                                    listClassName="justify-content-end mb-0"
                                                >
                                                    <PaginationItem disabled={currentPage <= 0}>
                                                        <PaginationLink
                                                            onClick={e => this.handleClick(e, currentPage - 1)}
                                                            previous
                                                            href="#"
                                                        >
                                                            <i className="fa fa-angle-left" />
                                                            <span className="sr-only">Previous</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    {[...Array(this.state.pagesCount)].map((page, i) =>
                                                        <PaginationItem active={i === currentPage} key={i}>
                                                            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                                                {i + 1}
                                                            </PaginationLink>
                                                        </PaginationItem>
                                                    )}
                                                    <PaginationItem disabled={currentPage >= this.state.pagesCount - 1}>
                                                        <PaginationLink
                                                            onClick={e => this.handleClick(e, currentPage + 1)}
                                                            next
                                                            href="#"
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
