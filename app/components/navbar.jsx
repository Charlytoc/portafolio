"use client"
import Link from "next/link"
import svgito from "../../utils/svg"
import logo from "../../utils/logo"
import { useState } from "react"


export default function Navbar () {


    return <>
    <div className="w-100  fs-2 bg-dark align-items-center mt-3 ps-3 pe-3 navigation">
        <div className="float-start d-flex align-items-center"><div className="logo d-flex align-items-center align-middle"><div className="">{logo}</div></div><Link className="text-dark text-center dropdown-item boton" href={"/"}>Charly</Link>
        </div>
        
        <div  data-bs-toggle="dropdown" className="float-end dropdown boton"><ion-icon name="grid-outline"></ion-icon>
        </div>
        <div className="dropdown-menu border-0 backgr ">
            <li><Link className="text-dark text-center dropdown-item boton" href={"/"}>Home</Link></li>
            <li><Link className="text-dark text-center dropdown-item boton" href={"/about"}>About</Link></li>
            <li><Link className="text-dark text-center dropdown-item boton" href={"/contact"}>Contact</Link></li>
            <li><Link className="text-dark text-center dropdown-item boton" href={"/"}>Projects</Link></li>
    </div>
    </div>
    </>
}

