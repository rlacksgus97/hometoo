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

class Login extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      email : '',
      password: ''
    };

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  clickFindPassword = (event) => {
    event.preventDefault();
    window.location.href='/find/password';
  }

  clickRegisterUser = (event) => {
    event.preventDefault();
    window.location.href='/register';
  }

  changeEmailHandler = (event) => {
    this.setState({email: event.target.value});
  }

  changePasswordHandler = (event) => {
    this.setState({password: event.target.value});
  }

  loginUser = (event) => {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log("user => " + JSON.stringify(user));
    UserService.signIn(user).then(res => {
      // 로그인 정보 저장
      console.log(res.data);
      UserService.registerSuccessfulLoginForJwt(user, res.data['accessToken']);
      this.props.history.push('/board');
    }).catch(() => {
      alert('이메일 혹은 비밀번호가 틀립니다.');
    });

    let userName = "";
    UserService.getUserName(user).then(res => {
      console.log("testname => " + user);
      userName = res.data['userName'];
      localStorage.setItem("authenticatedUserName", userName);
    });
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
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h2>로그인</h2>
                      </div>
                      {/*<div className="btn-wrapper text-center">*/}
                      {/*  /!*<Button*!/*/}
                      {/*  /!*  className="btn-neutral btn-icon"*!/*/}
                      {/*  /!*  color="default"*!/*/}
                      {/*  /!*  href="#pablo"*!/*/}
                      {/*  /!*  onClick={e => e.preventDefault()}*!/*/}
                      {/*  /!*>*!/*/}
                      {/*  /!*  <span className="btn-inner--icon mr-1">*!/*/}
                      {/*  /!*    <img*!/*/}
                      {/*  /!*      alt="..."*!/*/}
                      {/*  /!*      src={require("assets/img/icons/common/github.svg")}*!/*/}
                      {/*  /!*    />*!/*/}
                      {/*  /!*  </span>*!/*/}
                      {/*  /!*  <span className="btn-inner--text">Github</span>*!/*/}
                      {/*  /!*</Button>*!/*/}
                      {/*  <Button*/}
                      {/*    className="btn-neutral btn-icon ml-1"*/}
                      {/*    color="default"*/}
                      {/*    href="#pablo"*/}
                      {/*    onClick={e => e.preventDefault()}*/}
                      {/*  >*/}
                      {/*    <span className="btn-inner--icon mr-1">*/}
                      {/*      <img*/}
                      {/*        alt="..."*/}
                      {/*        src={require("assets/img/icons/common/google.svg")}*/}
                      {/*      />*/}
                      {/*    </span>*/}
                      {/*    <span className="btn-inner--text">Google</span>*/}
                      {/*  </Button>*/}
                      {/*</div>*/}
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>이메일과 비밀번호로 로그인하세요.</small>
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
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={this.changePasswordHandler}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          {/*<label*/}
                          {/*  className="custom-control-label"*/}
                          {/*  htmlFor=" customCheckLogin"*/}
                          {/*>*/}
                          {/*  <span>Remember me</span>*/}
                          {/*</label>*/}
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={this.loginUser}
                          >
                            로그인
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        style={{cursor:'pointer'}}
                        onClick={this.clickFindPassword}
                      >
                        <small>비밀번호찾기</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
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

export default Login;
