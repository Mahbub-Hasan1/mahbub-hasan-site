import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from '@material-ui/core/Button';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg background">
            <h2 className="text-white NavLogo">MAHBUB-HASAN</h2>
            <button className="navbar-toggler navbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <ViewHeadlineIcon color="secondary" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item">
                        <a href="https://drive.google.com/file/d/1t3FfYvgnAqAQRfzFd5n2ioedHNtyryrA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary">
                            Resume
                        </Button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;