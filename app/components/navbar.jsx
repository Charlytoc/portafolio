"use client"
import Link from "next/link"
import svgito from "../../utils/svg"
import logo from "../../utils/logo"
import { useState } from "react"


export default function Navbar () {

    const addClass = () => {
        let elem = document.getElementById("menu")
        let all = document.getElementById("mr-all")
        if (elem.style.display == "none") {
          elem.style.display = "block"
          all.style.display = "none"
        }
        else {
          elem.style.display = "none"
          all.style.display = "block"
        }
        
      }

    return <>
    <div className="navigation">
        <div><Link className="text-dark" href={'/'}>Charly</Link></div>
        <div onClick={()=>addClass()}>Menu</div>
    </div>
    </>
}

