"use client"
import { useEffect } from "react"
import SplitType from "split-type"
import gsap from "gsap"

export default function BackgroundText () {

    // let t1 = gsap.timeline()

    // const animation = () => {
    //     let text = document.querySelectorAll(".lett")
    //     t1.fromTo(text, {
    //         opacity: 0
    //     }, {x: 0, opacity:1, duration: 3, y: 0})
    //     // console.log("FUNCIONO")
    // }
    // useEffect(()=>{
    //     animation()
    // }, [])
    return <>
    <div id="fondo" className="col-lg-12 text-center d-none d-lg-block">
    <span className="lett">d</span>
    <span className="lett">e</span>
    <span className="lett">v</span>
    <span className="lett">e</span>
    <span className="lett">l</span>
    <span >o</span>
    <span >p</span>
    <span >e</span>
    <span >r</span>

    </div>
    </>
}