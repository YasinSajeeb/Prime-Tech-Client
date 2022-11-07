import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
  const {image, name, price, id} = course;
    return (
        <div>
            <Col>
          <Card className='my-3 p-2'>
            <Card.Img variant="top" src={image} style={{height: '250px'}}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <div className='d-flex justify-content-between align-items-center'>
              <Card.Text className='text-muted mb-0'>
                Price: {price}
              </Card.Text>
            <Link to={`/courses/${id}`}><Button>Details</Button></Link>
              </div>
            </Card.Body>
          </Card>
          </Col>
        </div>
    );
};

export default Course;