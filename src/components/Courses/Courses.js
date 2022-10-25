import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import MainSideNav from './MainSideNav/MainSideNav';

const Courses = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="8">
                        <MainSideNav></MainSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;