import React from 'react';
import './Course.css';


const Course = (props) => {
    const { course_name, img } = props.category;
    return (
        <div className='course'>
            <img src={img} alt="" className='w-100' />
            <h5>{course_name}</h5>
            <button className='btn-cart'>
                <p className='mt-2'>See Details</p>
            </button>
        </div>
    );
};

export default Course;