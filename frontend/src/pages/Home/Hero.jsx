import React from 'react'
import Masonry from "react-masonry-css";
import { FaRegCircle, FaChevronCircleRight, FaSearch } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="min-h-screen px-10 flex items-center justify-center gap-10">
      {/* leftside */}
      <div>
        <FaRegCircle size={45} className="text-[#6ABD80] animate-bounce" />

        <h1 className="text-[70px]  font-barlow font-extrabold leading-[80px] 
                       bg-gradient-to-br from-white to-yellow-600 bg-clip-text text-transparent">
          Share and Gain <br />
          The Skills Around <br />
          The World
        </h1>
        <p className='text-gray-400 '>
          We provide a platform to share your knowledge and skills to the world.
        </p>
        <div className='flex items-center gap-7 mt-10'>
          <div className='bg-green-600 flex items-center justify-between gap-7 w-fit rounded-tl-full rounded-tr-full rounded-bl-full text-white px-8 py-4'>
            <p>Need Help?</p>
            <FaChevronCircleRight size={25} className='text-yellow-600 border border-yellow-400 rounded-full' />
          </div>
          <div className='bg-white/10 backdrop-blur flex items-center justify-between gap-7  w-fit rounded-br-full rounded-tr-full rounded-bl-full text-white px-6 py-1'>
            <input type="text" placeholder='search' className='bg-transparent focus:outline-none text-white'/>
            <div className='bg-black p-4  rounded-full'>
              <FaSearch />
            </div>
          </div>
        </div>
      </div>

      {/* rightside - Masonry Pinterest Style */}
      <div className="w-[40%]">
        <Masonry
          breakpointCols={{ default: 2, 768: 1 }}
          className="flex gap-5"
          columnClassName="space-y-5"
        >
          <img src='/hero1.jpg' className='rounded-tl-full h-[300px] rounded-tr-full rounded-br-full  w-full object-cover' />
          <img src='/hero2.jpg' className='rounded-br-full rounded-bl-full rounded-tl-full h-[150px] w-full object-cover' />
         <div className='flex'>
            <FaRegSquare size={30} className='text-yellow-600 rotate-45 animate-float' />
             <img src='/hero5.jpg' className='rounded-full h-[200px] w-full object-cover' />
         </div>
         <div className='flex '>
             <img src='/hero4.jpg' className='rounded-full h-[300px] w-[160px] object-cover' />
             <div className='h-10 w-10 rounded-full bg-white'/>
         </div>
        </Masonry>
      </div>
    </div>
  )
}

export default Hero
