import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../../components/Navbar';

const Home = () => {
    return (
        
        <div>
            <Helmet>
            <title>Car Doctor || Home</title>
            </Helmet>
            <Navbar/>
        </div>
    );
};

export default Home;