import React, { useState } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const article = [
    {
        id: '1',
        img: '',
        title: 'article......',
        Description: 'l....l',
        articleLink: '/',
    },
    {
        id: '2',
        img: '',
        title: 'article......',
        Description: 'l....l',
        articleLink: '/',
    },
    {
        id: '3',
        img: '',
        title: 'article......',
        Description: 'l....l',
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
                        <div className="card">
                        <img src="https://miro.medium.com/max/1280/1*aLg1-G2UAlaKpBopRnmCRg.png" className="card-img-top" alt="..." />
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