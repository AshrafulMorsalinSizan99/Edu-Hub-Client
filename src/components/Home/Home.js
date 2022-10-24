import React, { useContext } from 'react';
import Header from '../Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import homepage from '../../assets/homepage.jpg';
import homepage3 from '../../assets/homepage3.jpg';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


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
                <Carousel.Item>
                    <img
                        className="w-100 h-100 "
                        src={homepage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button onClick={handleGoogleSignIn} variant='primary'>Join Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-100"
                        src={homepage3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button onClick={handleGoogleSignIn} variant='primary'>Join Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Home;