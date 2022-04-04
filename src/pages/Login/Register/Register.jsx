import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Announcement from '../../shared/Announcement/Announcement';
import NavSection from '../../shared/NavSection/NavSection';

const Register = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <div className='login-page pt-md-2'>
                <Container>
                    <Row>
                        <Col lg={12} sm={12} className='login-form p-3 pt-0 fs-5 w-50 mx-auto'>
                            <h2 className='text-uppercase login-header py-3'>Register</h2>

                            <Form className='mt-4 text-start'>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className='w-100' variant="dark fw-bold" type="submit">
                                    Register
                                </Button>
                            </Form>

                            <Button className='enroll-btn w-100 mt-3'>Google Sign In</Button>

                            <div className='pt-3'>
                                <h4 className='fs-6'>Already Registered? <NavLink className='text-dark' to={'/login'}>Login</NavLink></h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Register;