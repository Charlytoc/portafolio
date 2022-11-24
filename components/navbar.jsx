import Link from "next/link"


// const links = [{label: "Home", route: "/"}, {label: "About", route: "/about",}]


export default function Navbar () {
    return <>
    <nav className="w-100 shadow rounded d-flex justify-content-between">
        {/* {links.map(({label, route}) => 
            <li className="btn btn-outline boton" key={label}>
                <Link className="text-light" href={route}>
                    {label}
                </Link>
            </li>
        )} */}
        <div className="float-start textomenu">Charlytoc Chacón</div>
        <div className="float-end d-flex textomenu"><p>Menu</p><ion-icon name="menu-outline"></ion-icon></div>
    </nav>
    </>
}