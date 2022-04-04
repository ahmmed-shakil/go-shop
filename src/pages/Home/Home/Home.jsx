import React from 'react';
import Announcement from '../../shared/Announcement/Announcement';
import NavSection from '../../shared/NavSection/NavSection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <Slider />
        </div>
    );
};

export default Home;