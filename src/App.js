import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'
import Insights from './Pages/Insights'
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



function App() {


    const [postId, setPostId] = useState(null);
    useEffect(() => {
      
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Carmen Serdan', users:40, creditCard:[1234567890123456,18.20,898], plan:"tier 3", date: "today", location: 'av unidad deportiva 2047' })
      };
      fetch('https://neometrics-64670-default-rtdb.firebaseio.com/schools/.json', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

      
    }, []);


    return (
    <Router>
    <Container fluid className="p-0">
            <div className="bg-info ">
              <Navbar color="light" light expand="md">
        
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">
                  Home
                </Link>
              </NavLink>
            </NavItem>
              <NavLink>
                <Link to="/insights">
                  Insights
                </Link>
              </NavLink>
          </Nav>
          
      </Navbar>
            </div>
      <Container>
        <Row>
          <Col className="col-12">
                <Switch>
                  <Route path="/insights">
                  <Insights/>
                  </Route>
                  <Route path="/">
                  <Home/>
                  </Route>
                </Switch>
          </Col>
        </Row>
      </Container>
    </Container>
    </Router>  
    )
 }
  


export default App;