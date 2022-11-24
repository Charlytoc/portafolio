import Link from "next/link"
import HomePage from "../app/page"

const links = [{label: "Home", route: "/"}, {label: "About", route: "/about",}]


export default function Navbar () {
    return <>
    <nav className="w-100 shadow-lg rounded d-flex justify-content-between">
        {/* {links.map(({label, route}) => 
            <li className="btn btn-outline boton" key={label}>
                <Link className="text-light" href={route}>
                    {label}
                </Link>
            </li>
        )} */}
        <div className="float-start">Charlytoc</div>
        <div className="float-end"><ion-icon name="menu-outline"></ion-icon></div>
    </nav>
    </>
}