import React from 'react';
import { Link } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link';
import { GlassMagnifier } from "react-image-magnifiers";


const MySomeWorks = () => {
    return (
        <div className="container">
            <div style={{ padding: '100px 0px 50px 0px' }}>
                <h3 className="text-white text-center">Some of My Projects</h3>
            </div>
            <div className="card-deck">
                <div className="card">
                        <GlassMagnifier
                            imageSrc="https://mahbubhasan.netlify.app/images/Creative.agency.PNG"
                            className="card-img-top"
                            imageAlt="Example"
                        />
                    <div className="card-body">
                        <h5 className="card-title">Creative Agency </h5>
                        <p className="card-text">A Single page web app with admin’s panel, form where an admin can add a service, add an admin, and update orders status to notify the client about their order’s progress. It is a responsive site.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <a href="https://github.com/Md-Mahbub-Hasan/creative-agency-client" target="_blank">
                                <GitHub className="icon" />
                            </a>

                            <a href="https://creative-agency-32149.web.app/" target="_blank">
                                <LinkIcon style={{ float: 'right' }} className="icon" />
                            </a> 
                        </small>
                    </div>
                </div>

                <div class="card">
                        <GlassMagnifier
                            imageSrc="https://mahbubhasan.netlify.app/images/RedOnion.png"
                            className="card-img-top"
                            imageAlt="Example"
                        />
                    <div className="card-body">
                        <h5 className="card-title">Red Onion foods</h5>
                        <p className="card-text">A single page restaurant app where people are able to select food in their cart and checkout the cart with their information .</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">
                            <a href="https://github.com/Md-Mahbub-Hasan">
                                <GitHub className="icon" />
                            </a>

                            <a href="https://github.com/Md-Mahbub-Hasan">
                                <LinkIcon style={{ float: 'right' }} className="icon" />
                            </a> 
                        </small>
                    </div>
                </div>

                <div className="card">
                        <GlassMagnifier
                            imageSrc="https://mahbubhasan.netlify.app/images/TravelGuru.PNG"
                            className="card-img-top"
                            imageAlt="Example"
                        />
                    <div className="card-body">
                        <h5 className="card-title">Travel Guru </h5>
                        <p className="card-text">A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <a href="https://github.com/Md-Mahbub-Hasan/travel-guru-mahbub">
                                <GitHub className="icon" />
                            </a>

                            <a href="https://travle-guru-mahbub.firebaseapp.com">
                                <LinkIcon style={{ float: 'right' }} className="icon" />
                            </a> 
                        </small>
                    </div>
                </div>
            </div><br/>

            <Link to="/projects">
                <h3 className="text-white text-center">
                    <input type="submit" value="See More Projects" style={{ marginLeft: '15px', backgroundColor: "#44DFC4", color: "#111430" }} className="btn btn-primary text-center text-bold" />
                </h3>
            </Link>
        </div>
    );
};

export default MySomeWorks;