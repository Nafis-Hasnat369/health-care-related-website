import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import DonateSection from './DonateSection';
import MiddleSection from './MiddleSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <MiddleSection />
            <DonateSection />
            <Services />
        </div>
    );
};

export default Home;