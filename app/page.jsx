"use client"
import HeadText from "./components/headText"

import BackgroundText from "./components/backgroundText"
import SelectedProjects from "./components/selectedProject"

import CallToAction from "./components/callToAction"
import Footer from "./components/footer"

import gsap from "gsap"
import { use, useEffect } from "react"
export default function HomePage () {

    const animacion = ( ) => {
        let animable = document.querySelector(".pruebuta")
        gsap.to(animable, {
            display: "none", y: -1000, duration: 3
        })
        console.log("HOLA")
    }
    useEffect(()=>{
        animacion()
    }, [])

    return <>
    <div className="row w-100">
        <BackgroundText />
        <HeadText />
        <div  className="pruebuta">PRUEBITA</div>
        
        
        
        <hr></hr>
        <SelectedProjects />
        <hr></hr>
        <CallToAction />
        <hr></hr>
        <Footer />
         
        
    </div>
    </>
}