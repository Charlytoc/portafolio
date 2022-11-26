"use client"
import Link from "next/link"
import { useEffect } from "react"
import gsap from "gsap"

export default function BackgroundText () {

    // let t1 = gsap.timeline()

    // const appear = () => {
    //     let text = document.querySelector("#fondo")
    //     t1.from(text, {
    //         opacity: 0.2, color: "black", duration: 2, repeat: false, yoyo: false
    //     })
    // }
    // useEffect(()=>{
    //     appear()
    // }, [])

    return <>
    <div id="fondo" className="col-5 col-lg-12 text-center d-none d-lg-block">developer</div>
    
    </>
}