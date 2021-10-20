import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Row>
            <h2>Contuct us</h2>
            <Col lg={4} md={6} sm={12}>
                Name: Dr. Payel
                Mobile: +880123456789
            </Col>
            <Col lg={4} md={6} sm={12}>
                Name: Dr. Raj
                Mobile: +880123456789
            </Col>
            <Col lg={4} md={6} sm={12}>
                Name: Dr. Rahman
                Mobile: +880123456789
            </Col>
        </Row>
    );
};

export default Contact;