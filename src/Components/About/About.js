import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import myImg from '../../img/0.jpg';

const About = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="row d-flex aboutBackground">
                <div style={{ marginTop: "30px" }} className="col-md-5 col-sm-6 col-12 offset-md-1">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={myImg} alt="" className="img-fluid myImg" />
                    </div>
                    <h5 className="header-h4 name">I'm <b>Mahbub Hasan</b></h5>
                    <p className="header-p">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    <p className="icon-mt">
                        <a href="https://www.linkedin.com/in/mahbub-hasan-b112b01ba/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://mahbub-hasan.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <WebIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                            <MailOutlineIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://github.com/Md-Mahbub-Hasan" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                    </p>
                    <Link to="/contact" style={{ backgroundColor: "#F7345F", color: "#fff" }} className="btn btn-brand">Hire me</Link>
                </div>
                <div className="col-md-5 col-sm-6 col-12">
                    <div style={{ marginTop: '30px' }}>
                        <h4 className="headLineSkills">Programming Knowledge</h4>
                        <h5 className="headSkill">My Skills Set</h5>
                        <span className="skills">JavaScript</span>
                        <span className="skills">ES6</span>
                        <span className="skills">React.js</span>
                        <span className="skills">Node.js</span>
                        <span className="skills">Express.jS</span>
                        <span className="skills">MongoDB</span>
                        <br />
                        <br />
                        <span className="skills">Redux.js</span>
                        <span className="skills">Gatsby.js</span>
                        <span className="skills">Git</span>
                        <span className="skills">Firebase</span>
                        <span className="skills">VS Code</span>
                        <span className="skills">JavaScript</span>
                    </div>
                    <div style={{ marginTop: "35px" }}>
                        <h5 className="headSkill">Expertise</h5>
                        <span className="skills">JavaScript</span>
                        <span className="skills">ES6</span>
                        <span className="skills">React.js</span>
                        <span className="skills">Bootstrap</span>
                        <span className="skills">React-router</span>
                        <br /><br />
                        <span className="skills">Material Design</span>
                        <span className="skills">Html</span>
                        <span className="skills">CSS.</span>
                        <span className="skills">Git</span>
                    </div>
                    <div style={{ marginTop: "35px" }}>
                        <h5 className="headSkill">Comfortable</h5>
                        <span className="skills">Redux</span>
                        <span className="skills">Node</span>
                        <span className="skills">Express</span>
                        <span className="skills">MongoDB</span>
                        <span className="skills">Express.jS</span>
                        <span className="skills">MongoDB</span><br /><br />
                        <span className="skills">Gatsby.js</span>
                        <span className="skills">Firebase</span>
                        <span className="skills">VS Code</span>
                    </div>
                    <div style={{ marginTop: "35px" }}>
                        <h5 className="headSkill">Familiar</h5>
                        <span className="skills">Redux.js</span>
                        <span className="skills">GraphQ</span>
                        <span className="skills">React Native</span>
                        <span className="skills">Gatsby.js</span>
                    </div>
                    <div style={{ marginTop: "35px" }}>
                        <h5 className="headSkill">Tools</h5>
                        <span className="skills">Git</span>
                        <span className="skills">Create React App</span>
                        <span className="skills">VS Code</span>
                        <span className="skills">Chrome Dev tool</span><br /><br />
                        <span className="skills">Firebase</span>
                        <span className="skills">Netlify</span>
                        <span className="skills">Heroku.</span>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;