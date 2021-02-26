import React from 'react'
import {
    Container,
    Col,
    Row,
    Button,
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

        <Container fluid className="containerLogin">
            <Row>
                <Col className="p-0" >
                    <div className="main">
                        <img className="mb-3" src={Logo} ></img>
                        {/* <Card className="">
                            <CardHeader>
                                Login
                            </CardHeader>
                            <CardBody> */}
                        <Form>

                            <Input placeholder="email" className="Input mb-3" type="text" required></Input>

                            <Input placeholder="password" className="Input mb-3" type="password" required></Input>
                            <Button className="Submit" type="submit">Log In</Button>
                        </Form>
                        {/* </CardBody>
                        </Card> */}
                    </div>
                </Col>
            </Row>
        </Container>

    )


}

export default Login