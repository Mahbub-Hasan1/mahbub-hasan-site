import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './Header.css'

const Header = () => {
    return (
        <>
            <main style={{ height: '546px' }} className="row d-flex align-items-center headerBackground">
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
                    <p className="icon-mt">
                        <a href="https://www.linkedin.com/in/mahbub-hasan1" target="_blank">
                            <LinkedInIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://mahbub-hasan.netlify.app/" target="_blank">
                            <WebIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">
                            <MailOutlineIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://github.com/Md-Mahbub-Hasan" target="_blank">
                            <GitHubIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                    </p>
                    <Link to="/contact" style={{ backgroundColor: "#F7345F", color: "#fff" }} className="btn btn-brand">Hire me</Link>
                </div>
                <div className="col-md-5 col-sm-6 col-12">
                    <img src="https://portfolio-rewon.netlify.app/static/fca3f03fd80586810fe4aae03bb77dd9/a5370/model.png" alt="" className="img-fluid" />
                </div>
            </main>
        </>
    );
};

export default Header;