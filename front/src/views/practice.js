import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  Media,
  Row,
  Table,
} from "reactstrap";
import React, { useEffect, useState } from "react";

import $ from "jquery";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import axios from "axios";

function CreateRoom() {
  const [roomList, setRoomList] = useState("");
  // const [roomId, setRoomId]=useState(0);

  useEffect(() => {
    axios.get("/rooms").then((res) => {
      console.log(res.data);
      setRoomList(res.data);
    });
  }, []);

  $(function () {
    const uuidInput = document.querySelector("input#uuid");

    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }

    if (localStorage.getItem("uuid") === null) {
      localStorage.setItem("uuid", guid());
    }
    uuidInput.value = localStorage.getItem("uuid");
    console.log("local.uuid:" + localStorage.getItem("uuid"));
    // console.log("input.value:" + uuidInput.value);
  });

  function addUuidToButtonLink(r) {
    // setRoomId(r.id);
    let id = "button-link-" + r.id;
    // let ref = document.getElementById(id).href;
    let uuid = localStorage.getItem("uuid");

    // console.log("link.href:" + document.getElementById(id).href);
    // document.getElementById(id).href = ref + '/' + uuid;

    axios
      .get("/room/" + r.id + "/info")
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          window.location.href = "/room/" + r.id + "/user/" + uuid;
        } else {
          alert("This room is already full");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function createRoom() {
    axios
      .post("/room/create", {
        max: 2,
      })
      .then((window.location.href = "/room/create"))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <DemoNavbar />
      <main>
        <div className="position-relative">
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
            <Container className="justify-content-md-center" fluid>
              <Row>
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h1 className="display-3 text-black">
                        Select one of the rooms created
                      </h1>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">방 번호</th>
                          <th scope="col">호스트</th>
                          <th scope="col">루틴</th>
                          <th scope="col">입장자 수</th>
                          <th scope="col">입장 가능</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roomList !== "" ? (
                          <>
                            {roomList.map((room) => {
                              return (
                                <tr
                                  onClick={() => {
                                    addUuidToButtonLink(room);
                                  }}
                                >
                                  <th scope="row">
                                    <Media className="align-items-center">
                                      <Media>
                                        <span className="mb-0 text-sm">
                                          # {room.id}
                                        </span>
                                      </Media>
                                    </Media>
                                  </th>
                                  <th scope="row">
                                    <Media className="align-items-center">
                                      <Media>
                                        <span className="mb-0 text-sm">
                                          Random User
                                        </span>
                                      </Media>
                                    </Media>
                                  </th>
                                  <th scope="row">
                                    <Media className="align-items-center">
                                      <Media>
                                        <span className="mb-0 text-sm">
                                          Random Routine
                                        </span>
                                      </Media>
                                    </Media>
                                  </th>
                                  <th scope="row">
                                    <Media className="align-items-center">
                                      <Media>
                                        <span className="mb-0 text-sm">
                                          {room.cur_num}
                                        </span>
                                      </Media>
                                    </Media>
                                  </th>
                                  <th scope="row">
                                    <Media className="align-items-center">
                                      <Media>
                                        <span className="mb-0 text-sm">
                                          {room.cur_num < 2 ? "YES" : "NO"}
                                        </span>
                                      </Media>
                                    </Media>
                                  </th>
                                </tr>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <div className="text-center">No Room</div>
                          </>
                        )}
                      </tbody>
                    </Table>
                    <Button
                      id="create_button"
                      onClick={createRoom}
                      className="btn-neutral btn-icon"
                    >
                      Create Room
                    </Button>
                  </Card>
                </div>
              </Row>
              <input type="hidden" id="uuid" name="uuid" value="${uuid}" />
            </Container>
          </section>
        </div>
      </main>
      <SimpleFooter />
    </>
  );
}

export default React.memo(CreateRoom);
