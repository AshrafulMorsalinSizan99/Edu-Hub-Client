import React from 'react';
import { useLoaderData } from 'react-router-dom';
import checkOutDetails from '../checkOutDetails/checkOutDetails';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header';
import './CheckOut.css';

const CheckOut = () => {
    const checkout = useLoaderData();
    console.log(checkout[0]);
    return (
        <div>
            <Header></Header>
            <div className='checkout'>

                {/* <h1>Course:{checkout.length}</h1> */}
                {/* {
                checkout.map(ck => <checkOutDetails
                    key={checkout.id}
                    ck={ck}
                >


                </checkOutDetails>)
            } */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={checkout[0].img} />
                    <Card.Body>
                        <Card.Title>{checkout[0].name}</Card.Title>

                        <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default CheckOut;