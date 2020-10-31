import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="container text-center">
            <img src="https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562__340.png"></img>
            <h2>This page not puond</h2>
            <Link to="/">
                <input type="submit" value="Back to Home"  style={{ width: '40%', backgroundColor: '#111430', marginLeft: '15px' }}  className="btn btn-primary btn-lg"/>
            </Link>
        </div>
    );
};

export default NoMatch;