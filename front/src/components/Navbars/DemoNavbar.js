/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// user
import UserService from "../../service/UserService";

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    this.onLogin();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
    flag: false,
    name: ""
  };

  onLogin = () => {
    this.setState({
      flag: UserService.isUserLoggedIn(),
      name: UserService.getLoggedInUserName()
    });
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  onLoginClick = (event) => {
    event.preventDefault();
    window.location.href='/login';
  }

  onLogoutClick = (event) => {
    event.preventDefault();
    UserService.logout();
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
            style={{paddingTop:"0px"}}
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/capstone_profile_4.png")}
                  style={{height:"90px"}}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      {
                        this.state.name != ""
                        ?(<span className="nav-link-inner--text" onClick={() => {
                          window.location.href = "/profile"
                        }}>{this.state.name}님</span>)
                            :(
                                <span className="nav-link-inner--text" onClick={() => {
                                  window.location.href = "/register"
                                }}>회원가입</span>
                            )
                      }
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text" onClick={() => {
                        window.location.href = "/challenge"
                      }}>챌린지</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text" onClick={() => {
                        window.location.href = "/room/create"
                      }}>화상채팅홈트</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text" onClick={() => {
                        window.location.href = "/routine"
                      }}>루틴생성</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text" onClick={() => {
                        window.location.href = "/board"
                      }}>게시판</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  {/*<UncontrolledDropdown nav>*/}
                  {/*  <DropdownToggle nav>*/}
                  {/*    <i className="ni ni-collection d-lg-none mr-1" />*/}
                  {/*    <span className="nav-link-inner--text">Examples</span>*/}
                  {/*  </DropdownToggle>*/}
                  {/*  <DropdownMenu>*/}
                  {/*    <DropdownItem to="/landing-page" tag={Link}>*/}
                  {/*      Landing*/}
                  {/*    </DropdownItem>*/}
                  {/*    <DropdownItem to="/profile-page" tag={Link}>*/}
                  {/*      Profile*/}
                  {/*    </DropdownItem>*/}
                  {/*    <DropdownItem to="/login-page" tag={Link}>*/}
                  {/*      Login*/}
                  {/*    </DropdownItem>*/}
                  {/*    <DropdownItem to="/register-page" tag={Link}>*/}
                  {/*      Register*/}
                  {/*    </DropdownItem>*/}
                  {/*  </DropdownMenu>*/}
                  {/*</UncontrolledDropdown>*/}
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {/*<NavItem>*/}
                  {/*  <NavLink*/}
                  {/*    className="nav-link-icon"*/}
                  {/*    href="https://www.facebook.com/creativetim"*/}
                  {/*    id="tooltip333589074"*/}
                  {/*    target="_blank"*/}
                  {/*  >*/}
                  {/*    <i className="fa fa-facebook-square" />*/}
                  {/*    <span className="nav-link-inner--text d-lg-none ml-2">*/}
                  {/*      Facebook*/}
                  {/*    </span>*/}
                  {/*  </NavLink>*/}
                  {/*  <UncontrolledTooltip delay={0} target="tooltip333589074">*/}
                  {/*    Like us on Facebook*/}
                  {/*  </UncontrolledTooltip>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem>*/}
                  {/*  <NavLink*/}
                  {/*    className="nav-link-icon"*/}
                  {/*    href="https://www.instagram.com/creativetimofficial"*/}
                  {/*    id="tooltip356693867"*/}
                  {/*    target="_blank"*/}
                  {/*  >*/}
                  {/*    <i className="fa fa-instagram" />*/}
                  {/*    <span className="nav-link-inner--text d-lg-none ml-2">*/}
                  {/*      Instagram*/}
                  {/*    </span>*/}
                  {/*  </NavLink>*/}
                  {/*  <UncontrolledTooltip delay={0} target="tooltip356693867">*/}
                  {/*    Follow us on Instagram*/}
                  {/*  </UncontrolledTooltip>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem>*/}
                  {/*  <NavLink*/}
                  {/*    className="nav-link-icon"*/}
                  {/*    href="https://twitter.com/creativetim"*/}
                  {/*    id="tooltip184698705"*/}
                  {/*    target="_blank"*/}
                  {/*  >*/}
                  {/*    <i className="fa fa-twitter-square" />*/}
                  {/*    <span className="nav-link-inner--text d-lg-none ml-2">*/}
                  {/*      Twitter*/}
                  {/*    </span>*/}
                  {/*  </NavLink>*/}
                  {/*  <UncontrolledTooltip delay={0} target="tooltip184698705">*/}
                  {/*    Follow us on Twitter*/}
                  {/*  </UncontrolledTooltip>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem>*/}
                  {/*  <NavLink*/}
                  {/*    className="nav-link-icon"*/}
                  {/*    href="https://github.com/creativetimofficial/argon-design-system-react"*/}
                  {/*    id="tooltip112445449"*/}
                  {/*    target="_blank"*/}
                  {/*  >*/}
                  {/*    <i className="fa fa-github" />*/}
                  {/*    <span className="nav-link-inner--text d-lg-none ml-2">*/}
                  {/*      Github*/}
                  {/*    </span>*/}
                  {/*  </NavLink>*/}
                  {/*  <UncontrolledTooltip delay={0} target="tooltip112445449">*/}
                  {/*    Star us on Github*/}
                  {/*  </UncontrolledTooltip>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem className="d-none d-lg-block ml-lg-4">*/}
                  {/*  <Button*/}
                  {/*      className="btn-neutral btn-icon"*/}
                  {/*      color="default"*/}
                  {/*      onClick={()=> {*/}
                  {/*        window.location.href = "/challenge"*/}
                  {/*      }}*/}
                  {/*      target="_blank"*/}
                  {/*  >*/}
                  {/*    <div style={{ display: "flex" }}>*/}
                  {/*    <span className="btn-inner--icon">*/}
                  {/*      <i className="ni ni-trophy"/>*/}
                  {/*    </span>*/}
                  {/*    <span className="nav-link-inner--text ml-1">*/}
                  {/*       challenge*/}
                  {/*    </span>*/}
                  {/*    </div>*/}
                  {/*  </Button>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem className="d-none d-lg-block ml-lg-4">*/}
                  {/*  <Button*/}
                  {/*      className="btn-neutral btn-icon"*/}
                  {/*      color="default"*/}
                  {/*      onClick={()=> {*/}
                  {/*        window.location.href = "/room/create"*/}
                  {/*      }}*/}
                  {/*      target="_blank"*/}
                  {/*  >*/}
                  {/*    <div style={{ display: "flex" }}>*/}
                  {/*    <span className="btn-inner--icon">*/}
                  {/*      <i className="ni ni-user-run"/>*/}
                  {/*    </span>*/}
                  {/*    <span className="nav-link-inner--text ml-1">*/}
                  {/*       chat*/}
                  {/*    </span>*/}
                  {/*    </div>*/}
                  {/*  </Button>*/}
                  {/*</NavItem>*/}
                  {/*<NavItem className="d-none d-lg-block ml-lg-4">*/}
                  {/*  <Button*/}
                  {/*      className="btn-neutral btn-icon"*/}
                  {/*      color="default"*/}
                  {/*      onClick={()=> {*/}
                  {/*        window.location.href = "/profile"*/}
                  {/*      }}*/}
                  {/*      target="_blank"*/}
                  {/*  >*/}
                  {/*    <div style={{ display: "flex" }}>*/}
                  {/*    <span className="btn-inner--icon">*/}
                  {/*      <i className="ni ni-delivery-fast mr-2"/>*/}
                  {/*    </span>*/}
                  {/*    <span className="nav-link-inner--text ml-1">*/}
                  {/*       profile*/}
                  {/*    </span>*/}
                  {/*    </div>*/}
                  {/*  </Button>*/}
                  {/*</NavItem>*/}
                  {
                    this.state.flag
                        ?
                        (<NavItem className="d-none d-lg-block ml-lg-4">
                          <Button
                              // className="btn-neutral btn-icon"
                              color="secondary"
                              onClick={this.onLogoutClick}
                              type="button"
                              target="_blank"
                          >
                            <div style={{ display: "flex" }}>
                      {/*<span className="btn-inner--icon">*/}
                      {/*  <i className="ni ni-fat-remove mr-2"/>*/}
                      {/*</span>*/}
                            <span className="nav-link-inner--text ml-1">
                        Logout
                      </span>
                            </div>
                          </Button>
                        </NavItem>)
                        :(
                            <NavItem className="d-none d-lg-block ml-lg-4">
                              <Button
                                  // className="btn-neutral btn-icon"
                                  color="secondary"
                                  onClick={this.onLoginClick}
                                  type="button"
                                  target="_blank"
                              >
                                <div style={{ display: "flex" }}>
                      {/*<span className="btn-inner--icon">*/}
                      {/*  <i className="ni ni-curved-next mr-2"/>*/}
                      {/*</span>*/}
                                <span className="nav-link-inner--text ml-1">
                        Login
                      </span>
                                </div>
                              </Button>
                            </NavItem>
                        )
                  }
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
