import React from 'react';

const MySomeArticles = () => {
    return (
        <div className="container">
            <div style={{margin: '100px 0px 50px 0px'}}>
                <h3 className="text-white">Some of My Article  </h3>
            </div>
            <div className="card-deck">
                <div className="card">
                    <img src="https://miro.medium.com/max/1280/1*aLg1-G2UAlaKpBopRnmCRg.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src="https://miro.medium.com/max/1280/1*sX8rBJBol5dBp5WIJQrYyw.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src="https://miro.medium.com/max/1280/1*QDmeWi-xnFxzfwbsTrxunQ.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySomeArticles;