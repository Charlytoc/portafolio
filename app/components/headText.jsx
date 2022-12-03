"use client"
import Link from "next/link"
export default function HeadText () {


    return <>
    <div className="row w-100">
   <div className="col-7 col-lg-5 ms-5 pb-5 mb-5">
    <small className="fs-4 text-secondary">Charly Chacón</small>
    <h1 className="bigfont">Developer and web designer</h1>
    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae possimus illo sapiente aspernatur rem consequuntur nihil adipisci doloribus, maxime reprehenderit, repellendus similique qui nam odit debitis voluptate, tempora aperiam.</p>
    <h4><strong>View projects</strong> or <strong><Link className="clickeable" href={"/about"}>read about me</Link></strong></h4>
   </div>
   </div>
    </>
}