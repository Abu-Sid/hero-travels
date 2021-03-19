import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BiMap, BiMapPin } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { useParams } from 'react-router';
import fakedata from '../Fakedata/Fakedata.json';
import './Booking.css';
const Booking = () => {
    const [place, setPlace] = useState({
        origin:'',
        dest:''
    })
    const [result,setResult]=useState(false)
    const {id}=useParams()

    const handleBlur=(e)=>{
        setPlace({...place,[e.target.name]: e.target.value });
        console.log(place);
    }
    // const [datas, setDatas] = useState([])
    // useEffect(()=>{
    //     const data=fakedata
    //     setDatas(data)
    // },[])
     const datas=fakedata
    const dataDetails=datas.filter(dt=>dt.id==id)
    const {name,image,capacity,price}=dataDetails[0];
    
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
                        <Form className='search-info'>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            <BiMap/>
                                </Form.Label>
                                <Col >
                                <Form.Control plaintext readOnly defaultValue={place.origin} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            <BiMapPin/>
                                </Form.Label>
                                <Col >
                                <Form.Control plaintext readOnly defaultValue={place.dest} />
                                </Col>
                            </Form.Group>
                        
                            </Form>
                        <div className='result-info'>
                            <img src={image} alt=""/>
                            <h3>{name}</h3>
                            <h3>{capacity}</h3>
                            <h3>${price}</h3>
                        </div>
                        <div className='result-info'>
                            <img src={image} alt=""/>
                            <h3>{name}</h3>
                            <h3>{capacity}</h3>
                            <h3>${price}</h3>
                        </div>
                        <div className='result-info'>
                            <img src={image} alt=""/>
                            <h3>{name}</h3>
                            <h3><BsPeopleFill/>{capacity}</h3>
                            <h3>${price}</h3>
                        </div>
                    </Col>
                    }

                    <Col>
                        <h1>Google Map</h1>
                    </Col>
                </Row>
            </Container>
            
        </div>
           
    );
};

export default Booking;