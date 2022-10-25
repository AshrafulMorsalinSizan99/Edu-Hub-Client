import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

import './CourseCart.css';

const CourseCart = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='container'>
            <div className="courses-container">
                {
                    categories.map(category => <Course key={category.id} category={category}></Course>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default CourseCart;