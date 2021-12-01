import React, { Fragment } from 'react';
import axios from "axios";
import ReactPlayer from "react-player";

// reactstrap components
import {
    Button,
    Card, CardFooter,
    CardHeader,
    Col,
    Container, DropdownItem,
    DropdownMenu,
    DropdownToggle, Media, PaginationItem, PaginationLink,
    Row,
    Table,
    UncontrolledDropdown
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

import Hero from "components/IndexSections/Hero.js";
import Buttons from "components/IndexSections/Buttons.js";
import Inputs from "components/IndexSections/Inputs.js";
import CustomControls from "components/IndexSections/CustomControls.js";
import Menus from "components/IndexSections/Menus.js";
import Navbars from "components/IndexSections/Navbars.js";
import Tabs from "components/IndexSections/Tabs.js";
import Progress from "components/IndexSections/Progress.js";
import Pagination from "components/IndexSections/Pagination.js";
import Pills from "components/IndexSections/Pills.js";
import Labels from "components/IndexSections/Labels.js";
import Alerts from "components/IndexSections/Alerts.js";
import Typography from "components/IndexSections/Typography.js";
import Modals from "components/IndexSections/Modals.js";
import Datepicker from "components/IndexSections/Datepicker.js";
import TooltipPopover from "components/IndexSections/TooltipPopover.js";
import Carousel from "components/IndexSections/Carousel.js";
import Icons from "components/IndexSections/Icons.js";
import Login from "components/IndexSections/Login.js";
import Download from "components/IndexSections/Download.js";

//css
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss"
import BoardService from "../service/BoardService";
import moment from "moment";
import YouTubePlayer from "react-player/youtube";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: [],
            top5Routine: [],
            // topTrials: [
            //     {url: "https://youtu.be/I8So1qmFH7k"},
            //     {url: "https://www.youtube.com/watch?v=ysz5S6PUM-U"},
            //     {url: "https://www.youtube.com/watch?v=WZiD8_XHENA"},
            //     {url: "https://youtu.be/hQCMjktC4fE"},
            //     {url: "https://youtu.be/8GldAHThg9Q"}
            // ],
            topTrials:[],
        }
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;

        BoardService.getTop5Board().then((res) => {
            let temp = res.data;
            for (var i = 0; i < temp.length; i++) {
                temp[i]['createDate'] = moment(new Date(temp[i]['createDate'])).format("YYYY-MM-DD");
                if (temp[i]['updateDate']) {
                    temp[i]['updateDate'] = moment(new Date(temp[i]['updateDate'])).format("YYYY-MM-DD");
                }
            }
            this.setState({boards: temp});
        });

        axios.get("http://localhost:8080/routine/top5").then(res => {
            this.setState({top5Routine: res.data});
        });

        axios.get("http://localhost:8080/challenges/trending").then(res => {
            this.setState({topTrials: res.data});
        });
    }

    render() {
        return (
            <>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <section
                        className="section section-components pb-0"
                        id="section-components"
                    >
                        <Container>
                            <Col lg="12">
                                <div>
                                    <h1 className="mb-6">
                                        <span>HOT Trials</span>
                                    </h1>
                                </div>
                                <Row>
                                    {
                                        this.state.topTrials.map(
                                            video =>
                                                <ReactPlayer
                                                    url={video.url}
                                                    height="191px"
                                                    width="191px"
                                                    style={{marginRight:"10px"}}
                                            />
                                        )
                                    }
                                </Row>
                            </Col>
                        </Container>
                    </section>
                    <section className="section section-components">
                        <Container>
                            <Row className="row-grid justify-content-between align-items-center mt-lg">
                                <div className="col">
                                    <Card className="shadow">
                                        <CardHeader className="border-0">
                                            <Row>
                                                <Col>
                                                    <h1 className="display-3 text-black">HOT게시물</h1>
                                                </Col>
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                    color="default"
                                                    onClick={() => window.location.href="/board"}
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-curved-next" />
                          </span>
                                                    <span className="btn-inner--text">
                            더 보기
                          </span>
                                                </Button>
                                            </Row>
                                        </CardHeader>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                            <tr>
                                                {/*<th scope="col">글 번호</th>*/}
                                                <th scope="col">제목</th>
                                                <th scope="col">작성자</th>
                                                <th scope="col">작성일</th>
                                                {/*<th scope="col">수정일</th>*/}
                                                <th scope="col">조회수</th>
                                                <th scope="col" />
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.boards
                                                    .map(
                                                        board =>
                                                            <tr key={board.forumId}>
                                                                {/*<td> {board.forumId} </td>*/}
                                                                <td id="cursor"> <a onClick={() => this.readBoard(board.forumId)}> {board.title} </a></td>
                                                                <td> {board.writer}</td>
                                                                <td id="createDate"> {board.createDate}</td>
                                                                {/*<td id="updateDate"> {board.updateDate}</td>*/}
                                                                <td> {board.hits}</td>
                                                            </tr>
                                                    )
                                            }
                                            </tbody>
                                        </Table>
                                        {/*<CardFooter className="py-4">*/}
                                        {/*</CardFooter>*/}
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card className="shadow">
                                        <CardHeader className="border-0">
                                            <Row>
                                                <Col>
                                                    <h1 className="display-3 text-black">HOT루틴</h1>
                                                </Col>
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                    color="default"
                                                    onClick={() => window.location.href="/board"}
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-curved-next" />
                          </span>
                                                    <span className="btn-inner--text">
                            더 보기
                          </span>
                                                </Button>
                                            </Row>
                                        </CardHeader>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                            <tr>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Routine Name</th>
                                                <th scope="col">Routine Score</th>
                                                <th scope="col">Evaluate Cnt</th>
                                                {/*<th scope="col">Routine Detail</th>*/}
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {(this.state.top5Routine!==null) ? (
                                                <>
                                                    {
                                                        this.state.top5Routine.map((routine)=>{
                                                            return(
                                                                <tr>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.userName}
                                                                                  </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.routineName}
                                                                                  </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.routineAvgScore}
                                                                                  </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.evaluateCnt}
                                                                                  </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    {/*<th scope="row" onClick={()=>{window.location.href="/room/create/routine/"+routine.routineId}}>*/}
                                                                    {/*    <Media className="align-items-center">*/}
                                                                    {/*        <Media>*/}
                                                                    {/*              <span className="mb-0 text-sm">*/}
                                                                    {/*                Click Here To See Details*/}
                                                                    {/*              </span>*/}
                                                                    {/*        </Media>*/}
                                                                    {/*    </Media>*/}
                                                                    {/*</th>*/}
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                <>
                                                    <div className="text-center">
                                                        No Routine
                                                    </div>
                                                </>
                                            )}

                                            </tbody>
                                        </Table>
                                    </Card>
                                </div>
                            </Row>
                            {/*<Row className="row-grid justify-content-between">*/}
                            {/*    <Pills />*/}
                            {/*    <Labels />*/}
                            {/*</Row>*/}
                            {/*<Alerts />*/}
                            {/*<Typography />*/}
                            {/*<Modals />*/}
                            {/*<Datepicker />*/}
                            {/*<TooltipPopover />*/}
                        </Container>
                    </section>
                    {/*<Carousel />*/}
                    {/*<Icons />*/}
                    {/*<Login />*/}
                    {/*<Download />*/}
                </main>
                {/*<CardsFooter />*/}
            </>
        );
    }
}

export default Home;