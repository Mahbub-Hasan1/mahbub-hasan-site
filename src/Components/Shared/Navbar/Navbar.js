import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className="navbar navbar-expand-lg background">
            <h2 className="text-white">MAHBUB-HASAN</h2>
            <button className="navbar-toggler navbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
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
                        <a href="../../imges/MD.MAHBUB HASAN.pdf" download="ResumeMAHBUB">
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