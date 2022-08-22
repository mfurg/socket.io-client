import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserState } from "./context/Context";

import "./index.css";
import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {

  const {state: {isAuth}} = UserState();

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {isAuth && <Route exact path="/:roomId" component={ChatRoom} />}
          <Redirect to='/' />
        </Switch>
      </Router>
  );
}

export default App;
