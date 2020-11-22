import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const FakeBlogsData = [
        {
            id: '1',
            img: 'https://miro.medium.com/max/502/1*KI1_0g6Dlz3m8_QKkTZ2qw.jpeg',
            title: 'Some discussion about React.',
            Description: 'Discussed: What is JSX?, What is npm?, What is React routers?, Default Props., What is Virtual DOM?',
            articleLink: 'https://mahbub-hasan.medium.com/why-should-we-use-react-dc194b4c7a27',
        },
        {
            id: '2',
            img: 'https://miro.medium.com/max/700/1*U7f_zyAMRT_3uR2cRy3llA.jpeg',
            title: 'INTERMEDIATE JAVASCRIPT, INTERVIEW QUESTIONS',
            Description: 'Discussed: double equal vs triple equal, Null Vs Undefined, Block Scope, Apply map, filter, find on an array of objects.',
            articleLink: 'https://mahbub-hasan.medium.com/intermediate-javascript-interview-questions-d83626f07a5a',
        },
        {
            id: '3',
            img: 'https://miro.medium.com/max/700/1*ZRV92399sgFGeWbzcAHjig.jpeg',
            title: 'What I learned today about JavaScript:',
            Description: 'Discussed: Coding Style, Best practice of comments, Client-side caching, Client-side Catch, Server-side caching',
            articleLink: '/',
        },
        {
            id: '4',
            img: 'https://miro.medium.com/max/700/1*ZKknAq-txt7tTTYXWgk7CA.jpeg',
            title: 'JAVASCRIPT FUNDAMENTAL CONCEPTS',
            Description: 'Discussed: indexOf, push, Pop, Length, Shif, Math.ceil',
            articleLink: '/',
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
                                        <h5 className="card-title">{blogs.title}</h5>
                                        <p className="card-text">{blogs.Description}</p>
                                    </div>

                                    <div className="card-footer">

                                        <small className="text-muted">
                                            <a href={blogs.articleLink} target="_blank" rel="noopener noreferrer">
                                                <OpenInNewIcon className="icon" />
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