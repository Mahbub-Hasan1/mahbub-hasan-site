import React from 'react';
import { Link } from 'react-router-dom';

const MyWorks = () => {
    return (
        <main style={{height:'200px', margin: '60px 0px 60px 0px'}} className="row d-flex align-items-center">
            <div style={{backgroundColor: '#88BB19'}} className="col-md-5 col-sm-6 col-12 offset-md-1">
                <img src="https://imgur.com/X3h3ei5.png" alt="" className="img-fluid"/>
            </div>
            <div style={{backgroundColor: '#C21960'}} className="col-md-5 col-sm-6 col-12  text-white">
                <h1 className="text-white">
                wow
                </h1>
                <h4><b>MERN / Full Stack Developer</b></h4>
                <p className="text-white" style={{fontSize: '3erm'}}><b>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</b></p>
                <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
            </div>
        </main>
    );
};

export default MyWorks;