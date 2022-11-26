"use client"
// import gsap from "gsap"
import HeadText from "../components/headText"

import BackgroundText from "../components/backgroundText"
import SelectedProjects from "../components/selectedProject"
import Boxmodel from "../components/boxmodel"
import CallToAction from "../components/callToAction"


export default function HomePage () {


    return <>
    <div className="row w-100">
        <BackgroundText />
        <HeadText />
        <SelectedProjects />
        {/* <Boxmodel /> */}
        <CallToAction />
        
    </div>
    </>
}