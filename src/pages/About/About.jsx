import React from 'react';
import Announcement from '../shared/Announcement/Announcement';
import NavSection from '../shared/NavSection/NavSection';

const About = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <div className='d-flex justify-content-center align-items-center' style={{ height: "60vh" }}>
                <h3> <span className='fw-bolder text-hotpink'>About page</span> is under construction</h3>
            </div>
        </div>
    );
};

export default About;