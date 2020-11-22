import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlassMagnifier } from "react-image-magnifiers";
import PopupCard from '../../PopupCard/PopupCard';

const FakeProjectsData = [
    {
        id: '1',
        img: 'https://mahbubhasan.netlify.app/images/Creative.agency.PNG',
        name: 'Creative Agency',
        Description: 'Responsive IT Service Seller react app with firbase authentication, react router, bootstrap, node, express, mongodb,heroku, user, admin dashboard & so on',
        DB1: '💐Responsive MERN Stack project with firebase authentication, admin authentication, persistent login and dashboard functionality for customer and admin',
        DB2: '💐Customer have ability to register in available services, check status of service(s) registered, and provide feedback',
        DB3: '💐Only admin can update the customer service status from pending to on going to done, add new service and new admin.',
        DB4: '💐Developed using react js, mongodb, firbase authentication, mongodb, react router, react hook form, bootstrap, node, express, heroku, session storage, and hosted in firebase.',
        liveWeb: 'CCC',
        liveApi: 'CCC',
        FrontEndRepo: 'CCC',
        BackEndRepo: 'CCC',
    },
    {
        id: '2',
        img: 'https://mahbubhasan.netlify.app/images/TravelGuru.PNG',
        name: 'Travel Guru',
        Description: 'A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there. Responsive react app with firbase authentication, react router, react hook form, bootstrap, and firbase hosting',
        DB1: '💐Responsive React JS Project with firebase authentication (gmail, facebook, github, email/ password).',
        DB2: '💐Only logged in user can book place to travel and check the hotel information with google map view.',
        DB3: '💐Developed using react js, firbase authentication, react router, react hook form, bootstrap, and hosted in firebase.',
        liveWeb: 'https://travle-guru-mahbub.firebaseapp.com',
        liveApi: 'https://github.com/Md-Mahbub-Hasan/travel-guru-mahbub',
        FrontEndRepo: 'CCC',
        BackEndRepo: 'CCC',
    },
    {
        id: '3',
        img: 'https://i.imgur.com/1sZNRz2.png',
        name: 'volunteer-network',
        Description: 'Responsive react app with mongodb, firbase authentication, react router, react hook form, bootstrap, node, express, heroku, volunteer & admin dashboard',
        DB1: '💐Responsive MERN Stack project with firebase authentication and dashboard functionality for volunteer and admin.',
        DB2: '💐Volunteer can search, register in any event and view the events they already registered.',
        DB3: '💐Admin can view all the volunteer registered in any events and delete any volunteer if needed, also admin can add new event.',
        DB4: '💐Developed using react js, mongodb, firbase authentication, react router, react hook form, bootstrap, node, express, heroku, and hosted in firebase.',
        liveLink: 'https://volunteer-network-a77e6.web.app',
        githubLink: 'https://github.com/Md-Mahbub-Hasan/volunteer-network-client',
    },

]


const MySomeWorks = () => {
    const [works] = useState(FakeProjectsData);
    return (
        <div className="container">
            <div style={{ padding: '100px 0px 50px 0px' }}>
                <h3 className="text-white text-center">Some of My Projects</h3>
            </div>
            <div className="card-deck">
                {works.map(work =>

                    <div key={work.id} className="card">
                        <GlassMagnifier
                            imageSrc={work.img}
                            className="card-img-top"
                            imageAlt="Example"
                        />
                        <div className="card-body">
                            <PopupCard project={work}></PopupCard>
                            <p className="card-text">{work.Description}</p>
                        </div>
                    </div>

                )}

            </div><br />

            <Link to="/projects">
                <h3 className="text-white text-center">
                    <input type="submit" value="See More Projects" style={{ marginLeft: '15px', backgroundColor: "#44DFC4", color: "#111430" }} className="btn btn-primary text-center text-bold" />
                </h3>
            </Link>
        </div>
    );
};

export default MySomeWorks;