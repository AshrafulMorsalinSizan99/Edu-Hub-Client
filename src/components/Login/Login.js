import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Header from '../Header/Header';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (

        <div>
            <Header></Header>
            <h2 className='text-warning text-center'>Log In Now</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br />
                <br />
                <ButtonGroup vertical>
                    <Button variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub>Login with GitHub</Button>


                </ButtonGroup>
                <p><small>New to EduHub? <Link to='/register'>Create a new account</Link></small></p>
            </Form>

        </div>
    );
};

export default Login;