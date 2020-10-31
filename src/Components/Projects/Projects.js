import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import LinkIcon from '@material-ui/icons/Link';
import { GitHub } from '@material-ui/icons';

const FakeProjectsData = [
    {
        id: '1',
        img: 'https://imgur.com/X3h3ei5.png',
        name: 'Red Onion foods',
        Description: 'A single page restaurant app where people are able to select food in their cart and checkout the cart with their information .',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '2',
        img: 'https://imgur.com/fxP7ERu.png',
        name: "Doctor's Portal",
        Description: 'A Single page web app with dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '3',
        img: 'https://mahbubhasan.netlify.app/images/TravelGuru.PNG',
        name: 'Travel Guru',
        Description: 'A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there.',
        liveLink: 'https://travle-guru-mahbub.firebaseapp.com',
        githubLink: 'https://github.com/Md-Mahbub-Hasan/travel-guru-mahbub',
    },
    {
        id: '4',
        img: 'https://imgur.com/mghpszX.png',
        name: 'Catalyst Education - Web App',
        Description: 'A complete Application for a coaching center, build with their custom requirements,Features : Students Database, payment management, Attendance system, mark distribution, online admission system, student portal etc',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '5',
        img: 'https://imgur.com/MLVINzH.png',
        name: 'Catalyst CRP - Web App',
        Description: 'This is a Revenue management software , developed for track cost, revenue and profit of a organization .',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '6',
        img: 'https://i.imgur.com/1sZNRz2.png',
        name: 'volunteer-network',
        Description: 'This is a volunteer Admin & Client base Project. This system volunteers to work on an online note base project.',
        liveLink: 'https://volunteer-network-a77e6.web.app',
        githubLink: 'https://github.com/Md-Mahbub-Hasan/volunteer-network-client',
    },
]

const Projects = () => {

    const data = FakeProjectsData;
    const [projectsData, setProjectsData] = useState(data);

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
                            <div className="card-deck col-md-4 col-sm-6 col-12" style={{ marginBottom: '20px' }}>
                                <div key={project.id} className="card">
                                    <img src={project.img} className="card-img-top" alt={project.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.name}</h5>
                                        <p className="card-text">{project.Description}</p>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">
                                        <a href={project.githubLink}>
                                            <GitHub className="icon" />
                                        </a>

                                        <a href={project.liveLink}>
                                            <LinkIcon style={{ float: 'right' }} className="icon" />
                                        </a> 
                                    </small>
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