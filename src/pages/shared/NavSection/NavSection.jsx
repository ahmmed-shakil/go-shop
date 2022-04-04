import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavSection = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='bg-light'>
            <Container className='py-0'>
                <Row className='py-3'>
                    <Col xs={8} className="nav d-flex jusitfy-content-between align-items-center">
                        <h2 className='fw-bold text-hotpink'>GOShop</h2>
                        <span className='nav-links d-md-flex d-none justify-content-center align-items-center ms-auto'>
                            <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/home">Home</NavLink>
                            <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/shop">Shop</NavLink>
                            <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/about">About</NavLink>
                            <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/contact">Contact</NavLink>
                            <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/dashboard">Dashboard</NavLink>
                        </span>
                    </Col>
                    <Col xs={12} md={4} className="d-md-flex d-none align-items-center auth justify-content-end">
                        <span className='d-flex align-items-center'>
                            <Link className='login' to='/login'>LOGIN</Link>
                            <Link className='reg' to='/register'>REGISTER</Link>
                        </span>
                    </Col>
                    <Col xs={4} onClick={() => setShow(true)} className="dot-bar d-flex d-md-none flex-column align-items-end justify-content-center">
                        <div className='bar bar-1'></div>
                        <div className='bar bar-2'></div>
                        <div className='bar bar-3'></div>
                    </Col>
                </Row>

                <div className='toggle-nav' style={{ right: show ? "0" : "-300px", height: "100vh", width: "300px", backgroundColor: "white" }}>
                    <div className='text-end p-3 text-hotpink fw-bolder fs-1' style={{ cursor: "pointer" }} onClick={() => setShow(false)}>X</div>

                    <div className='nav flex-column my-5 d-flex justify-content-center align-items-center ms-auto'>
                        <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/home">Home</NavLink>
                        <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/courses">Courses</NavLink>
                        <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/about">About</NavLink>
                        <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/contact">Contact</NavLink>
                        <NavLink className={(navInfo) => navInfo.isActive ? "selected" : ""} to="/dashboard">Dashboard</NavLink>

                        <Link className='login fw-bold' to='/login'>Log in</Link>
                        <Link className='reg text-white mt-2' to='/register'>Register</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavSection;