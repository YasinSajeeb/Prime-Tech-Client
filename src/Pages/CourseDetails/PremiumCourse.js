import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
     const premium = useLoaderData();
    const {name} = premium;
    return (
        <div className='text-center'>
            <h3>Premium Course</h3>
            <h4 className='text-primary'>{name}</h4>
            <p className='text-muted mt-4'>Congratulations on having premium access in PrimeTech courses!!!</p>
        </div>
    );
};

export default PremiumCourse;