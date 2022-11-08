import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    return (
      <>
      <h3 className='text-center'>Sign Up to get Premium Access</h3>
        <Form className='w-75 mx-auto p-3 shadow border mt-5 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control className='mb-3' name='name' type="text" placeholder="Your Name" required />
        
        <Form.Label>Email address</Form.Label>
        <Form.Control className='my-3' type="email" placeholder="Your email" required />
        
        <Form.Label>Password</Form.Label>
        <Form.Control className='my-3' type="password" placeholder="password" required />
        
        <Form.Label>Photo</Form.Label>
        <Form.Control className='my-3' type="photo" placeholder="Photo URL" required />

        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
      </Form>
      </>
    );
};

export default Signup;