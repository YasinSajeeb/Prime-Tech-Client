import React from 'react';
import banner from '../../../assets/images/banner.webp'

const Home = () => {
    return (
        <div className='d-md-flex bg-light'>
            <div className='ps-4 pt-4'>
            <h3>Enroll Our Courses</h3>
            <p className='mt-4'>To achieve your goal of becoming a professional programmer, we are offering various programming courses. So hurry up and enroll in your preferable courses and achieve your dream.</p>
           </div>
            <div>
                <img src={banner} alt="" className='w-100' />
            </div>
        </div>
    );
};

export default Home;