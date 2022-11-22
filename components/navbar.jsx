import Link from "next/link"
import HomePage from "../app/page"

const links = [{label: "Home", route: "/"}, {label: "About", route: "/about",}]


export default function Navbar () {
    return <>
    <nav className="w-100 shadow-lg rounded">
        {links.map(({label, route}) => 
            <li className="btn btn-outline boton" key={label}>
                <Link className="text-light" href={route}>
                    {label}
                </Link>
            </li>
        )}
    </nav>
    </>
}