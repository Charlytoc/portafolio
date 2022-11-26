import Link from "next/link"
export default function CallToAction () {
    return <>
    <div className="container w-75 text-center justify-content-center">
        <div className="row">
            <div className="col-10 col-lg-9">
                <small className="text-secondary">Need a developer?</small>
                <Link href={"/contact"}><h1 className="bigfont">Let's work together</h1></Link>
                
            </div>
        </div>
        
    </div>
    </>
}

