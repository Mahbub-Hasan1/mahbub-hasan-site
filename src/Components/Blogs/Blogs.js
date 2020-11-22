import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import LinkIcon from '@material-ui/icons/Link';
import { GitHub } from '@material-ui/icons';

const FakeBlogsData = [
    {
        id: '1',
        img: 'https://miro.medium.com/max/1280/1*aLg1-G2UAlaKpBopRnmCRg.png',
        name: 'Simple Introduction to React.js',
        Description: 'React is a library that used to create awesome user interface … hence it is a library it need some other…',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '2',
        img: 'https://miro.medium.com/max/1280/1*sX8rBJBol5dBp5WIJQrYyw.png',
        name: "Getting started with React Router",
        Description: 'React is a library that used to create awesome user interface … hence it is a library it need some other…',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '3',
        img: 'https://miro.medium.com/max/1280/1*QDmeWi-xnFxzfwbsTrxunQ.jpeg',
        name: 'ExamHelpBD',
        Description: 'ExamHelpBD is the Edtech platform for Teachers and Students. Any teacher can post notes and questions here. Students can read and practice tests from anywhere and anytime.',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '4',
        img: 'https://miro.medium.com/max/576/1*V6IaCGp84AlPn2uEnfdcOA.png',
        name: 'Catalyst Education - Web App',
        Description: 'A complete Application for a coaching center, build with their custom requirements,Features : Students Database, payment management, Attendance system, mark distribution, online admission system, student portal etc',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '5',
        img: 'https://miro.medium.com/max/1808/1*PR3klDbot3ZS9Kp69LYtHA.png',
        name: 'Catalyst CRP - Web App',
        Description: 'This is a Revenue management software , developed for track cost, revenue and profit of a organization .',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
    {
        id: '6',
        img: 'https://miro.medium.com/max/576/1*BC3oWovfs15DXUMC7Jc_vQ.png',
        name: 'COVID-19 Stats',
        Description: 'It is a API based APP for showing Global and Country wise Coronavirus Statistics .',
        liveLink: 'CCC',
        githubLink: 'CCC',
    },
]

const Blogs = () => {

    const data = FakeBlogsData;
    const [blogsData] = useState(data);

    return (
        <>
            <Navbar></Navbar>
            <div className="projectsBackground">
                <div className="container">
                    <div><br />
                        <h3 className="text-white text-center">My Blogs </h3>
                        <br />
                    </div>
                    <div className=" d-flex flex-wrap">
                        
                        {blogsData.map(blogs =>
                            <div className="card-deck  col-md-4" style={{ marginBottom: '20px' }}>
                                <div key={blogs.id} className="card">
                                    <img src={blogs.img} className="card-img-top" alt={blogs.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{blogs.name}</h5>
                                        <p className="card-text">{blogs.Description}</p>
                                    </div>

                                    <div className="card-footer">

                                        <small className="text-muted">
                                            <a href={blogs.githubLink} target="_blank" rel="noopener noreferrer">
                                                <GitHub className="icon" />
                                            </a>
                                            
                                            <a href={blogs.liveLink} target="_blank" rel="noopener noreferrer">
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

export default Blogs;