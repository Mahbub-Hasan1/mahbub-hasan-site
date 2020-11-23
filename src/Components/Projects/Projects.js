import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import PopupCard from '../PopupCard/PopupCard';
import img6 from '../../img/work-6.PNG';
import img7 from '../../img/work-7.PNG';
import './Projects.css';

const FakeProjectsData = [
    {
        id: '1',
        img: `${img6}`,
        name: 'Apartment Hunt',
        Description: 'A homeowner can advertise his or her home. The user will be able to choose the house. And Also Users will be able to apply for rent. The user can see the list of his application. Home Wonner see..',
        DB1:'💐Apartment Hunt is a Full Stack Apartment booking Application. User can choose his/her desire Apartment.',
        DB2:'💐Firebase Authentication Application. Here Admin and user dashboard',
        DB3:'💐User can view apartment details and they can submit a request for booking which is visible in the dashboard.',
        DB4:'💐Admin can add new Apartment images and Apartment details in the site.Admin can see the rents list and rents details in admin dashboard.',
        liveWeb: 'https://apartment-hunt-team-24.netlify.app/',
        FrontEndRepo: 'https://github.com/Md-Mahbub-Hasan/Apartment-Hunt-Client',
    },
    {
        id: '2',
        img: 'https://mahbubhasan.netlify.app/images/Creative.agency.PNG',
        name: 'Creative Agency',
        Description: 'Responsive IT Service Seller react app with firbase authentication, react router, bootstrap, node, express, mongodb,heroku, user, admin dashboard & so on',
        DB1:'💐Responsive MERN Stack project with firebase authentication, admin authentication, persistent login and dashboard functionality for customer and admin',
        DB2:'💐Customer have ability to register in available services, check status of service(s) registered, and provide feedback',
        DB3:'💐Only admin can update the customer service status from pending to on going to done, add new service and new admin.',
        DB4:'💐Developed using react js, mongodb, firbase authentication, mongodb, react router, react hook form, bootstrap, node, express, heroku, session storage, and hosted in firebase.',
        liveWeb: 'https://creative-agency-32149.web.app',
        FrontEndRepo: 'https://github.com/Md-Mahbub-Hasan/creative-agency-client',
        BackEndRepo: 'https://github.com/Md-Mahbub-Hasan/creative-agency-server',
    },
    {
        id: '3',
        img: 'https://imgur.com/fxP7ERu.png',
        name: "Doctor's Portal",
        Description: 'A Single page web app with dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.',
        DB1:'',
        DB2:'',
        DB3:'',
        liveWeb: 'https://github.com/Md-Mahbub-Hasan/creative-agency-server',
        FrontEndRepo: '/',
        BackEndRepo: '/',
    },
    {
        id: '4',
        img: 'https://mahbubhasan.netlify.app/images/TravelGuru.PNG',
        name: 'Travel Guru',
        Description: 'A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there. Responsive react app with firbase authentication, react router, react hook form, bootstrap, and firbase hosting',
        DB1: '💐Responsive React JS Project with firebase authentication (gmail, facebook, github, email/ password).',
        DB2: '💐Only logged in user can book place to travel and check the hotel information with google map view.' ,
        DB3: '💐Developed using react js, firbase authentication, react router, react hook form, bootstrap, and hosted in firebase.' ,
        liveWeb: 'https://travle-guru-mahbub.firebaseapp.com',
        liveApi: 'https://github.com/Md-Mahbub-Hasan/travel-guru-mahbub',
        FrontEndRepo: 'https://github.com/Md-Mahbub-Hasan/travel-guru-mahbub',
    },
    {
        id: '5',
        img: 'https://i.imgur.com/1sZNRz2.png',
        name: 'volunteer-network',
        Description: 'Responsive react app with mongodb, firbase authentication, react router, react hook form, bootstrap, node, express, heroku, volunteer & admin dashboard',
        DB1:'💐Responsive MERN Stack project with firebase authentication and dashboard functionality for volunteer and admin.',
        DB2:'💐Volunteer can search, register in any event and view the events they already registered.',
        DB3:'💐Admin can view all the volunteer registered in any events and delete any volunteer if needed, also admin can add new event.',
        DB4:'💐Developed using react js, mongodb, firbase authentication, react router, react hook form, bootstrap, node, express, heroku, and hosted in firebase.',
        liveWeb: 'https://volunteer-network-a77e6.web.app',
        FrontEndRepo: 'https://github.com/Md-Mahbub-Hasan/volunteer-network-client',
    },
    {
        id: '6',
        img: 'https://imgur.com/X3h3ei5.png',
        name: 'Red Onion foods',
        Description: 'A single page restaurant app where people are able to select food in their cart and checkout the cart with their information .',
        DB1:'',
        DB2:'',
        DB3:'',
        liveWeb: '/',
        liveApi: '/',
        FrontEndRepo: '/',
        BackEndRepo: '/',
    },
    {
        id: '7',
        img: `${img7}`,
        name: 'Athena Design',
        Description: 'This is a simple team project. I Work Only Responsive & Some other option like Jira, Github Management & also led this project And solve team member problem.',
        liveWeb: 'https://athena-design-team-24.netlify.app',
        FrontEndRepo: 'https://github.com/Md-Mahbub-Hasan/athena-design-team-24',
    },
    {
        id: '8',
        img: 'https://faisalcep.github.io/assets/projects/social-buddy-ss/landing-page-th.png',
        name: 'Social Buddy',
        Description: 'Responsive react app with material ui, react-router and jsonplaceholder api',
        DB1:'💐Post card design with Material UI',
        DB2:'💐If clicked on ‘Read More’, post with user comments will be shown',
        DB3:'💐Posts and comments are fetching from jsonplaceholder and images are fetching from faker api.',
        liveWeb: 'https://mahbub-mybook.netlify.app/',
        FrontEndRepo: 'https://github.com/Md-Mahbub-Hasan/MyBook-Assignment-8',
    },

]

const Projects = () => {

    const data = FakeProjectsData;
    const [projectsData] = useState(data);

    return (
        <>
            <Navbar></Navbar>
            <div className="projectsBackground">
                <div className="container">
                    <div><br></br>
                        <h3 className="text-white text-center">My Projects</h3><br></br>
                    </div>
                    <div className=" d-flex flex-wrap">
                        {projectsData.map(project =>
                            <div key={project.id} className="card-deck col-md-4 col-sm-6 col-12" style={{ marginBottom: '20px' }}>
                                <div className="card">
                                    <img src={project.img} className="card-img-top" alt={project.name} />
                                    <div className="card-body">
                                        <PopupCard project={project}></PopupCard>
                                        <p className="card-text">{project.Description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;