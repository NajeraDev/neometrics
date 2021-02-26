import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'
import './App.css';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import EditSchool from './Pages/EditSchool/index';
import NewSchool from './Pages/NewSchool';
import Login from './Pages/Login';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/dashboard" component={Home} exact={true} />
        <Route path="/editschool" component={EditSchool} exact={true} />
        <Route path="/newschool" component={NewSchool} exact={true} />
      </Switch>
    </Router>
  )
}

export default App;