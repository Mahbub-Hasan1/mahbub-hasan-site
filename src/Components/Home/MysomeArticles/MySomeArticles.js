import React, { useState } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const article = [
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
]

const MySomeArticles = () => {
    const [articles] = useState(article);
    return (
        <div className="container">
            <div style={{ margin: '100px 0px 50px 0px' }}>
                <h3 className="text-white">Some of My Article  </h3>
            </div>
            <div className="card-deck">
                {
                    articles.map(article =>
                        <div key={article.id} className="card">
                            <img src={article.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.Description}</p>
                            </div>

                            <div className="card-footer">
                                <small className="text-muted">
                                    <a href={article.articleLink} target="_blank" rel="noopener noreferrer">
                                        <OpenInNewIcon className="icon" />
                                    </a>
                                </small>
                            </div>
                        </div>

                    )}


            </div>
        </div>
    );
};

export default MySomeArticles;