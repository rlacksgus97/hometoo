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

// index page sections
// import Download from "../IndexSections/Download.js";
import Download from "../components/IndexSections/Download";
class Board extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
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
                                                A beautiful Design System{" "}
                                                <span>completed with examples</span>
                                            </h1>
                                            <p className="lead text-white">
                                                The design system comes with four pre-built pages to
                                                help you get started faster. You can change the text and
                                                images and you're good to go.
                                            </p>
                                            <div className="btn-wrapper">
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                                                    <span className="btn-inner--text">Components</span>
                                                </Button>
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                    color="default"
                                                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                                                >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                                                    <span className="btn-inner--text">
                            Download React
                          </span>
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
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    <section className="section section-lg pt-lg-0 section-contact-us">
                    <Container className="justify-content-md-center" fluid>
                        {/* Table */}
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="border-0">
                                        <h1 className="display-3 text-black">자유게시판</h1>
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
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$2,500 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning" />
                                                    pending
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip742438047"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip742438047"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip941738690"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip941738690"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip804044742"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip804044742"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip996637554"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip996637554"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="60"
                                                            barClassName="bg-danger"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="60"
                                                            barClassName="bg-danger"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$1,800 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot">
                                                    <i className="bg-success" />
                                                    completed
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip746418347"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip746418347"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip102182364"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip102182364"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip406489510"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip406489510"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip476840018"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip476840018"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">100%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="100"
                                                            barClassName="bg-success"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">Black Dashboard</span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$3,150 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-danger" />
                                                    delayed
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip753056318"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip753056318"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip441753266"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip441753266"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip188462246"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip188462246"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip621168444"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip621168444"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">72%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="72"
                                                            barClassName="bg-danger"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$4,400 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot">
                                                    <i className="bg-info" />
                                                    on schedule
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip875258217"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip875258217"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip834416663"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip834416663"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip372449339"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip372449339"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip108714769"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip108714769"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">90%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="90"
                                                            barClassName="bg-info"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg").default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$2,200 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    completed
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">Sample</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="100"
                                                            barClassName="bg-success"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">100%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="100"
                                                            barClassName="bg-success"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
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
                        </Row>
                    </Container>
                    </section>
                    {/*정보게시판*/}
                    <section className="section section-lg pt-lg-0 section-contact-us">
                    <Container className="justify-content-md-center" fluid>
                        {/* Table */}
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="border-0">
                                        <h1 className="display-3 text-black">정보게시판</h1>
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
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$2,500 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning" />
                                                    pending
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip742438047"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip742438047"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip941738690"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip941738690"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip804044742"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip804044742"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip996637554"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip996637554"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="60"
                                                            barClassName="bg-danger"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$1,800 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot">
                                                    <i className="bg-success" />
                                                    completed
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip746418347"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip746418347"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip102182364"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip102182364"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip406489510"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip406489510"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip476840018"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip476840018"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">100%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="100"
                                                            barClassName="bg-success"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">Black Dashboard</span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$3,150 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-danger" />
                                                    delayed
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip753056318"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip753056318"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip441753266"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip441753266"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip188462246"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip188462246"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip621168444"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip621168444"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">72%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="72"
                                                            barClassName="bg-danger"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$4,400 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot">
                                                    <i className="bg-info" />
                                                    on schedule
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip875258217"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip875258217"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip834416663"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip834416663"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip372449339"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip372449339"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip108714769"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip108714769"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">90%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="90"
                                                            barClassName="bg-info"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={
                                                                require("../assets/img/theme/landing.jpg").default
                                                            }
                                                        />
                                                    </a>
                                                    <Media>
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$2,200 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    completed
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip664029969"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-1-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip664029969"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip806693074"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-2-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip806693074"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip844096937"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-3-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip844096937"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip757459971"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={
                                                                require("../assets/img/theme/team-4-800x800.jpg")
                                                                    .default
                                                            }
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip757459971"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">100%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="100"
                                                            barClassName="bg-success"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
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
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
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
                        </Row>
                    </Container>
                    </section>
                    {/*헤더*/}
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        {/*<div>*/}
                                        {/*    <h2 className="text-center">Boards List</h2>*/}
                                        {/*    /!*# 3*!/*/}
                                        {/*    <div className = "row">*/}
                                        {/*        <button className="btn btn-primary" onClick={this.createBoard}> 글 작성</button>*/}
                                        {/*    </div>*/}
                                        {/*    <div className ="row">*/}
                                        {/*        <table className="table table-striped table-bordered">*/}
                                        {/*            <thead>*/}
                                        {/*            <tr>*/}
                                        {/*                <th>글 번호</th>*/}
                                        {/*                <th>타이틀 </th>*/}
                                        {/*                <th>작성자 </th>*/}
                                        {/*                <th>작성일 </th>*/}
                                        {/*                <th>갱신일 </th>*/}
                                        {/*                <th>좋아요수</th>*/}
                                        {/*                <th>조회수</th>*/}
                                        {/*            </tr>*/}
                                        {/*            </thead>*/}
                                        {/*            <tbody>*/}
                                        {/*            {*/}
                                        {/*                // this.state.boards.map(*/}
                                        {/*                //     board =>*/}
                                        {/*                //         <tr key = {board.no}>*/}
                                        {/*                //             <td> {board.no} </td>*/}
                                        {/*                //             <td> {board.title} </td>*/}
                                        {/*                //             <td> {board.memberNo} </td>*/}
                                        {/*                //             <td> {board.createdTime} </td>*/}
                                        {/*                //             <td> {board.updatedTime} </td>*/}
                                        {/*                //             <td> {board.likes} </td>*/}
                                        {/*                //             <td> {board.counts} </td>*/}
                                        {/*                //         </tr>*/}
                                        {/*                // )*/}
                                        {/*            }*/}
                                        {/*            </tbody>*/}
                                        {/*        </table>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </Row>
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

export default Board;
