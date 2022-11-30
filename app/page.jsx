"use client"
import HeadText from "../components/headText"

import BackgroundText from "../components/backgroundText"
import SelectedProjects from "../components/selectedProject"
import Image from 'next/image'
import CallToAction from "../components/callToAction"
import landingImage from "../utils/images/fotorfolio.png"
// import ContactFloating from "../components/contactFloating"
import Footer from "../components/footer"

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