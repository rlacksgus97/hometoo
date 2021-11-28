import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
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
import SimpleFooter from "components/Footers/SimpleFooter.js";

//css
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

// 유저기능
import UserService from "../service/UserService";

class FindPassword extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: ''
        };

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.findPassword = this.findPassword.bind(this);
    }

    clickRegisterUser = (event) => {
        event.preventDefault();
        window.location.href='/register';
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    findPassword = (event) => {
        event.preventDefault();
        let email = {
            email: this.state.email
        };

        console.log("email => " + JSON.stringify(email));
        UserService.findPassword(email).then((res) => {
            console.log(res);
            if (res.status == 200) {
                console.log(res.data);
                this.setState({password : res.data});
            } else {
                alert('이메일이 존재하지 않습니다.');
            }
        }).catch(() => {alert('이메일이 존재하지 않습니다.')});
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
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="pt-lg-7">
                            <Row className="justify-content-center">
                                <Col lg="5">
                                    <Card className="bg-secondary shadow border-0">
                                        {
                                         this.state.password
                                            ? (
                                                 <CardHeader className="bg-white pb-5">
                                                     <div className="text-muted text-center mb-3">
                                                         <small>비밀번호</small>
                                                     </div>
                                                     <div className="btn-wrapper text-center" id="password">
                                                         {this.state.password}
                                                     </div>
                                                 </CardHeader>
                                             )
                                             : (
                                                 <CardHeader className="bg-white pb-5">
                                                     <div className="text-muted text-center mb-3">
                                                         <h3>비밀번호 찾기</h3>
                                                     </div>
                                                     <div className="btn-wrapper text-center">
                                                     </div>
                                                 </CardHeader>
                                             )
                                        }
                                        <CardBody className="px-lg-5 py-lg-5">
                                            <div className="text-center text-muted mb-4">
                                                <small>이메일을 입력해주세요.</small>
                                            </div>
                                            <Form role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-email-83" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Email" type="email" onChange={this.changeEmailHandler}/>
                                                    </InputGroup>
                                                </FormGroup>
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id=" customCheckLogin"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <Button
                                                        className="my-4"
                                                        color="primary"
                                                        type="button"
                                                        onClick={this.findPassword}
                                                    >
                                                        비밀번호 찾기
                                                    </Button>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <Row className="mt-3">
                                        <Col className="text-right" xs="7">
                                            <a
                                                className="text-light"
                                                style={{cursor:'pointer'}}
                                                onClick={this.clickRegisterUser}
                                            >
                                                <small>계정 생성</small>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default FindPassword;
