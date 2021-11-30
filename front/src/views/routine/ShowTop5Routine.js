import React, {useEffect, useState} from 'react';
import axios from "axios";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import {Button, Card, CardHeader, Container, Media, Row, Table} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";

function ShowTop5Routine(){

    const [top5Routine, setTop5Routine]=useState([]);

    useEffect(()=>{
        axios.get("/routine/top5").then(res => {
            setTop5Routine(res.data);
        })
    }, [])

    function showRoutineDetail(routine){
        window.location.href="/room/create/routine/"+routine.routineId;
    }

    return(
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
                                          <h1 className="display-3 text-black">Hall Of Fame</h1>
                                      </CardHeader>
                                      <Table className="align-items-center table-flush" responsive>
                                          <thead className="thead-light">
                                          <tr>
                                              <th scope="col">User Name</th>
                                              <th scope="col">Routine Name</th>
                                              <th scope="col">Routine Score</th>
                                              <th scope="col">Evaluate Cnt</th>
                                              <th scope="col">Routine Detail</th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          {(top5Routine!==null) ? (
                                              <>
                                                  {
                                                      top5Routine.map((routine)=>{
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
                                                                  <th scope="row" onClick={()=>{showRoutineDetail(routine)}}>
                                                                      <Media className="align-items-center">
                                                                          <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    Click Here To See Details
                                                                                  </span>
                                                                          </Media>
                                                                      </Media>
                                                                  </th>
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
                          <input type="hidden" id="uuid" name="uuid" value="${uuid}"/>
                          {/*<Button className="col" onClick={goBackToRoomSelectPage}>*/}
                          {/*    Go Back*/}
                          {/*</Button>*/}
                      </Container>
                  </section>
              </div>
          </main>
          <SimpleFooter />
      </>
    );
}

export default React.memo(ShowTop5Routine)