"use client"
import Link from "next/link"
import Image from "next/image"
import vercel from "../../public/yo.png"
// import vercel from "../../public/perrito-adorable.gif"



export default function HeadText () {


    return <>
    <div id="fondo" className="col-lg-12 text-center d-none d-lg-block">
   developer
    </div>

    <div  className="row w-100">
    
   <div id="sobrefondo"  className="col-6 col-sm-5 col-lg-5 col-xl-5 ms-5 pb-5 mb-5">
    <small className="fs-4 text-secondary">Charly Chacón</small>
    <h1 className="bigfont">Developer and web designer</h1>
    <p className="text-secondary">I am an application developer passionate about design and learning, I am always looking for new challenges and in the little free time I usually have I apply my knowledge to solve any problem.</p>
    <h4><strong>View projects</strong> or <strong><Link className="clickeable" href={"/about"}>read about me</Link></strong></h4>
   </div>
   <div className="col-5 d-none d-sm-block col-lg-6 col-xl-6">
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