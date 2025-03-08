import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1000px] h-[540px] bg-blue-100 mx-auto my-20 pt-10 mt-110 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-4xl font-bold border-b-amber-200'>Nature</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptatem in, temporibus laborum veniam voluptas repudiandae corrupti
             commodi sed facere nemo deleniti, ratione atque provident.</p> 
        </div>
        <div className='grid gird-cols-2 col-span-1 gap-2 mb-4'>
            <img className="object-cover w-full h-full "
            src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" 
            alt="" />
            <img className=" row-span-2 w-full h-full object-cover " 
            src="https://images.unsplash.com/photo-1739361133037-77be66a4ea6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
             alt="" />       
         </div>
         <div className='grid gird-cols-2 col-span-1 gap-2 mb-4'>
            <img className="object-cover w-full h-full "
            src="https://images.unsplash.com/photo-1738996674608-3d2d9d8450a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" 
            alt="" />
            <img className=" row-span-2 w-full h-full object-cover " 
            src="https://images.unsplash.com/photo-1739047855450-27615bc98bc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
             alt="" />       
         </div>
    </div>
  )
}

export default Rooms