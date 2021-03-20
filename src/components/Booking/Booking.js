import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BiMap, BiMapPin } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { useParams } from 'react-router';
import fakedata from '../Fakedata/Fakedata.json';
import Map from '../GoogleMap/GoogleMap';
import './Booking.css';
const Booking = () => {
    const [place, setPlace] = useState({
        origin:'',
        dest:''
    })
    const [result,setResult]=useState(false)
    const {id}=useParams()
    console.log(id);
    const handleBlur=(e)=>{
        setPlace({...place,[e.target.name]: e.target.value });
        console.log(place);
    }
    const datas=fakedata
    const [value, setValue] = useState({
        name:'',
        image:'',
        capacity:'',
        price:''
    })
    useEffect(()=>{
        const dataDetails=datas.filter(dt=>(dt.id==id))
        const {name,image,capacity,price}=dataDetails[0];
        setValue({name,image,capacity,price});
    },[id])
    
    return (
        <div> 
            
            <Container className='booking-container'>
                <Row>
                    {
                        !result?<Col style={{}} className='form-area'>
                        <Form>
                            <Form.Group>
                               <Form.Label>Origin</Form.Label>
                                <Form.Control name='origin' placeholder="Pickup Location" onBlur={handleBlur} />
                            </Form.Group>
                            <Form.Group>
                               <Form.Label>Destination</Form.Label>
                                <Form.Control name='dest' placeholder="Drop off Location" onBlur={handleBlur}/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" placeholder="" />
                                </Form.Group>
                            </Form.Row>
                            <Button onClick={()=>setResult(true)} size="lg" type="submit" block>Search</Button>
                        </Form>
                    </Col>
                    :<Col className='form-area'>
                        <div>
                            <h1><BiMap/>{place.origin}</h1>
                            <h1><BiMapPin/>{place.dest}</h1>
                        </div>
                        
                        <div className='result-info'>
                            <img src={value.image} alt=""/>
                            <h3>{value.name}</h3>
                            <h3 style={{display:'flex'}} ><FaUserFriends/>{value.capacity}</h3>
                            <h3>${value.price}</h3>
                        </div>
                        <div className='result-info'>
                            <img src={value.image} alt=""/>
                            <h3>{value.name}</h3>
                            <h3 style={{display:'flex'}} ><FaUserFriends/>{value.capacity}</h3>
                            <h3>${value.price}</h3>
                        </div>
                        <div className='result-info'>
                            <img src={value.image} alt=""/>
                            <h3>{value.name}</h3>
                            <h3 style={{display:'flex'}} ><FaUserFriends/>{value.capacity}</h3>
                            <h3>${value.price}</h3>
                        </div>
                    </Col>
                    }
                    <Col className='map-area'>
                        <Map/>
                    </Col>
                </Row>
            </Container>
            
        </div>
           
    );
};

export default Booking;