import Link from "next/link"
export default function CallToAction () {
    return <>
    <div className="container w-75 text-center justify-content-center my-5">
        <div className="row">
            <div className="col-10 col-lg-9">
                <small className="text-secondary">Need a developer?</small>
                <Link href={"/contact"}><h1 className="bigfont clickeable linksito">Let's work together</h1></Link>
                
            </div>
        </div>
        
    </div>
    </>
}

