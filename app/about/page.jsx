"use client"

import { useEffect } from "react";
import CallToAction from "../components/callToAction";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import JobExp from "../components/jobExp";



export default function About () {


    return <>
  
    <div className="container text-center w-75 my-5">
        <h2>A few words about me</h2>
        <p className="fs-3 grot">I’m Charly Chacon, a multidisciplinary developer who focuses on design an make an app works in the way who a client wants to</p>
        <p>I have three years of experience in the world of computing learning by myself an also doing courses and developing projects. The thing I want the most is learning.</p>
    </div>

    <Carousel />
    <div className="row w-100 mt-5">
    <div className="col-6 col-lg-6 text-center">
        <h2>Things I do</h2><p className="grot">
            Database management<em> / </em>Front-end development<em> / </em>Back-end development<em> / </em>Web design<em> / </em>Photography</p>
    </div>
    <div className="col-6 col-lg-6 text-center">
        <h2>Technologies I use</h2><p className="grot">
           NodeJs<em> / </em>NextJs<em> / </em>ReactJs<em> / </em>Flask-SQLAlchemy<em> / </em>GSAP<em> / </em>VSCode<em> / </em>GitHub<em> / </em>GIT<em> / </em>SCRUM<em> / </em></p>
    </div>
    </div>
    <hr />
    <div className="container w-100 my-5">
        <h2>Experience</h2>
        <p className="fs-3 grot">I've been working with professional teams in great projects</p>
        <p>You can see my last jobs in Linkedin</p>
    </div>
    <div className="container w-100 my-5">
        <h2>Education</h2>
        <p className="fs-3 grot">Learning it's just a part of my life, these are the last things I've been learning</p>
        <p>You can also checkout my GitHub</p>
    </div>
    <div>
    </div>
    <CallToAction />
    <Footer />
    </>
}