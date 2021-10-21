import React, { Fragment } from 'react';
import axios from "axios";

import Header from 'components/Header';
import HomeDetail from 'components/HomeDetail';

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
            </Fragment>
        )
    };
}

export default Home;