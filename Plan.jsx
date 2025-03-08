import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1000px] h-screen  m-auto py-16 px-4 gird lg:grid-cols-2 gap-4'>
        {/* Left side */}
        <div className='grid grid-cols-2 grid-row-1 h-[80vh]'>
            <img className=" row-span-3 object-cover w-full h-full p-2"src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VhfGVufDB8fDB8fHww" alt="" />
            <img className=" row-span-1 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1457195740896-7f345efef228?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img className=" row-span-9 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1497290756760-23ac55edf36f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww" alt="" />
            <img  className=" row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Plan