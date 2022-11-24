"use client"
import gsap from "gsap"
import { useEffect } from "react"
import HeadText from "../components/headText"
// import styles from "../styles/landing.module.css"
import imagen from "../utils/images/fotorfolio.png"
import Image from 'next/image'

export default function HomePage () {


    return <>
    <div className="row">
        <div id="fondo" className="col-5 col-lg-12 text-center">developer</div>
        <HeadText />
        {/* <div className="col-lg-6 bg-dark"> <Image style={{height: "auto"}} width={200} alt="..." src={imagen} /></div> */}
        
    </div>
    </>
}