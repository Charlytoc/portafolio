import Link from "next/link"


// const links = [{label: "Home", route: "/"}, {label: "About", route: "/about",}]
{/* <Link className="text-dark text-center dropdown-item" href={"/about"}>About</Link>
    <Link className="text-dark text-center dropdown-item" href={"/"}>Home</Link> */}

export default function Navbar () {
    return <>
    <div className="navigation fs-2 align-items-center mt-3 ps-3 pe-3 w-100">
        <div className="float-start d-flex align-items-center"><ion-icon name="code-outline"></ion-icon><Link className="text-dark text-center dropdown-item boton" href={"/"}>Charly</Link>
        </div>
        <div data-bs-toggle="dropdown" className="float-end dropdown boton"><ion-icon name="grid-outline"></ion-icon></div>
        <div className="dropdown-menu border-0 backgr ">
            <li><Link className="text-dark text-center dropdown-item boton" href={"/"}>Home</Link></li>
            <li><Link className="text-dark text-center dropdown-item boton" href={"/about"}>About</Link></li>
        
    </div>
    </div>
    </>
}

