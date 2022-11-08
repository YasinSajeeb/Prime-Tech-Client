import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [error, setError] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.error(error)
      setError(error.message);
    })
  }

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn = () =>{
      providerLogin(githubProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
            <h3 className='text-center'>Log In to get Premium Access</h3>
            <Form onSubmit={handleSubmit} className='w-75 mx-auto p-3 shadow border mt-5 rounded'>
                <div className='d-flex flex-column w-50 mx-auto'>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-3'>Login with Google <FcGoogle></FcGoogle> </Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark">Login with GitHub <FaGithub></FaGithub> </Button>
                </div>
                <p className='text-center my-3 text-muted'>or Login by Email Address</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className='text-danger'>
        {error}
      </Form.Text>
      <span className='d-block text-muted'>New to the website? Please <Link to='/signup'>Sign up</Link></span>
    </Form>
        </div>
    );
};

export default Login;