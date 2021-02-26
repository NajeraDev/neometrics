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
import Signup from './Pages/SignUp/index';
import { AuthProvider } from './Components/contexts/AuthContext';
import Login from './Pages/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} exact={true} />
          <Route path="/signup" component={Signup} exact={true} />
          <PrivateRoute path="/" component={Home} exact={true} />
          <PrivateRoute path="/editschool" component={EditSchool} exact={true} />
          <PrivateRoute path="/newschool" component={NewSchool} exact={true} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;