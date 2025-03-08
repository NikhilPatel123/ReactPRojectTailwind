import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className="top-0 left-0 w-full h-screen object-cover"src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'> 
                <p>All Inclusion</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum enim quod sint fuga dignissimos accusantium sed saepe eius non tempore, expedita maiores. Eveniet.</p>
                <button className=' bg-white text-black mt-3'>Reserve Now</button>
            </div>
        </div>
    </div>

  )
}

export default Hero