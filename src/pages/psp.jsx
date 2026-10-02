import { useState } from 'react'
import { Sild } from '../comp/sildebar'
import { Gamepad2Icon } from 'lucide-react'

function Psp(){
    const[open,setOpen]=useState(false)
    return(
        <div>
        <button onClick={()=>setOpen(!open)} className='text-orange-700 text-3xl p-3 '>=
        </button>
        {open && <Sild/>}
        </div>)
        
}

export default Psp