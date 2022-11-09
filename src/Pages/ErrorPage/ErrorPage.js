import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/images/Error.webp'

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img src={errorImage} alt="" className='w-100'/>
            <p>Try to another page or back to <Link to="/">Home Page</Link> </p>
            
        </div>
    );
};

export default ErrorPage;