"use client"
import Link from "next/link"
import Image from "next/image"
import vercel from "../../public/probando.webp"
export default function HeadText () {


    return <>
    <div className="row w-100 ">
   <div className="col-6 col-lg-5 col-xl-5 ms-5 pb-5 mb-5">
    <small className="fs-4 text-secondary">Charly Chacón</small>
    <h1 className="bigfont">Developer and web designer</h1>
    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae possimus illo sapiente aspernatur rem consequuntur nihil adipisci doloribus, maxime reprehenderit, repellendus similique qui nam odit debitis voluptate, tempora aperiam.</p>
    <h4><strong>View projects</strong> or <strong><Link className="clickeable" href={"/about"}>read about me</Link></strong></h4>
   </div>
   <div className="col-5 col-lg-6 col-xl-6">
   <div className="w-100 ms-5" style={{
            display: "block",
            position: "relative"
        }} >
        <Image
        className="rounded"
        alt="Charlytoc"
        src={vercel}
        width={500}
        height={700}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
        </div>
   </div>
   
   </div>

    </>
}