import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, image, title, description } = props.service;
    return (
        <Col sm={12} md={6} lg={4}>
            <div className="service p-5 m-2">
                <img src={image} alt="" />
                <div>
                    <h4>{title}</h4>
                    <p>{description.slice(0, 100)}</p>
                    <Link to={`/details/${id}`}><button className="btn btn-primary">Learn more...</button></Link>
                </div>
            </div>
        </Col >
    );
};

export default Service;