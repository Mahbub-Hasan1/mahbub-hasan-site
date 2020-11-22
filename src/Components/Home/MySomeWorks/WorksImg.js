import React from 'react';
import Gallery from 'react-grid-gallery';
import redOnion from '../../../img/redOnion.png';
import creativeAgency from '../../../img/CreativeAgency.png';
import volunteerNet from '../../../img/volunteerNetwork.png';

const IMAGES =
[{
        src: `${creativeAgency}`,
        thumbnail: "https://mahbubhasan.netlify.app/images/Creative.agency.PNG",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        // isSelected: true,
        tags: [{value: "Creative Agency", title: "Creative Agency"}],
        caption: "A Single page web app with admin’s panel, form where an admin can add a service, add an admin, and update orders status to notify the client about their order’s progress. It is a responsive site"
},
{
        src: "https://mahbubhasan.netlify.app/images/TravelGuru.PNG",
        thumbnail: "https://mahbubhasan.netlify.app/images/TravelGuru.PNG",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Travel Guru", title: "Travel Guru"}],
        caption: "A single-page web app Used three methods of signing in. Where a user can select a desired destination and book a hotel there."
},
{
    src: "https://imgur.com/5pI9nyI.png",
    thumbnail: "https://imgur.com/5pI9nyI.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "ExamHelpBD", title: "ExamHelpBD"}],
    caption: "ExamHelpBD is the Edtech platform for Teachers and Students. Any teacher can post notes and questions here. Students can read and practice tests from anywhere and anytime."
},
{
    src: `${redOnion}`,
    thumbnail: "https://imgur.com/X3h3ei5.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Red Onion foods", title: "Red Onion foods"}],
    caption: "A single page restaurant app where people are able to select food in their cart and checkout the cart with their information"
},
{
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Catalyst Education - Web App", title: "Catalyst Education - Web App"}],
    caption: "A complete Application for a coaching center, build with their custom requirements,Features : Students Database, payment management, Attendance system, mark distribution, online admission system, student portal etc"
},

{
    src: "https://imgur.com/5pI9nyI.png",
    thumbnail: "https://imgur.com/5pI9nyI.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "ExamHelpBD", title: "ExamHelpBD"}],
    caption: "ExamHelpBD is the Edtech platform for Teachers and Students. Any teacher can post notes and questions here. Students can read and practice tests from anywhere and anytime."
},
{
    src: "https://imgur.com/X3h3ei5.png",
    thumbnail: "https://imgur.com/X3h3ei5.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Red Onion foods", title: "Red Onion foods"}],
    caption: "A single page restaurant app where people are able to select food in their cart and checkout the cart with their information"
},
{
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Catalyst Education - Web App", title: "Catalyst Education - Web App"}],
    caption: "A complete Application for a coaching center, build with their custom requirements,Features : Students Database, payment management, Attendance system, mark distribution, online admission system, student portal etc"
}]

const WorksImg = () => {
    return (
        <div className="container" style={{height:"400px",marginTop:"30px"}}>
            <h3 className="text-white text-center">My Projects Photos</h3>
            <Gallery images={IMAGES}/>
            
        </div>
    );
};

export default WorksImg;