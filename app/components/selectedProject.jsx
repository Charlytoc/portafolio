"use client"
import Image from "next/image"
import vercel from "../../public/where2.png"
import filtros from "../../public/filtros.png"
import { use, useState } from "react"
import Link from "next/link"
export default function SelectedProjects () {
  
    return <>
    <div className="selected-projects"><h1>Selected projects</h1>
    <div>
        <div>
        
            <div><Image src={vercel} width={500} height={500} alt='Where2Day' style={{
                 maxWidth: '100%',
                height: 'auto',
                  }}/>
             </div>
             <h2>Where2Day: A social app <br />Future link
            </h2>
        </div>
        <div>
            
        
            <div><Image src={vercel} width={500} height={500} alt='Where2Day' style={{
                 maxWidth: '100%',
                height: 'auto',
                  }}/>
             </div>
             <h2>Where2Day: A social app <br /><Link href={'#'}>Link to</Link>
            </h2>
        </div>
      
    </div>

    </div>
    </>
}