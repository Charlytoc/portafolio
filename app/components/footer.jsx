import Link from "next/link"
export default function Footer () {


    return <>
    <div className="w-100 row d-flex mt-5 m-0 ps-5">
    
        <div className="col-12 col-sm-11 d-sm-inline-block d-lg-block col-lg-4 mt-3 ms-2 me-3 mt-lg-0">
        
        <h3 className="col-sm-11">Contact information —</h3>
        <p className="text-secondary col-sm-11">Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
        <p><span className="text-secondary">E: </span> charlyjchaconc@gmail.com</p>
        <p><span className="text-secondary">P: </span> +593 964105554</p>
        </div>
        <div className="col-12 col-sm-4 col-lg-2 mt-3 ms-2 mt-sm-3 mt-lg-0"><h3>Latest projects —</h3>
        <ul className="text-secondary">
            <li>Where2Day</li>
            <li>Star Wars reading blog</li>
        </ul></div>
        <div className="col-12 col-sm-4 col-lg-2 mt-3 ms-2 mt-sm-3 mt-lg-0"><h3>Current availability —</h3>
        <p className="text-secondary">I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!</p>
        </div> 
        <div className="col-12 col-sm-4 col-lg-2 mt-3 ms-2 me-3 mt-sm-5 mt-lg-0"><h3>Follow me on —</h3>
        <ul className="text-secondary">
            <Link className="clickeable d-block" href="https://www.instagram.com/charlytoc/">Instagram</Link>
            <Link className="clickeable d-block" href="https://www.linkedin.com/in/charlytoc/">Linkedin</Link>
            <Link className="clickeable d-block" href="https://github.com/Charlytoc">GitHub</Link>
            {/* <Link className="clickeable" href="https://www.instagram.com/charlytoc/">Instagram</Link> */}
        </ul>
        </div>
        
    </div>
    </>
}