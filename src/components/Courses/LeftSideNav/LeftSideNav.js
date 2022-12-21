import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://edu-hub-server-roan.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4 className='text-center'>All Courses:{categories.length}</h4>
            <div className='left-nav'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courses/category/${category.id}`}>{category.course_name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;