import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Button, Image, Tooltip } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import logo from '../../assets/logo2.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    const [theme, setTheme] = useState('light-theme');
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        }
        else {
            setTheme('dark-theme');
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                {/* <Navbar.Brand href="#home">EduHub</Navbar.Brand> */}
                <Navbar.Brand href="#home">
                    {/* <img
                        alt=""
                        src="/src/assets/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} */}
                    <img src={logo}
                        alt=''
                        // height="10"
                        // width="100"
                        style={{ height: '30px' }}


                        className="d-inline-block "
                    />{' '}


                    EduHub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <button><Link to='/home'>Home</Link></button>
                        <button> <Link className='options' to='/courses'>Courses</Link></button>
                        <button><Link className='options' to='/faq'>FAQ</Link></button>
                        <button><Link className='options' to='/blog'>Blog</Link></button>
                        <button><Link className='options' to='/login'>Login</Link></button>
                        <button onClick={() => toggleTheme()}>Toggle</button>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user.displayName}</span> */}
                                        <Button onClick={handleLogOut} variant='dark' className=' me-2 '>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {/* <ReactTooltip title={user?.displayName}> */}
                            {/* <Tooltip title={user?.displayName}> */}
                            <Container data-tip data-for="name">
                                {user?.photoURL ?

                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    :
                                    <FaUser></FaUser>

                                }
                            </Container>
                            <ReactTooltip id="name">
                                <span>{user?.displayName}</span>
                            </ReactTooltip>
                            {/* </Tooltip> */}
                            {/* </ReactTooltip> */}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;