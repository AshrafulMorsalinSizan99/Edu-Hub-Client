import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './CourseDetails.css';
import { useEffect, useState } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = ({ course }) => {
    const { course_id, name, img, description } = course;
    console.log(course);
    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])
    return (

        <div>
            <Header></Header>
            <Card className="text-center mb-5 course-card">

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary'>Download Pdf</button>}
                    </Pdf>
                    <div ref={ref}>
                        <Card.Img variant="top" src={img}></Card.Img>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        {/* <Button variant="primary"><Link>Get Premium Access</Link></Button> */}
                        {/* <button className=''><Link to={`/courses/category/${categories.id}`}>Get Premium Access</Link></button> */}
                        <Link to={`/courses/category/category/${course_id}`}>
                            <Button variant='primary'>Get Premium Access</Button>
                        </Link>
                    </div>
                </Card.Body>

            </Card>
        </div >
    );
};

export default CourseDetails;