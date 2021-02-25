import React from 'react'
import {
    Container,
    Col,
    Row,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Input,
    Form,
    Label
} from 'reactstrap'
import '../Login/index.css'
import Logo from '../../Images/logo.png'

function Login() {
    return (

        <Container>
            <Row>
                <Col className="p-0 mainCol" >
                    <div className="main">
                        <img className="mb-3" src={Logo} ></img>
                        <Card className="">
                            <CardHeader>
                                Login
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Label>Username</Label>
                                    <Input className="Input mb-3" type="text" required></Input>
                                    <Label>Password</Label>
                                    <Input className="Input mb-3" type="password" required></Input>
                                    <Input className="Submit" type="submit"></Input>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>

    )


}

export default Login