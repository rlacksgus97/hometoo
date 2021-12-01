import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Board from "views/Board.js";
import BoardCreate from "./views/BoardCreate";
import BoardDetail from "./views/BoardDetail";
import BoardUpdate from "views/BoardUpdate";
import ChallengeCardList from "views/ChallengeCardList";
import ChallengeCreate from "views/ChallengeCreate";
import ChallengeDetail from "./views/ChallengeDetail";
import ChatRoom from "./views/chat/ChatRoom";
import CreateRoom from "./views/chat/CreateRoom";
import CreateRoutine from "./views/routine/CreateRoutine";
import EvaluateRoutine from "./views/routine/EvaluateRoutine";
import FindPassword from "./views/FindPassword";
import Home from "views/Home.js";
import Landing from "./views/Landing.js";
import Login from "./views/Login.js";
import MyChallengeCardList from "views/MyChallengeCardList";
import MyScore from "views/MyScore";
import MyTrialCardList from "views/MyTrialCardList";
import Profile from "./views/Profile";
import Project from "views/Project.js";
import React from "react";
import ReactDOM from "react-dom";
import Register from "./views/Register";
import Sample from "./views/Sample";
import SelectRoomRoutine from "./views/chat/SelectRoomRoutine";
import ShowRoutineDetails from "./views/routine/ShowRoutineDetails";
import ShowTop5Routine from "./views/routine/ShowTop5Routine";
import TrialCardList from "views/TrialCardList";
import TrialCreate from "views/TrialCreate";
import TrialDetail from "views/TrialDetail";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Board {...props} />} />
      <Route path="/home" exact render={(props) => <Home {...props} />} />
      <Route path="/project" exact render={(props) => <Project {...props} />} />
      <Route path="/sample" exact render={(props) => <Sample {...props} />} />
      <Route path="/landing" exact render={(props) => <Landing {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/profile" exact render={(props) => <Profile {...props} />} />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route path="/board" exact render={(props) => <Board {...props} />} />
      <Route
        path="/board/update/:no"
        exact
        render={(props) => <BoardUpdate {...props} />}
      />
      <Route
        path="/board/detail/:no"
        exact
        render={(props) => <BoardDetail {...props} />}
      />
      <Route
        path="/board/create"
        exact
        render={(props) => <BoardCreate {...props} />}
      />
      <Route
        path="/challenge"
        exact
        render={(props) => <ChallengeCardList {...props} />}
      />
      <Route
        path="/challenge/create"
        exact
        render={(props) => <ChallengeCreate {...props} />}
      />
      <Route
        path="/challenge/:challengeid"
        render={(props) => <ChallengeDetail {...props} />}
      />
      <Route
        path="/find/password"
        exact
        render={(props) => <FindPassword {...props} />}
      />
      <Route
        path="/room/create"
        exact
        render={(props) => <CreateRoom {...props} />}
      />
      <Route
        path="/room/:id/user/:uuid/routine/:routineId"
        render={(props) => <ChatRoom {...props} />}
      />
      <Route
        path="/routine"
        exact
        render={(props) => <CreateRoutine {...props} />}
      />
      <Route
        path="/room/create/routine"
        exact
        render={(props) => <SelectRoomRoutine {...props} />}
      />
      <Route
        path="/room/create/routine/:routineId"
        render={(props) => <ShowRoutineDetails {...props} />}
      />
      <Route
        path="/routine/:routineId/evaluation"
        render={(props) => <EvaluateRoutine {...props} />}
      />
      <Route
        path="/routine/rank"
        render={(props) => <ShowTop5Routine {...props} />}
      />
      <Route
        path="/trial/create/:challengeid"
        render={(props) => <TrialCreate {...props} />}
      />
      <Route
        path="/trial/:challengeid"
        render={(props) => <TrialCardList {...props} />}
      />
      <Route
        path="/trial_detail/:trialid"
        render={(props) => <TrialDetail {...props} />}
      />
      <Route
        path="/mychallenges"
        render={(props) => <MyChallengeCardList {...props} />}
      />
      <Route
        path="/mytrials"
        render={(props) => <MyTrialCardList {...props} />}
      />
      <Route
        path="/score/:trialid"
        render={(props) => <MyScore {...props} />}
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
