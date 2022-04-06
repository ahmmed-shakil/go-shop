import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Steps = () => {
    return (
        <div className='bg py-5'>
            <h2 className='fw-bold pb-4 txt-start'>Grocery shopping in a few taps.</h2>
            <Container>
                <Row className='text-start'>
                    <Col md={4} sm={12}>
                        <h3>1. Browse</h3>
                        <p className='lead'>Go to 'shops' on go-shop app and explore thousands of products from the shops you love.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3>2. Order</h3>
                        <p className='lead'>Add your shopping faves to your cart. Review your order, apply vouchers for extra savings.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3>3. Enjoy</h3>
                        <p className='lead'>Check out and enjoy the free time you've saved. We'll be there in a flash!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Steps;