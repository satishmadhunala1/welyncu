import React from 'react'
import { FiSettings } from "react-icons/fi";  
import { FaVideo } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
const Mentor = () => {
  return (
    <div className='min-h-screen  px-10 mt-10'>
      <div className='flex gap-30 bg-black text-white p-5 rounded-xl  relative'>
      <div className=''>
          <img src='/mentor.jpg' className='h-[400px] ml-30 rounded-[10%]' />

        {/* Available Solutions */}
        <div className='bg-black/30 border font-semibold border-gray-500 backdrop-blur w-fit rounded-xl p-5 absolute right-[640px] top-20'>
          <p>Available Solutions</p>
          {/* Icon sitting on border */}
          <div className="absolute -top-3 -right-3 bg-yellow-500 rounded-full p-3">
            <FiSettings className="text-white text-lg" />
          </div>
        </div>

        {/* Easy to Use and Connect */}
        <div className='bg-black/30 border font-semibold border-gray-500 backdrop-blur w-fit rounded-xl p-5 absolute right-[900px] top-52'>
          <p>Easy to Use and Connect</p>
          {/* Icon sitting on border */}
          <div className="absolute -top-3 -right-3 bg-green-600 rounded-full p-3 border">
            <FaVideo className="text-white text-lg" />
          </div>
        </div>
      </div>
      <div className='px-10'>
           <h3 className='font-bold text-[30px] font-barlow'>Find Your Right Mentor</h3>
           <p className='text-gray-500'>Stay connected with a monthly or yearly subscription</p>

           <div className='flex items-center gap-7 w-[500px] bg-[#181818] p-4 rounded-xl mt-6'>
            <div className='bg-white/10 p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-xl shadow-black'>
               <IoIosChatbubbles size={30} className='text-green-600' />  
            </div>
            <div className=''>
              <h3 className='font-bold text-[20px]'>Ring or message your mentor anytime</h3>
              <p className='text-[15px] text-gray-500 mt-2'>we have the right mentors for any job.we have the right mentors and help you to connect with them easily</p>
            </div>
           </div>


            <div className='flex items-center gap-7 w-[500px] bg-[#181818] p-4 rounded-xl mt-6'>
            <div className='bg-white/10 p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-xl shadow-black'>
               <BsFillFileEarmarkPersonFill size={30} className='text-yellow-500' />  
            </div>
            <div className=''>
              <h3 className='font-bold text-[20px]'>Become a mentor and help out people</h3>
              <p className='text-[15px] text-gray-500 mt-2'>we have the right mentors for any job.we have the right mentors and help you to connect with them easily</p>
            </div>
           </div>
      </div>
      </div>

    </div>
  )
}

export default Mentor
