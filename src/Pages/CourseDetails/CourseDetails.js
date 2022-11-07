import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {name, image, totalDownload, description, id} = courseDetails;
    return (
        <div  ref={ref}>
            <div className='d-flex justify-content-between'>
            <h3>{name}</h3>
            <div className='text-center'>
                <h5 className='text-muted'>Total Download: {totalDownload}</h5>
                <Pdf targetRef={ref} filename="code-example.pdf">
                {
                ({ toPdf }) => <Button onClick={toPdf} variant="link" className='border-0 p-0 text-muted'><FaDownload>Generate Pdf</FaDownload></Button>
                }</Pdf></div>
            </div>
            <img src={image} alt="" />
            <h3>Details:</h3>
            <p>{description}</p>
            <Link to={`/courses/premium/${id}`}><Button>Get Premium Access</Button></Link>
        </div>
    );
};

export default CourseDetails;