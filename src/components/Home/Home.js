import React, { useContext } from 'react';
import Header from '../Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import homepage from '../../assets/homepage.jpg';
import homepage3 from '../../assets/homepage3.jpg';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

import './Home.css';


const Home = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <Header></Header>
            <Carousel>
                <Carousel.Item className='header1'>
                    <img
                        className="w-100 h-100 "
                        src={homepage}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3 className='text-warning'>Welcome to Edu Hub</h3>
                        <p className='text-warning'>A website where you will get your favorite courses. Do join with us and explore.</p>
                        <Button onClick={handleGoogleSignIn} variant='primary'>Join Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='header1'>
                    <img
                        className="w-100 h-100"
                        src={homepage3}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='caption'>
                        <h3 className='text-warning'>Welcome to Edu Hub</h3>
                        <p className='text-warning'>A website where you will get your favorite courses. Do join with us and explore.</p>
                        <Button onClick={handleGoogleSignIn} variant='primary'>Join Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Home;