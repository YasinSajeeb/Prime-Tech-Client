import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Your Name" required />
        
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Your email" required />
        
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" required />
        
        <Form.Label>Photo</Form.Label>
        <Form.Control type="photo" placeholder="Photo URL" required />

        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
    );
};

export default Signup;