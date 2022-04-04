import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import { sliders } from './sliderData';
import { Button, Col, Row } from 'react-bootstrap';
import SliderModal from './SliderModal/SliderModal';

const Slider = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
            >
                {
                    sliders.map(slider => <SwiperSlide className='p-5'>
                        <Row className='align-items-center justiy-content-center text-start'>
                            <Col md={6} className='ps-md-5'>
                                <span className='w-75 d-block mx-auto'>
                                    <h1 className='fw-bolder mb-3'>{slider.title}</h1>
                                    <p className='lead'>{slider.desc}</p>
                                    <Button onClick={() => setModalShow(true)} className='enroll-btn btn-lg'>Shop Now</Button>
                                    {/* MODAL */}

                                    <SliderModal show={modalShow}
                                        onHide={() => setModalShow(false)}></SliderModal>

                                    {/* MODAL */}
                                </span>
                            </Col>
                            <Col md={6} className='d-md-block d-none'>
                                <img src={slider.img} alt="" className='img-fluid' />
                            </Col>
                        </Row>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Slider;