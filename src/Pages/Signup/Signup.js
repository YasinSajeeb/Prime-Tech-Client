import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {

  const [error, setError] = useState('');
  const {createUser, updateUserProfile} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      form.reset();
      handleUpdateUserProfile(name, photoURL);
    })
    .catch(e => {
      console.error(e)
      setError(e.message);
    })
  }

  const handleUpdateUserProfile = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(error => console.error(error));
  }

    return (
      <>
      <h3 className='text-center'>Sign Up to get Premium Access</h3>
        <Form onSubmit={handleSubmit} className='w-75 mx-auto p-3 shadow border mt-5 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control className='mb-3' name='name' type="text" placeholder="Your Name" required />
        
        <Form.Label>Email address</Form.Label>
        <Form.Control className='my-3' name="email" type="email" placeholder="Your email" required />
        
        <Form.Label>Password</Form.Label>
        <Form.Control className='my-3' name="password" type="password" placeholder="password" required />
        
        <Form.Label>Photo</Form.Label>
        <Form.Control className='my-3' name="photoURL" type="photo" placeholder="Photo URL" />

        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
      <Form.Text className='te xt-danger'>
        {error}
      </Form.Text>
      <span className='text-muted'>Already have an account? Please <Link to='/login'>Log in</Link></span>
      </Form>
      </>
    );
};

export default Signup;