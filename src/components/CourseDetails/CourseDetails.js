import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css';

const CourseDetails = ({ course }) => {
    const { name, img, description } = course;
    console.log(course);
    return (
        <Card className="text-center mb-5 course-card">

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={img}></Card.Img>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CourseDetails;