import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Vehicle.css';
const Vehicle = ({data}) => {
    const {name,image,id}=data
    const history=useHistory();
    const handleBooking=()=>{
        history.push(`/booking/${id}`)
    }
    return (
        <div className='selection-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleBooking} >BOOK NOW</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicle;