import React from 'react'
import Masonry from "react-masonry-css";
import { FaRegCircle, FaChevronCircleRight, FaSearch } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="lg:min-h-screen p-5 lg:px-7 flex lg:items-center lg:justify-center md:px-5 py-5 gap-10">
      {/* leftside */}
      <div>
        <FaRegCircle size={45} className="text-[#6ABD80] 2xl:hidden hidden md:block  animate-bounce" />
        <FaRegCircle size={55} className="text-[#6ABD80] hidden 2xl:block animate-bounce" />

        <h1 className="text-[40px] md:text-[55px] lg:text-[90px]  2xl:text-[100px]  font-barlow font-extrabold lg:leading-[110px] leading-[55px] md:leading-[70px]  2xl:leading-[105px]
                       bg-gradient-to-br from-white to-yellow-600 bg-clip-text text-transparent">
          Share and Gain <br className='' />
          The Skills Around <br className='hidden md:block' />
          The World
        </h1>
        <p className='text-gray-400 2xl:text-[20px] lg:text-[17px] mt-3'>
          We provide a platform to share your knowledge and skills to the world.
        </p>
        <div className='md:flex items-center space-y-3 md:space-y-0  gap-7 mt-10'>
          <div className='bg-green-600 flex items-center justify-between gap-7 md:w-fit rounded-tl-full rounded-tr-full rounded-bl-full text-white px-8 py-4 2xl:px-10 2xl:py-5'>
            <p className='2xl:text-[20px] md:hidden block lg:block '>Need Help?</p>
            <p className='2xl:text-[20px]  lg:hidden md:block hidden'>Help?</p>
            <FaChevronCircleRight size={25} className='text-yellow-600 border border-yellow-400 rounded-full' />
          </div>
          <div className='bg-white/10 backdrop-blur flex items-center justify-between gap-7  md:w-fit rounded-br-full rounded-tr-full rounded-bl-full text-white px-6 2xl:px-8 py-1 2xl:py-3'>
            <input type="text" placeholder='search' className='bg-transparent focus:outline-none text-white 2xl:text-[20px]'/>
            <div className='bg-black p-4  rounded-full'>
              <FaSearch />
            </div>
          </div>
        </div>
      </div>


 <div className="w-[40%] hidden md:block lg:hidden">
  

             <img src='/hero4.jpg' className='rounded-xl h-[300px] w-full object-cover' />
 

      </div>



      {/* rightside - Masonry Pinterest Style */}
      <div className="w-[40%] hidden md:hidden lg:block">
        <Masonry
          breakpointCols={{ default: 2, 768: 1 }}
          className="flex gap-5"
          columnClassName="space-y-5"
        >
          <img src='/hero1.jpg' className='rounded-tl-full h-[300px] 2xl:h-[370px] rounded-tr-full rounded-br-full  w-full object-cover' />
          <img src='/hero2.jpg' className='rounded-br-full rounded-bl-full rounded-tl-full h-[150px] 2xl:h-[200px] w-full object-cover' />
         <div className='flex'>
            <FaRegSquare size={30} className='text-yellow-600 2xl:hidden  rotate-45 animate-float' />
             <FaRegSquare size={40} className='text-yellow-600 hidden 2xl:block rotate-45 animate-float' />
             <img src='/hero5.jpg' className='rounded-full h-[200px] 2xl:h-[250px]  w-full object-cover' />
         </div>
         <div className='flex '>
             <img src='/hero4.jpg' className='rounded-full h-[300px] 2xl:h-[370px]  w-[160px] 2xl:w-[200px] object-cover' />
             <div className='h-10 w-10 rounded-full bg-white'/>
         </div>
        </Masonry>
      </div>
    </div>
  )
}

export default Hero
