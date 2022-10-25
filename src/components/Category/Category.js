import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Category = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            {/* <h2>This is category:{allCourse.length}</h2> */}
            {
                allCourse.map(course => <CourseDetails key={course.id} course={course}>

                </CourseDetails>)
            }
        </div>
    );
};

export default Category;