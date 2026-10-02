import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Gamepad2 } from "lucide-react";

export function Sild(){
    const[open,setOpen]=useState(false)
    return(
        <>
        <div>
            <h1 className="flex mx-6 text-3xl font-bold font-serif"><Gamepad2 size={34}/>PsGamestar</h1>
        </div>
        
        <div className="relative">
        <button onClick={()=>setOpen(!open)} className="flex gap-2 py-2  px-20 font-serif font-bold text-black">Genre<ChevronDown size={22} className={`transition-transform ${
            open ? "rotate-180" : "" 
          }` }/></button>
        {open && 
        (<div><Link className="block px-20 text-black font-bold font-serif">Action</Link>
            <Link className="block px-20 text-black font-bold font-serif">Thriller</Link>
            <Link className="block px-20 text-black font-bold font-serif">Horror</Link>
            </div>)}
           
            </div>
        <div className="relative">
            <button onClick={()=>setOpen(!open)} className="flex gap-2 py-6 px-12 font-serif font-bold mx-10">Psp<ChevronDown size={22} /></button>
            {open &&<div>
                <Link className="block px-24 text-black font-bold font-serif">Ps1</Link>
                <Link className="block px-24 text-black font-bold font-serif">Ps2</Link>
                <Link className="block px-24 text-black font-bold font-serif">Ps3</Link>
                <Link className="block px-24 text-black font-bold font-serif">Ps4</Link>
                <Link className="block px-24 text-black font-bold font-serif">Ps5</Link>
                </div>}
        </div>
        </>
    )
}