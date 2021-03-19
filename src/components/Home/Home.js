import React, { useEffect, useState } from 'react';
import fakedata from '../Fakedata/Fakedata.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(()=>{
        const data=fakedata
        setVehicles(data)
    },[])

    return (
        <div className='main-container'>
            {
                vehicles.map(data => <Vehicle key={data.id} data={data}/>)
            }
        </div>
    );
};

export default Home;