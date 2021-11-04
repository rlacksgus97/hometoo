import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

//css
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

// 댓글기능
import CommentsBlock from 'simple-react-comments';

// index page sections
// import Download from "../IndexSections/Download.js";
import Download from "../components/IndexSections/Download";
class BoardDetail extends React.Component {
    state = {};
    commentsData = [{"authorUrl" : "#", "avatarUrl": "#avatarUrl", "createdAt": new Date(Date.now()), "fullName": "Name", "text": "qwerasdf"}];
    constructor(props) {
        super(props);
        this.state = {
            comments : this.commentsData,
        };
    }
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
                    {/*이름, 이메일, 메모 카드 섹션*/}
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container className="justify-content-md-center" fluid>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Want to work with us?</h4>
                                            <p className="mt-0">
                                                Your project is very important to us.
                                            </p>
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Your name"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.emailFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email address"
                                                        type="email"
                                                        onFocus={e => this.setState({ emailFocused: true })}
                                                        onBlur={e => this.setState({ emailFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="내용을 입력해주세요."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    저장
                                                </Button>
                                            </div>
                                            <h1 className="display-3 text-black">댓글 목록</h1>
                                            <div>
                                                <CommentsBlock
                                                    comments={this.state.comments}
                                                    signinUrl={'/signin'}
                                                    isLoggedIn
                                                    // reactRouter // set to true if you are using react-router
                                                    onSubmit={text => {
                                                        if (text.length > 0) {
                                                            this.setState({
                                                                comments: [
                                                                    ...this.state.comments,
                                                                    {
                                                                        authorUrl: '#',
                                                                        avatarUrl: '#avatarUrl',
                                                                        createdAt: new Date(),
                                                                        fullName: 'Name',
                                                                        text,
                                                                    },
                                                                ],
                                                            });
                                                            console.log('submit:', text);
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
                    {/*댓글 기능*/}
                    <section className="section section-lg pt-lg-0 section-contact-us">

                    </section>
                    <Download />
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default BoardDetail;
