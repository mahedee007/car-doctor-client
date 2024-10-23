import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../../components/Navbar';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Title from '../../../components/Title';

const Home = () => {
    return (
        
        <div>
            <Helmet>
            <title>Car Doctor || Home</title>
            </Helmet>
            <Navbar/>
            <Banner/>
            <AboutUs/>
            <Title subtitle='Service' title='Our Service Area' des='the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable '/>
        </div>
    );
};

export default Home;