import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(_ => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="services mx-4 mt-5 ">
            <h2 className="text-danger">Our Services</h2>
            <hr />
            <Row>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </Row>
        </div>
    );
};

export default Services;