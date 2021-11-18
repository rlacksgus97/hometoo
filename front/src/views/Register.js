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

//user
import UserService from "../service/UserService";

class Register extends React.Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userName: ''
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.singupUser = this.singupUser.bind(this);
  }

  singupUser = (event) => {
    event.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
      userName: this.state.name
    };

    console.log("user => " + JSON.stringify(user));
    UserService.signup(user).then(res => {
      // 유저 데이터
      console.log(res.data);
      // UserService.registerSuccessfulLoginForJwt(user.email, res.data['accessToken']);
      this.props.history.push('/login');
    }).catch(() => {
      alert('중복된 이메일이 존재합니다.');
    })
  }

  changeNameHandler = (event) => {
    this.setState({name: event.target.value});
  }

  changeEmailHandler = (event) => {
    this.setState({email: event.target.value});
  }

  changePasswordHandler = (event) => {
    this.setState({password: event.target.value});
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
                        <small>구글 이메일을 통한 회원가입</small>
                      </div>
                      <div className="text-center">
                        {/*<Button*/}
                        {/*  className="btn-neutral btn-icon mr-4"*/}
                        {/*  color="default"*/}
                        {/*  href="#pablo"*/}
                        {/*  onClick={e => e.preventDefault()}*/}
                        {/*>*/}
                        {/*  <span className="btn-inner--icon mr-1">*/}
                        {/*    <img*/}
                        {/*      alt="..."*/}
                        {/*      src={require("assets/img/icons/common/github.svg")}*/}
                        {/*    />*/}
                        {/*  </span>*/}
                        {/*  <span className="btn-inner--text">Github</span>*/}
                        {/*</Button>*/}
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>성명, 이메일과 비밀번호를 통해 가입해주세요.</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Name" type="text" onChange={this.changeNameHandler}/>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
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
                        {/*<div className="text-muted font-italic">*/}
                        {/*  <small>*/}
                        {/*    password strength:{" "}*/}
                        {/*    <span className="text-success font-weight-700">*/}
                        {/*      strong*/}
                        {/*    </span>*/}
                        {/*  </small>*/}
                        {/*</div>*/}
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              {/*<label*/}
                              {/*  className="custom-control-label"*/}
                              {/*  htmlFor="customCheckRegister"*/}
                              {/*>*/}
                              {/*  <span>*/}
                              {/*    I agree with the{" "}*/}
                              {/*    <a*/}
                              {/*      href="#pablo"*/}
                              {/*      onClick={e => e.preventDefault()}*/}
                              {/*    >*/}
                              {/*      Privacy Policy*/}
                              {/*    </a>*/}
                              {/*  </span>*/}
                              {/*</label>*/}
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                            onClick={this.singupUser}
                          >
                            계정 만들기
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
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

export default Register;
