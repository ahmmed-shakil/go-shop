import React from 'react';
import { categories } from './categoryData';

const Categories = () => {
    return (
        <div className='py-3 mb-4 bg-hotpink'>
            <div className='py-5 w-75 mx-auto text-gradient'>
                <h2 className='fw-bolder'>Our Categories</h2>
                <p className='text-start fs-4'>Make Easter extra special with our range of Easter themed treats! Who doesn't love American Easter candy? We have loads of classic sweets and treats from around the globe!</p>
            </div>
            <div className='categories'>
                {
                    categories.map(ct => <div className='category' style={{ backgroundImage: `url(${ct.img})` }}>
                        <h2 className='bg d-inline px-3 py-2'>{ct.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;