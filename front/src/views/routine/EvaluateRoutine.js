import React, {useState} from 'react';
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
    InputGroupAddon, InputGroupText,
    Row
} from "reactstrap";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import {useParams} from "react-router";
import axios from "axios";

function EvaluateRoutine(){
    const{routineId}=useParams();
    const [evaluation, setEvaluation]=useState();

    function changeEvaluation(e){
        setEvaluation(e.target.value);
    }

    function submitEvaluation(){
        let body={
            evaluateScore: evaluation
        };

        if(body!=null){
            axios.put("/routine/"+routineId, body)
                .then(window.location.href="/room/create")
                .catch((error)=>{
                    console.log(error);
                })
        }
        else{
            alert("You don't evaluate routine.");
        }
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
                                <Card className="bg-secondary shadow border-0">
                                    <CardHeader className="bg-white pb-5">
                                        <div className="text-muted text-center mb-3">
                                            <h1>Evaluate Routine</h1>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        {/*<div className="text-center text-muted mb-4">*/}
                                        {/*    <small>*/}
                                        {/*        1: 매우나쁨*/}
                                        {/*        &nbsp;*/}
                                        {/*        2: 나쁨*/}
                                        {/*        &nbsp;*/}
                                        {/*        3: 보통*/}
                                        {/*        &nbsp;*/}
                                        {/*        4: 좋음*/}
                                        {/*        &nbsp;*/}
                                        {/*        5: 아주좋음*/}
                                        {/*    </small>*/}
                                        {/*</div>*/}


                                        <Form role="form">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-5">
                                                    <div className="custom-control custom-radio mt-2">
                                                        <input className="custom-control-input" type="radio" id="5"
                                                               name="evaluate" value="5"
                                                               onClick={(e) => {
                                                                   changeEvaluation(e)
                                                               }}/>
                                                        <label className="custom-control-label" htmlFor="5">
                                                            <h6>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                            </h6>
                                                            <div style={{ marginLeft: "auto" }}>(매우좋음)</div>
                                                        </label>
                                                    </div>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-5">
                                                    <div className="custom-control custom-radio mt-2">
                                                        <input className="custom-control-input" type="radio" id="4"
                                                               name="evaluate" value="4"
                                                               onClick={(e) => {
                                                                   changeEvaluation(e)
                                                               }}/>
                                                        <label className="custom-control-label" htmlFor="4">
                                                            <h6>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                            </h6>
                                                            <div style={{ marginLeft: "auto" }}>(좋음)</div>
                                                        </label>
                                                    </div>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-5">
                                                    <div className="custom-control custom-radio mt-2">
                                                        <input className="custom-control-input" type="radio" id="3"
                                                               name="evaluate" value="3"
                                                               onClick={(e) => {
                                                                   changeEvaluation(e)
                                                               }}/>
                                                        <label className="custom-control-label" htmlFor="3">
                                                            <h6>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                            </h6>
                                                            <div style={{ marginLeft: "auto" }}>(보통)</div>
                                                        </label>
                                                    </div>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-5">
                                                    <div className="custom-control custom-radio mt-2">
                                                        <input className="custom-control-input" type="radio" id="2"
                                                               name="evaluate" value="2"
                                                               onClick={(e) => {
                                                                   changeEvaluation(e)
                                                               }}/>
                                                        <label className="custom-control-label" htmlFor="2">
                                                            <h6>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                            </h6>
                                                            <div style={{ marginLeft: "auto" }}>(나쁨)</div>
                                                        </label>
                                                    </div>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-5">
                                                    <div className="custom-control custom-radio mt-2">
                                                        <input className="custom-control-input" type="radio" id="1"
                                                               name="evaluate" value="1"
                                                               onClick={(e) => {
                                                                   changeEvaluation(e)
                                                               }}/>
                                                        <label className="custom-control-label" htmlFor="1">
                                                            <h6>
                                                                <i className="ni ni-favourite-28 text-danger"></i>
                                                            </h6>
                                                            <div style={{ marginLeft: "auto" }}>(아주나쁨)</div>
                                                        </label>
                                                    </div>
                                                </InputGroup>
                                            </FormGroup>

                                            <div className="text-center">
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    type="button"
                                                    onClick={submitEvaluation}
                                                >
                                                    Submit Your Evaluation
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
    )
}

export default React.memo(EvaluateRoutine)