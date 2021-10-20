import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MiddleSection = () => {
    return (
        <Row className="m-5">
            <Col sm={12} md={6} lg={4}>
                <h2>Your Health Our Care</h2>
                <p className="text-start">Choose Our Clinic, Choose The Best Care For Yourself and Your Family.
                    And we will ensure you ti get the best treatment from our doctors.
                    Because we care...
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    We Promise an Excellent Dental Care and Provide These Services
                </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img style={{ width: "100%" }} src="https://i.ibb.co/xJG2G5g/text-img-1.jpg" alt="" />
            </Col>
            <Col sm={12} md={6} lg={4}>
                <img style={{ width: "100%" }} src="https://i.ibb.co/YZhbNvd/text-img-2.jpg" alt="" />
            </Col>
        </Row>
    );
};

export default MiddleSection;