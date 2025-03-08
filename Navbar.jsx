import React from 'react';
import {useState} from 'react'
import { TfiMenu } from "react-icons/tfi";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handlesubmit=()=>{
        setOpen(!open)
        if(!open){
            document.body.style.overflow="hidden"
        }
        else{
            document.body.style.overflow="scroll"
        }
    }
  return (
    <div className='absolute  w-full flex justify-between items-center p-4'>
        <h1 className='text-sky-100 font-bold text-2xl z-20'>Experiences</h1>
        <TfiMenu onClick={handlesubmit}className="text-white z-20"size={22}/>
        <div className=
        { open ? 
        ' ease-in duration-300 fixed top-0 left-0 w-full h-full bg-black/90 px-4 py-7 flex-col z-10 text-gray-300'
        :
        'absolute top-0 left-[-100%] ease-in-out duration-500'
        }>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center font-bold text-2xl gap-10'>
                <li className='text-white'>Home</li>
                <li className='text-white'>Destinacltions</li>
                <li className='text-white'>Reservacltions</li>
                <li className='text-white'>Amenclities</li>
                <li className='text-white'>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar