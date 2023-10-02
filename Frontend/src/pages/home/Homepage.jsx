import React from 'react'
import Banner from './Banner';
import OurRoom from './OurRoom';
import AboutUs from './AboutUs';
import Review from './Review';
import HotelChar from './HotelChar';
import Safari from './Safari';
import Service from './Service';

const Homepage = () => {
    return (
        <>
            <Banner />
            <AboutUs />
            <OurRoom />
            <Service />
            <HotelChar />
            <Safari />
            <Review />
        </>
    )
}

export default Homepage;
