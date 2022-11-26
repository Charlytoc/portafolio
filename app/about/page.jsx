"use client"
import svgito from "../../utils/svg"
// import gsap from "gsap"
// gsap.registerPlugin(ScrollTrigger)




export default function About () {


    const animar = () => {
        let nave = document.querySelector(".prueba")
        gsap.to(nave, {
            
            duration: 3,
            // opacity: 0,
            // backgroundColor: "black",
            scale: 0.5,
            
            scrollTrigger: {
                trigger: ".prueba",
                start: "10% 30%",
                end: "80% 80%",
                markers: {
                    trigger: ".prueba",
                    startColor: "purple",
                    endColor: "fuchsia",
                    fontSize: "20px",
                    indent: 100
                },
                scrub: true
                
            }
        })
    }
    return <>
    <div className="big-cont">
        <p className="h-25">asd</p>
        <p>asd</p>
        <p>asd</p>
        <div onMouseEnter={()=>animar()} >{svgito}</div>
    <h1 className="bg-dark prueba text-light">Seré una nave espacial que se mueve por distintos planetas</h1>
    
    </div>
    
    </>
}