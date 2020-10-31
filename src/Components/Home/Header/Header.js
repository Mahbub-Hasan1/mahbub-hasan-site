import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import './Header.css'

const Header = () => {
    return (
        <>
            <main style={{height:'546px'}} className="row d-flex align-items-center headerBackground">
                <div style={{ marginTop: "30px" }} className="col-md-5 col-sm-6 col-12 offset-md-1">
                    <h4 className="text-white header-p"><b> Hello, I'm</b></h4>
                    <h1 className="text-white header-h" style={{ color: '#3A4256' }}>
                        <Typical
                            steps={[' ', 1000, 'MAHBUB HASAN', 5000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h1>
                    <h4 className="text-white header-h4"><b>MERN / Full Stack Developer</b></h4>
                    <p className="text-white header-p"><b>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</b></p>
                    <Link to="/contact" style={{backgroundColor: "#F7345F", color: "#fff"}} className="btn btn-brand">Hire me</Link>
                </div>
                <div className="col-md-5 col-sm-6 col-12">
                    <img src="https://portfolio-rewon.netlify.app/static/fca3f03fd80586810fe4aae03bb77dd9/a5370/model.png" alt="" className="img-fluid" />
                </div>
            </main>
        </>
    );
};

export default Header;