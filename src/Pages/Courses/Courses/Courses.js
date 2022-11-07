import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../../Course/Course';


const Courses = () => {
  const [ courses, setCourses] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/courses')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])

    return (
      <div className='mb-4'>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='text-center'>Visit Our Courses</h2>
              <Row className='gap-0 mt-3' xs={1} md={2}>

              {
          courses.map( course => <Course
          key={course.id}
          course={course}>

          </Course>)
        }

              </Row>
            </Col>
          </Row>
        </Container>
        </div>
    );
};

export default Courses;