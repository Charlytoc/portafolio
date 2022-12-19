"use client"
import Image from "next/image"
import vercel from "../../public/where2.png"
import filtros from "../../public/filtros.png"
import { use, useState } from "react"
import Link from "next/link"
export default function SelectedProjects () {
  
    return <>
        <div className='mt-5 ms-5 pt-5 container w-100'>
            <div className='row'>
                <div className='col-5'>
                    <h3>Selected Projects</h3>
                    <h1 className='bigfont'>Cases studies</h1>
                </div>
            </div>
            <div className="row">
                <div className="position-relative col-lg-6 ">
                <div 
                className="w-75 position-absolute">
                  <small>Jun 2022 - Nov 2022</small>
                  <h2 className="fs-1">Where2Day - A social app to share experiences</h2>
                  <Link className="text-dark imageneitor clickeable" href={"/projects/where2day"} >View project</Link>
                  <div className=" d-flex  position-relative">
                    <Image 
                    className="blurry"
                    src={filtros}
                    alt="filtros Where2Day"
                    width={200}
                    height={300}
                    style={{
                      maxWidth: '100%',
                      height: "auto"
                    }} />
                  </div>
                </div>
                <Image
                className="rounded shadow desblurry"
                    alt="Where2day"
                    src={vercel}
                    width={500}
                    height={700}
                    style={{
                       maxWidth: '100%',
                        height: 'auto',
                          }}
                      />

                                    </div>
                <div className="position-relative col-lg-6">
                <Image
        className="rounded shadow"
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