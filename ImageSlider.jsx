import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
const ImageSlider = () => {
  const slides=[
    {
      url:"https://plus.unsplash.com/premium_photo-1664206964048-26b7a0ebf093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9ic3RhcnxlbnwwfHwwfHx8MA%3D%3D",
      title:"Lobstar",
    },
    {
        url:"https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
        title:"Sushi",
    },
    {
        url:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3RhfGVufDB8fDB8fHww",
        title:"Pasta",
    },
    {
        url:"https://media.istockphoto.com/id/1739096465/photo/salmon-fish-with-ingredients-at-white-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mskgz7NQY_eep7_-HCL4fhejlXfZZ9VM862MsE9U_p8=",
        title:"Salmom",
    },
    {
        url:"https://images.unsplash.com/photo-1629567971562-a5242697c783?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXRlc3xlbnwwfHwwfHx8MA%3D%3D",
        title:"krishna",
    }
  ]
  const [currindx,setCurrindx]=useState(0);

  const prevslide=()=>{
    const isFirstSlide=  currindx === 0;
    const nextindx= isFirstSlide ? slides.length-1 : currindx-1;
    setCurrindx(nextindx);
  }
  const rightslide=()=>{
    const isLastSlide=  currindx === slides.length-1;
    const nextindx= isLastSlide ? 0 : currindx+1;
    setCurrindx(nextindx);
    
  }
  const gotoslide=(itmes)=>{
    setCurrindx(itmes)
  }
  return (
    <div className='max-w-[1100px] h-[600px] w-full m-auto py-10 px-4 relative group pb-20'>
        <div className="w-full h-full rounded-2xl bg-cover hover:decoration-1 duration-200 bg-center" style={{backgroundImage:`url(${slides[currindx].url})`}}>
        </div>

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl 
        rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <MdOutlineKeyboardDoubleArrowLeft onClick={prevslide} size={30}/>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl 
        rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <MdKeyboardDoubleArrowRight onClick={rightslide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                slides.map((indx,items)=>{
                    <div className='text-2xl z-20  bg-black cursor-pointer' key={items} onClick={()=> gotoslide(itmes)}>
                       <RxDotFilled size={30}/>
                    </div>
                })
            }
        </div>
        
    </div>
  )
}

export default ImageSlider