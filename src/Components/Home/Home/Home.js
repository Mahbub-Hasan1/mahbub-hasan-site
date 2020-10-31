import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import MySomeArticles from '../MysomeArticles/MySomeArticles';
import MySomeWorks from '../MySomeWorks/MySomeWorks';
import ParticlesBg from 'particles-bg'
import WorksImg from '../MySomeWorks/WorksImg';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
        <div className="homeBackground">
            <MySomeWorks></MySomeWorks>
            <WorksImg></WorksImg><br></br>
            
            <MySomeArticles></MySomeArticles>
            <Footer></Footer>
            <ParticlesBg type="thick" bg={true} />
        </div>
        </>
        
    );
};

export default Home;