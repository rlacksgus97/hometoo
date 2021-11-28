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
import BoardCreate from "./views/BoardCreate";
import ChallengeDetail from "./views/ChallengeDetail";
import FindPassword from "./views/FindPassword";

import ChatRoom from "./views/chat/ChatRoom";
import CreateRoom from "./views/chat/CreateRoom";
import CreateRoutine from "./views/routine/CreateRoutine";
import SelectRoomRoutine from "./views/chat/SelectRoomRoutine";
import ShowRoutineDetails from "./views/routine/ShowRoutineDetails";
import EvaluateRoutine from "./views/routine/EvaluateRoutine";
import ShowTop5Routine from "./views/routine/ShowTop5Routine";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                render={props => <Board {...props} />}
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
                path="/board/update/:no"
                exact
                render={props => <BoardUpdate {...props} />}
            />
            <Route
                path="/board/detail/:no"
                exact
                render={props => <BoardDetail {...props} />}
            />
            <Route
                path="/board/create"
                exact
                render={props => <BoardCreate {...props} />}
            />
            <Route
                path="/challenge/detail"
                exact
                render={props => <ChallengeDetail {...props} />}
            />
            <Route
                path="/find/password"
                exact
                render={props => <FindPassword {...props} />}
            />
            <Route
                path="/room/create"
                exact
                render={props => <CreateRoom {...props} />}
            />
            <Route
                path="/room/:id/user/:uuid/routine/:routineId"
                render={props => <ChatRoom {...props} />}
            />
            <Route
                path="/routine"
                exact
                render={props => <CreateRoutine {...props} />}
            />
            <Route
                path="/room/create/routine"
                exact
                render={props => <SelectRoomRoutine {...props} />}
            />
            <Route
                path="/room/create/routine/:routineId"
                render={props => <ShowRoutineDetails {...props} />}
            />
            <Route
                path="/routine/:routineId/evaluation"
                render={props => <EvaluateRoutine {...props} />}
            />
            <Route
                path="/routine/rank"
                render={props => <ShowTop5Routine {...props} />}
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
