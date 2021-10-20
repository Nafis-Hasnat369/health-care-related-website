import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DonateSection = () => {
    return (
        <div className="mt-5">
            <h2 className="text-danger mt-5" >DONATE TO HELP OTHERS</h2>
            <Row className="m-5">
                <Col sm={12} md={6} lg={4}>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/fQSKgc0/h-img-4.jpg" alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img style={{ width: "100%" }} src="https://i.ibb.co/RPSP2Zh/h-img-5.jpg" alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <h4 className="text-end">Please help us to build a exquisite community to serve others by donating your alice.</h4>
                </Col>
            </Row>
        </div>
    );
};

export default DonateSection;