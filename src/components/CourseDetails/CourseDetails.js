import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header';
import './CourseDetails.css';

const CourseDetails = ({ course }) => {
    const { name, img, description } = course;
    console.log(course);
    return (

        <div>
            <Header></Header>
            <Card className="text-center mb-5 course-card">

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Img variant="top" src={img}></Card.Img>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Get Premium Access</Button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default CourseDetails;