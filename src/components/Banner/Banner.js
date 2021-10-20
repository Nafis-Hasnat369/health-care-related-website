import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pjbyWLn/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Health City</h3>
                        <p>We'll give you the best treatment</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/yBrNfYb/banner2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Choose our experts</h3>
                        <p>Our experts our here to serve you the best.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/R2wCKpn/banner3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Exquisite treatment for all</h3>
                        <p>Our doctors will ensure you best services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;