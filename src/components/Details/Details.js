import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(_ => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    useEffect(_ => {
        // eslint-disable-next-line eqeqeq
        const serviceDetail = services.find(service => service.id == id)
        setDetails(serviceDetail)
    }, [id, services]);
    return (
        <div className="details">
            <h2>Service Details</h2>
            {
                details && <Row>
                    <Col sm={12} md={6} lg={6} >
                        <img src={details.image} alt="" />
                        <h2>{details.title}</h2>
                        <h5>{details.description}</h5>
                    </Col>
                    <Col sm={12} md={6} lg={6} >
                        <img className="rounded" style={{ width: "100%" }} src={details.image2} alt="" />
                    </Col>
                </Row>
            }
        </div>
    );
};

export default Details;