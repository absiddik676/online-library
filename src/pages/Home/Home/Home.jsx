import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import OurCategory from '../OurCategory/OurCategory';
import MeetOurStaff from '../MeetOurStaff/MeetOurStaff';
import Events from '../Events/Events';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <OurCategory/>
            <MeetOurStaff/>
            <Events/>
            <Review/>
        </div>
    );
};

export default Home;