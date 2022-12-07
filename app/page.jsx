"use client"
import HeadText from "./components/headText"

import BackgroundText from "./components/backgroundText"
import SelectedProjects from "./components/selectedProject"

import CallToAction from "./components/callToAction"
import Footer from "./components/footer"


export default function HomePage () {


    return <>
    <div className="row w-100">
        <BackgroundText />
        <HeadText />
        
        
        
        
        <hr></hr>
        <SelectedProjects />
        <hr></hr>
        <CallToAction />
        <hr></hr>
        <Footer />
         
        
    </div>
    </>
}