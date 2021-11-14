import React, { Fragment } from 'react';
import axios from "axios";

import Header from 'components/Header';
import HomeDetail from 'components/HomeDetail';

//css
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss"


import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ""
        }
    };

    componentDidMount() {
        this.getApi();
    };

    getApi(){
        axios.get("http://localhost:8080/test")
                .then(res => {
                    console.log(res);
                    this.setState( {
                        message: res.data.message
    })
})
            .catch(res => console.log(res))
};

    render() {
        return (
            <Fragment>
                <Header />
                <HomeDetail />
                <Col md="6">
                <Form>
                    <Input
                        id="exampleFormControlTextarea1"
                        placeholder="Write a large text here ..."
                        rows="3"
                        type="textarea"
                    />
                </Form>
                </Col>
            </Fragment>
        )
    };
}

export default Home;