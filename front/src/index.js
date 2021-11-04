import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "views/Home.js";
import Project from "views/Project.js";
import Sample from "./views/Sample";
import Landing from "./views/Landing.js";
import Login from "./views/Login.js";
import Profile from "./views/Profile";
import Register from "./views/Register";
import Board from "views/Board.js";
import BoardUpdate from "views/BoardUpdate";
import BoardDetail from "./views/BoardDetail";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                render={props => <Home {...props} />}
            />
            <Route
                path="/home"
                exact
                render={props => <Home {...props} />}
            />
            <Route
                path="/project"
                exact
                render={props => <Project {...props} />}
            />
            <Route
                path="/sample"
                exact
                render={props => <Sample {...props} />}
            />
            <Route
                path="/landing"
                exact
                render={props => <Landing {...props} />}
            />
            <Route
                path="/login"
                exact
                render={props => <Login {...props} />}
            />
            <Route
                path="/profile"
                exact
                render={props => <Profile {...props} />}
            />
            <Route
                path="/register"
                exact
                render={props => <Register {...props} />}
            />
            <Route
                path="/board"
                exact
                render={props => <Board {...props} />}
            />
            <Route
                path="/board/update"
                exact
                render={props => <BoardUpdate {...props} />}
            />
            <Route
                path="/board/detail"
                exact
                render={props => <BoardDetail {...props} />}
            />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
