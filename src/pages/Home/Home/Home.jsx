import React from 'react';
import Announcement from '../../shared/Announcement/Announcement';
import NavSection from '../../shared/NavSection/NavSection';
import Categories from '../Categories/Categories';
import ShopSection from '../ShopSection/ShopSection';
import Slider from '../Slider/Slider';
import Steps from '../Steps/Steps';

const Home = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <Slider />
            <Steps />
            <Categories />
            <ShopSection />
        </div>
    );
};

export default Home;