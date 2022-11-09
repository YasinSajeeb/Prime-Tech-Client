import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    
    return (
        <div>
            <h3>Categories</h3>
            <div>
                {
                categories.map(category => <p key={category.id} className='my-4'>
                    <Link to={`/courses/${category.id}`} className='p-2 bg-primary text-decoration-none text-white rounded'>{category.name}</Link>
                    </p>)
                }    
            </div>
        </div>
    );
};

export default LeftSideNav;