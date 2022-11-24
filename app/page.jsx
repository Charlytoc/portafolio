"use client"
import gsap from "gsap"
import { useEffect } from "react"
import styles from "../styles/landing.module.css"

export default function HomePage () {

    // const animation = () => {
    //     let items = document.querySelector(".texto")
    //     gsap.from(items, {
    //         opacity: 0.5, duration: 1
    //     })
    // }

    // useEffect(()=>{
    //     animation()
    // }, [])

    return <>
    {/* <div className="container w-100 landing">
        <div className="row">
            <div className={`col-xs-10 p-3 text-center m-2 texto`}>ABOUT
            </div>
        </div>
        <div className="row w-100">
            <div className="col-12 p-3 text-center m-2 texto">PROJECTS</div>
        </div>
        <div className="row w-100">
            <div className="col-12 text-center p-3 m-2 texto">CONTACT</div>
        </div>
    </div> */}
    <div className="row">
        <div className="col-5 col-lg-12 text-center">HOLA</div>
    </div>
    </>
}