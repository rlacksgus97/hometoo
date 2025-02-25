import React, {useEffect, useState} from 'react';
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup, Input,
    InputGroup,
    InputGroupAddon, InputGroupText, Label, Media,
    Row, Table
} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import axios from "axios";
import Hero from "../Hero";

function CreateRoutine(){

    const [trainings, setTrainings]=useState([
        {
            id: 1,
            trainingName: "",
            trainingSec: "",
            trainingSetCnt: "",
        }
    ]);
    const [sendMessage, setSendMessage]=useState({});
    const [routineName, setRoutineName]=useState("");

    const handleChangeRoutineName=(e)=>{
        console.log(e.target.value);
        setRoutineName(e.target.value);
    }

    const handleChangeInput=(i, e)=>{
        console.log(e.target.value)
        const values=[...trainings]
        values[i][e.target.name]=e.target.value;
        setTrainings(values)
    }

    const handleAdd=(id)=>{
        setTrainings([
            ...trainings,
            {
                id: id + 2,
                trainingName: "",
                trainingSec: "",
                trainingSetCnt: ""
            }])
    }

    const handleSubtract=(i)=>{
        const values=[...trainings]
        values.splice(i, 1)
        setTrainings([...values]);
    }

    function registerRoutine(){
        const tName=[]
        const tSec=[]
        const tSetCnt=[]
        const tSeq=[]

        for(let i=0;i<trainings.length;i++){
            tName.push(trainings[i].trainingName)
            tSec.push(trainings[i].trainingSec)
            tSetCnt.push(trainings[i].trainingSetCnt)
            tSeq.push(i+1);
        }

        const body={
            routineName: routineName,
            trainingName: tName,
            trainingSec: tSec,
            trainingSetCnt: tSetCnt,
            seq: tSeq,
            userName: localStorage.getItem("authenticatedUserName")
        }

        axios.post("/routine", body)
            .then((res)=>{
                window.location.href="/room/create"
            });
    }



    return(
        <>
            <DemoNavbar />
            <div className="position-relative">
                <Hero />
            </div>
            <section className="section section-components pb-5">
                <Container className="justify-content-md-center" fluid>
                    <Row className="justify-content-center mt--300">
                        <Col lg="8">
                            <Card className="bg-gradient-secondary shadow">
                                <CardBody className="p-lg-5">
                                    <div>
                                        <Container fluid lg="8">
                                            <Row lg="3">
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <h1 className="font-weight-bold">루틴 생성</h1>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <h5>나만의 루틴을 생성해서 다른 사람들과 함께 운동해보세요!</h5>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <div className="border-0">
                                                        <Col md="12" style={{ display: "flex" }}>
                                                            <h5 className="display-3 text-black">
                                                                Title
                                                            </h5>
                                                            &nbsp;
                                                            &nbsp;
                                                            <Input type="text" placeholder="Enter Routine Name"
                                                                   name="trainingName" value={routineName}
                                                                   onChange={e=>handleChangeRoutineName(e)} />
                                                        </Col>
                                                    </div>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <Table className="align-items-center table-flush" responsive>
                                                        <thead className="thead-light">
                                                        <tr>
                                                            <th scope="col">Training Name</th>
                                                            <th scope="col">Training Sec</th>
                                                            <th scope="col">Set Cnt</th>
                                                            <th scope="col">Add</th>
                                                            <th scope="col">Delete</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {trainings.map((training, i)=>{
                                                            return(
                                                                <tr>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                              <span className="mb-0 text-sm">
                                                                                  <Input className="mt-4" type="text" placeholder="Enter Training Name"
                                                                                         name="trainingName" value={training.trainingName}
                                                                                         onChange={e=>handleChangeInput(i, e)} />
                                                                              </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                              <span className="mb-0 text-sm">
                                                                                  <Input className="mt-4" type="text" placeholder="Enter Training Sec"
                                                                                         name="trainingSec" value={training.trainingSec}
                                                                                         onChange={e=>handleChangeInput(i, e)} />
                                                                              </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                              <span className="mb-0 text-sm">
                                                                                  <Input className="mt-4" type="text" placeholder="Enter Set Cnt"
                                                                                         name="trainingSetCnt" value={training.trainingSetCnt}
                                                                                         onChange={e=>handleChangeInput(i, e)} />
                                                                              </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                              <span className="mb-0 text-sm">
                                                                                  <Button className="mt-4" onClick={()=>{handleAdd(i)}}>
                                                                                      +
                                                                                  </Button>
                                                                              </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                    <th scope="row">
                                                                        <Media className="align-items-center">
                                                                            <Media>
                                                                              <span className="mb-0 text-sm">
                                                                                  <Button className="mt-4" disabled={training.id===1} onClick={()=>{handleSubtract(i)}}>
                                                                                      -
                                                                                  </Button>
                                                                              </span>
                                                                            </Media>
                                                                        </Media>
                                                                    </th>
                                                                </tr>
                                                            )
                                                        })}
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                                <Col md="12" style={{ display: "flex" }}>
                                                    <Button className="col" onClick={registerRoutine}>
                                                        Send
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        // <>
        //     <DemoNavbar />
        //     <main>
        //         <section className="section section-lg section-shaped pb-250">
        //             <div className="shape shape-style-1 shape-default">
        //                 <span />
        //                 <span />
        //                 <span />
        //                 <span />
        //                 <span />
        //                 <span />
        //                 <span />
        //                 <span />
        //                 <span />
        //             </div>
        //             <Container className="justify-content-md-center" fluid>
        //                 <Row>
        //                     <div className="col">
        //                         <Card className="shadow">
        //                             <CardHeader className="border-0">
        //                                 <h5 className="display-3 text-black">
        //                                     Routine Name
        //                                     <Input type="text" placeholder="Enter Routine Name"
        //                                            name="trainingName" value={routineName}
        //                                            onChange={e=>handleChangeRoutineName(e)} />
        //                                 </h5>
        //                             </CardHeader>
        //                             <Table className="align-items-center table-flush" responsive>
        //                                 <thead className="thead-light">
        //                                 <tr>
        //                                     <th scope="col">Training Name</th>
        //                                     <th scope="col">Training Sec</th>
        //                                     <th scope="col">Set Cnt</th>
        //                                     <th scope="col">Add</th>
        //                                     <th scope="col">Delete</th>
        //                                 </tr>
        //                                 </thead>
        //                                 <tbody>
        //                                     {trainings.map((training, i) => {
        //                                         return(
        //                                                 <tr>
        //                                                     <th scope="row">
        //                                                         <Media className="align-items-center">
        //                                                             <Media>
        //                                                         <span className="mb-0 text-sm">
        //                                                             <Input className="mt-4" type="text" placeholder="Enter Training Name"
        //                                                                    name="trainingName" value={training.trainingName}
        //                                                                    onChange={e=>handleChangeInput(i, e)} />
        //                                                         </span>
        //                                                             </Media>
        //                                                         </Media>
        //                                                     </th>
        //                                                     <th scope="row">
        //                                                         <Media className="align-items-center">
        //                                                             <Media>
        //                                                         <span className="mb-0 text-sm">
        //                                                             <Input className="mt-4" type="text" placeholder="Enter Training Sec"
        //                                                                    name="trainingSec" value={training.trainingSec}
        //                                                                    onChange={e=>handleChangeInput(i, e)} />
        //                                                         </span>
        //                                                             </Media>
        //                                                         </Media>
        //                                                     </th>
        //                                                     <th scope="row">
        //                                                         <Media className="align-items-center">
        //                                                             <Media>
        //                                                         <span className="mb-0 text-sm">
        //                                                             <Input className="mt-4" type="text" placeholder="Enter Set Cnt"
        //                                                                    name="trainingSetCnt" value={training.trainingSetCnt}
        //                                                                    onChange={e=>handleChangeInput(i, e)} />
        //                                                         </span>
        //                                                             </Media>
        //                                                         </Media>
        //                                                     </th>
        //                                                     <th scope="row">
        //                                                         <Media className="align-items-center">
        //                                                             <Media>
        //                                                         <span className="mb-0 text-sm">
        //                                                             <Button className="mt-4" onClick={()=>{handleAdd(i)}}>
        //                                                                 +
        //                                                             </Button>
        //                                                         </span>
        //                                                             </Media>
        //                                                         </Media>
        //                                                     </th>
        //                                                     <th scope="row">
        //                                                         <Media className="align-items-center">
        //                                                             <Media>
        //                                                         <span className="mb-0 text-sm">
        //                                                             <Button className="mt-4" disabled={training.id===1} onClick={()=>{handleSubtract(i)}}>
        //                                                                 -
        //                                                             </Button>
        //                                                         </span>
        //                                                             </Media>
        //                                                         </Media>
        //                                                     </th>
        //                                                 </tr>
        //                                         )
        //                                     })}
        //                                 </tbody>
        //                             </Table>
        //                         </Card>
        //                     </div>
        //                 </Row>
        //                 <Button className="col" onClick={registerRoutine}>
        //                     Send
        //                 </Button>
        //             </Container>
        //         </section>
        //     </main>
        //     <SimpleFooter />
        // </>
    );
}

export default React.memo(CreateRoutine)