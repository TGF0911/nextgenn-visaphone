import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import CreateUser from './routes/CreateUser'
import Landing from './routes/Landing'
import Home from './routes/Home'
import Login from './routes/Login'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/create-room" component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/home/:id" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
