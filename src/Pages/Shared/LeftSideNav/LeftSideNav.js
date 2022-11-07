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
            <h3>All Categories: {categories.length}</h3>
            <div>
                {
                categories.map(category => <p key={category.id}>
                    <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                }    
            </div>
        </div>
    );
};

export default LeftSideNav;