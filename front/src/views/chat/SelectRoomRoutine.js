import React, {useEffect, useState} from 'react';
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import {Button, Card, CardHeader, Container, Media, Row, Table} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import axios from "axios";

function SelectRoomRoutine(){

    const [routines, setRoutines]=useState([]);

    useEffect(()=>{
        axios.get("/routines")
            .then((res)=>{
                console.log(res.data)
                setRoutines(res.data)
            })
    }, [])

    function showRoutineDetail(routine){
        window.location.href="/room/create/routine/"+routine.routineId;
    }

    function goBackToRoomSelectPage(){
        window.location.href="/room/create";
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
                                            <h1 className="display-3 text-black">Select one of the rooms created</h1>
                                        </CardHeader>
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                            <tr>
                                                <th scope="col">User Id</th>
                                                <th scope="col">Routine Name</th>
                                                <th scope="col">Routine Detail</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {(routines!==null) ? (
                                                    <>
                                                        {
                                                            routines.map((routine)=>{
                                                                return(
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <Media className="align-items-center">
                                                                                <Media>
                                                                                  <span className="mb-0 text-sm">
                                                                                    {routine.userId}
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
                            <Button className="col" onClick={goBackToRoomSelectPage}>
                                Go Back
                            </Button>
                        </Container>
                    </section>
                </div>
            </main>
            <SimpleFooter />
        </>
    )
}

export default React.memo(SelectRoomRoutine)