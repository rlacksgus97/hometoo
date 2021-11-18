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
    InputGroupAddon, InputGroupText, Label,
    Row, Table
} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import axios from "axios";

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
            seq: tSeq
        }

        axios.post("/routine", body)
            .then(console.log("Routine successfully stored!"))

    }



    return(
      <>
          <DemoNavbar />
          <main>
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
                              <div className="bg-secondary shadow border-0" style={{width: "900px", height: "auto"}}>
                                  <CardBody className="px-lg-5 py-lg-5">
                                      <div className="text-center text-muted mb-4">
                                          <small>Make routine</small>
                                      </div>
                                      <Form>
                                          <FormGroup className="mb-3" controlId="formBasicEmail">
                                              <Row className="mt-5">
                                                  <Col className="md">
                                                      <Label>Routine Name</Label>
                                                      <input type="text" placeholder="Enter Routine Name"
                                                             name="trainingName" value={routineName}
                                                             onChange={e=>handleChangeRoutineName(e)} />
                                                  </Col>
                                              </Row>
                                              {trainings.map((training, i) => (
                                                  <div key={training.id}>
                                                      <Row className="mt-5">
                                                          <Col className="md">
                                                              <Label>Training Name</Label>
                                                              <input type="text" placeholder="Enter Training Name"
                                                                     name="trainingName" value={training.trainingName}
                                                                     onChange={e=>handleChangeInput(i, e)} />
                                                          </Col>
                                                          <Col className="md">
                                                              <Label>Training Sec</Label>
                                                              <input type="text" placeholder="Enter Training Sec"
                                                                     name="trainingSec" value={training.trainingSec}
                                                                     onChange={e=>handleChangeInput(i, e)} />
                                                          </Col>
                                                          <Col className="md">
                                                              <Label>Set Cnt</Label>
                                                              <input type="text" placeholder="Enter Set Cnt"
                                                                     name="trainingSetCnt" value={training.trainingSetCnt}
                                                                     onChange={e=>handleChangeInput(i, e)} />
                                                          </Col>
                                                          <Col className="md">
                                                              <Button className="mt-4 mr-5" onClick={()=>{handleAdd(i)}}>
                                                                  +
                                                              </Button>
                                                              <Button className="mt-4" disabled={training.id===1} onClick={()=>{handleSubtract(i)}}>
                                                                  -
                                                              </Button>
                                                          </Col>
                                                      </Row>
                                                  </div>
                                              ))}
                                          </FormGroup>

                                          <Button
                                                  style={{float: "left"}} onClick={registerRoutine}>
                                              Send
                                          </Button>
                                      </Form>
                                  </CardBody>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </section>
          </main>
          <SimpleFooter />
      </>
    );
}

export default React.memo(CreateRoutine)