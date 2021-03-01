import React from 'react'
import { Container, Image, Button, Form, Col } from 'react-bootstrap'
import LogoImage from '../assets/images/pavleuapp1.png'

function Login() {
    return (
        <Container className="p-5 text-center">
            <div className="p-4">
                <Image src={LogoImage} width={150} fluid />
            </div>
            <div>
                <h2>
                    Sign in to Pavleu
                </h2>
            </div>
            <Col lg={5} md={8} className='m-auto p-3'>
                <Button variant="outline-primary" className="w-100">Sign in with Google</Button>
                <hr></hr>
                <Form className="my-3">
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" className="w-100" type="submit">
                        Sign in with Email
                    </Button>
                </Form>
            </Col>
        </Container>
    )
}

export default Login
