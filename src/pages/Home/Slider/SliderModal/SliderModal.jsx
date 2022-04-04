import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SliderModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3><span className='text-hotpink'>GO</span>SHOP</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Grocery shopping in a few taps!</h4>
                <p className='lead'>
                    Add your shopping faves to your cart. Review your order, apply vouchers for extra savings.
                </p>
                <Link to={`/register`}><Button className='enroll-btn'>REGISTER NOW</Button></Link>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SliderModal;