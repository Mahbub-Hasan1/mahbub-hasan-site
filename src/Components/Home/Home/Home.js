import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import MySomeArticles from '../MysomeArticles/MySomeArticles';
import MySomeWorks from '../MySomeWorks/MySomeWorks';
import ParticlesBg from 'particles-bg'

const Home = () => {
    return (
        <>
        <div>
            <Navbar></Navbar>
            <Header></Header>
            
        </div>
        <div className="homeBackground">
            <MySomeWorks></MySomeWorks>
            <MySomeArticles></MySomeArticles>
            <Footer></Footer>
        </div>
        <ParticlesBg type="thick" bg={true} />
        </>
        
    );
};

export default Home;