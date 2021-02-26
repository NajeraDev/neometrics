import React, { useRef, useState } from 'react'
import {
    Container,
    Col,
    Row,
    Button,
    Alert,
    Input,
    Form,
    Label,
    FormGroup
} from 'reactstrap'
import { useAuth } from '../../Components/contexts/AuthContext'

import Logo from '../../Images/logo.png'
import { FormControl } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import './login.css'


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Unable to log in")
        }


    }



    return (

        <Container fluid className="containerLogin">
            <Row>
                <Col className="p-0" >
                    <div className="main">
                        <img className="mb-3" src={Logo} ></img>
                        <h2 className="text-white mb-3">Log In</h2>
                        {error && <Alert color="danger">{error}</Alert>}
                        <Form className="mb-3" onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormControl placeholder="email" className="Input mb-3" type="email" ref={emailRef} required></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <FormControl placeholder="password" className="Input mb-3" type="password" ref={passwordRef} required></FormControl>
                            </FormGroup>

                            <Button className="Submit" disabled={loading} type="submit">Log in</Button>
                        </Form>
                        <h5 className="text-white">Don't have an account? <Link to="/signup" className="redirect"> Sign Up</Link></h5>

                    </div>
                </Col>
            </Row>
        </Container>

    )


}

export default Login