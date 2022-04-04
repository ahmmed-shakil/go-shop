import React from 'react';
import Announcement from '../shared/Announcement/Announcement';
import NavSection from '../shared/NavSection/NavSection';

const Dashboard = () => {
    return (
        <div>
            <NavSection />
            <Announcement />
            <div className='d-flex justify-content-center align-items-center' style={{ height: "60vh" }}>
                <h3><span className='text-hotpink'>Dashboard</span> page is under construction</h3>
            </div>
        </div>
    );
};

export default Dashboard;