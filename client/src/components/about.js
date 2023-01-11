import React from 'react';
import about from '../../src/assets/about.jpg';
// eventually, make banner image on about a landscape of Hunter working on the incense in workshop


function About() {
    return (
        <section className="container mt-5">
            {/* <img style={{height:"300px", width:"100%"}} src={about} alt="incense about"></img> */}
            <p className="animate__animated animate__fadeInUp" id="business"><span style={{fontWeight:"bolder", fontSize:'30px'}}>Handcrafted in Austin, Texas </span><br></br>Freetail products are designed and built with one purpose in mind: To be tools that help create a setting around you that inspires you to achieve your ambitions. <br></br> Each and every Freetail incense stick is handcrafted with simple, organic, and sustainable materials.</p>
            <br></br>
            <br></br>
            <p><span style={{fontWeight:"bolder", fontSize:'30px'}}>Meet the Team</span> <br></br>Right now, all Freetail products are all made by Hunter Hundley. Hunter was born and built in Austin, TX. When he's not crafting kick-ass incense, he's probably running, biking, or playing a few licks on the guitar. </p>       
        </section>
    );
}

export default About;