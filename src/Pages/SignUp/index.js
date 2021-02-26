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
import './index.css'
import Logo from '../../Images/logo.png'
import { FormControl } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'


function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value !== confirmPassRef.current.value) {

            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign up')
            console.log(error)
        }
    }



    return (

        <Container fluid className="containerLogin">
            <Row>
                <Col className="p-0" >
                    <div className="main">
                        <img className="mb-3" src={Logo} ></img>
                        <h2 className="text-white mb-3">Sign Up</h2>
                        {error && <Alert color="danger">{error}</Alert>}
                        <Form className="mb-3" onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormControl placeholder="email" className="Input mb-3" type="email" ref={emailRef} required></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <FormControl placeholder="password" className="Input mb-3" type="password" ref={passwordRef} required></FormControl>
                            </FormGroup>
                            <FormGroup>
                                <FormControl placeholder="confirm password" className="Input mb-3" type="password" ref={confirmPassRef} required></FormControl>
                            </FormGroup>
                            <Button className="Submit" disabled={loading} type="submit">Sign Up</Button>
                        </Form>
                        <h5 className="text-white">Already have an Account? <Link className="redirect" to="/login"> Log In </Link></h5>

                    </div>
                </Col>
            </Row>
        </Container>

    )


}

export default SignUp