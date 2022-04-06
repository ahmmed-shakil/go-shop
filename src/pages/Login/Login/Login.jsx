import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Announcement from '../../shared/Announcement/Announcement';
import NavSection from '../../shared/NavSection/NavSection';

const Login = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <div className='login-page'>
                <Container className='pt-5'>
                    <Row>
                        <Col lg={12} sm={12} className='login-form p-3 pt-0 fs-5 w-50 mx-auto'>
                            <h2 className='text-uppercase login-header pb-3'>Log In</h2>
                            <Form className='text-start mt-4'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className='w-100' variant="dark fw-bold" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <Button className='enroll-btn w-100 my-2'>Google Sign In</Button>
                            <div>
                                <h4 className='fs-6'>Don't have an account? <NavLink className='text-dark text-decoration-underline' to={'/register'}>Create a new one</NavLink></h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;