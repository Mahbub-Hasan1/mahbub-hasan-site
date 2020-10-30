import React from 'react';

const MySomeWorks = () => {
    return (
        <div className="container">
            <div style={{ padding: '100px 0px 50px 0px' }}>
                <h3 className="text-white">Some of My Projects</h3>
            </div>
            <div className="card-deck">
                <div className="card">
                    <img src="https://imgur.com/X3h3ei5.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Creative Agency </h5>
                        <p className="card-text">A Single page web app with admin’s panel, form where an admin can add a service, add an admin, and update orders status to notify the client about their order’s progress. It is a responsive site.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"></small>
                    </div>
                </div>
                <div class="card">
                    <img src="https://imgur.com/fxP7ERu.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Volunteer Network</h5>
                        <p className="card-text">This is a volunteer Admin & Client base Project. This system volunteers to work on an online note base project.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"></small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://imgur.com/5pI9nyI.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Travel Guru </h5>
                        <p className="card-text">A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySomeWorks;