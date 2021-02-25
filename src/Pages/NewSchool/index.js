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
import Axios from 'axios'
import '../../App.css'
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png'
import { useForm } from "react-hook-form"


function NewSchool() {

    const [Show, setShow] = useState(false)

    const [schoolData, setSchoolData] = useState({ status: "Inactivo" })

    const changeHandler = (event) => {
        setSchoolData({ ...schoolData, [event.target.name]: event.target.value })
    }

    const switchHandler = (event) => {
        let value = event.target.checked ? "Activo" : "Inactivo"
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
            <Row className="mb-3">
                <Col>
                    <Navbar className="dflex justify-content-between topnavbar mb-3" light expand="md">
                        <img className="logo" src={Logo}></img>
                        <Link to='/'><Button className="addbutton">Back to Home</Button></Link>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <form action="" className="p-3" > //sigue mandando consolelogs como si fuera un  onchange :(
                            <FormGroup>
                                <Label>School Name</Label>
                                <Input
                                    name="schoolName"
                                    type="string"
                                    onChange={changeHandler}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">Registred On</Label>
                                <Input
                                    name="registred"
                                    type="date"
                                    onChange={changeHandler}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">Credit Card</Label>
                                <Input
                                    name="creditCard"
                                    type="password"
                                    maxLength="16"
                                    onChange={changeHandler}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">Tier</Label>
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
                                <Label htmlFor="nf-password">Ammount of Users</Label>
                                <Input
                                    name="users"
                                    type="number"
                                    min="1"
                                    onChange={changeHandler}

                                />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <h5 className="mb-3">Status</h5>
                                <CSwitch name="status" color={"primary"} defaultValue="Off" onClick={switchHandler} />
                                <FormText>{`El valor actual es: ${schoolData.status}`}</FormText>

                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">Phone</Label>
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
                                <Label>Contact Name</Label>
                                <Input
                                    name="contact"
                                    type="string"
                                    onChange={changeHandler}
                                    required
                                />
                                <FormText className="help-block">Please enter Full Name</FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">Address</Label>
                                <Input
                                    name="address"
                                    type="string"
                                    onChange={changeHandler}
                                    required
                                />
                                <FormText className="help-block">Please enter street and number</FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">City</Label>
                                <Input
                                    name="city"
                                    type="string"
                                    onChange={changeHandler}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="nf-password">Country</Label>
                                <Input
                                    name="country"
                                    type="string"
                                    onChange={changeHandler}
                                    required
                                />
                            </FormGroup>
                            {/* <input type="submit" className="addbutton mr-3" value="Submit" /> */}
                            <button className="addbutton mr-3" onClick={onSubmit}>Submit</button>
                            <Link to='/'><Button color="secondary">Cancel</Button></Link>
                        </form>
                    </Card>
                    <CAlert color="success" show={Show}>
                        Added a school successfully!
                        <a href="/" className="alert-link"> Go Home!</a>
                         or
                         <a href="/newschool" className="alert-link">Add another School</a> </CAlert>
                </Col>
            </Row>
        </Container >
    )
}


export default NewSchool;