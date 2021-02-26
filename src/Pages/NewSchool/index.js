import React, { useState, useEffect } from 'react';

import {
    Col,
    Card,
    Container,
    Row,
    CardHeader,
    CardBody,
    FormText,
    Label,
    Input,
    Form,
    FormGroup,
    CardFooter,
    Button,
    Alert,
    Navbar,
} from 'reactstrap'
import { CSwitch, CAlert } from '@coreui/react'
import '../../index.css'
import '../NewSchool/index.css'
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'



function NewSchool() {

    const [Show, setShow] = useState(false)

    const [schoolData, setSchoolData] = useState({ status: false })

    const changeHandler = (event) => {
        setSchoolData({ ...schoolData, [event.target.name]: event.target.value })
    }

    const switchHandler = (event) => {
        let value = event.target.checked ? true : false
        setSchoolData({ ...schoolData, [event.target.name]: value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("Listo para enviar");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(schoolData)
        };
        fetch('https://neometrics-64670-default-rtdb.firebaseio.com/.json', requestOptions)
            .then(res => {
                setShow(true)
            });
    }



    return (
        <Container className="smallContainer">
            <Row >
                <Col>
                    <Navbar className="addschoolnav" light expand="md">
                        <img className="addschoollogo" src={Logo}></img>
                        <Link to='/'><Button className="addbutton">Back to Home</Button></Link>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>

                    <form action="" className="p-3" >
                        <FormGroup>
                            <Label className="text-white">School Name</Label>
                            <Input
                                name="schoolName"
                                type="string"
                                onChange={changeHandler}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Registred On</Label>
                            <Input
                                name="registred"
                                type="date"
                                onChange={changeHandler}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Credit Card</Label>
                            <Input
                                name="creditCard"
                                type="password"
                                maxLength="16"
                                onChange={changeHandler}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Tier</Label>
                            <Input
                                name="tier"
                                type="number"
                                min="1"
                                max="3"
                                onChange={changeHandler}
                                required
                            />

                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Ammount of Users</Label>
                            <Input
                                name="users"
                                type="number"
                                min="1"
                                onChange={changeHandler}

                            />
                        </FormGroup>

                        <FormGroup className="mb-3">
                            <h5 className="mb-3 text-white">Is Active?</h5>
                            <CSwitch name="status" color={"danger"} shape="pill" defaultValue="Off" onClick={switchHandler} />

                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Phone</Label>
                            <Input
                                type="tel"
                                name="phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                onChange={changeHandler}
                                required
                            />
                            <FormText className="help-block">Format: 123-456-5678</FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white">Contact Name</Label>
                            <Input

                                name="contact"
                                type="string"
                                onChange={changeHandler}
                                required
                            />
                            <FormText className="help-block">Please enter Full Name</FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Address</Label>
                            <Input
                                name="address"
                                type="string"
                                onChange={changeHandler}
                                required
                            />
                            <FormText className="help-block">Please enter street and number</FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">City</Label>
                            <Input
                                name="city"
                                type="string"
                                onChange={changeHandler}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-white" htmlFor="nf-password">Country</Label>
                            <Input
                                name="country"
                                type="string"
                                onChange={changeHandler}
                                required
                            />
                        </FormGroup>
                        {/* <input type="submit" className="addbutton mr-3" value="Submit" /> */}
                        <button className="addschoolsubmit mr-3" onClick={onSubmit}>Submit</button>
                        <Link to='/'><Button color="secondary">Cancel</Button></Link>
                    </form>

                    <CAlert color="success" show={Show}>
                        Added a school successfully!
                        <a href="/" className="alert-link"> Go Home! </a>
                         or
                         <a href="/newschool" className="alert-link"> Add another School</a> </CAlert>
                </Col>
            </Row>
        </Container >
    )
}


export default NewSchool;