import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {
     const premium = useLoaderData();
    const {name} = premium;
    return (
        <div>
            <h3>Premium Course</h3>
            <h4>{name}</h4>
        </div>
    );
};

export default PremiumCourse;