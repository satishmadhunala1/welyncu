import React from 'react'
import { FiSettings } from "react-icons/fi";  
import { FaVideo } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
const Mentor = () => {
  return (
    <div className='lg:min-h-screen  lg:px-10 md:px-3 px-2  mt-10'>
      <div className='lg:flex gap-30 bg-black text-white p-5 2xl:p-7 rounded-xl  relative'>
      <div className='md:flex md:flex-col md:items-center md:justify-center'>
          <img src='/mentor.jpg' className='h-[400px] 2xl:h-[500px] md:w-[350px] 2xl:w-[350px] lg:w-[270px] oject-cover lg:ml-30 rounded-[10%]' />

        {/* Available Solutions */}
        <div className='bg-black/30 border font-semibold border-gray-500 backdrop-blur w-fit rounded-xl p-5 absolute lg:right-[670px] right-[10px] md:right-[100px]  top-20 2xl:top-28 2xl:right-[850px]'>
          <p className='2xl:text-[17px]'>Available Solutions</p>
          {/* Icon sitting on border */}
          <div className="absolute -top-3 -right-3 bg-yellow-500 rounded-full p-3">
            <FiSettings className="text-white text-lg" />
          </div>
        </div>

        {/* Easy to Use and Connect */}
        <div className='bg-black/30 border font-semibold border-gray-500 backdrop-blur w-fit rounded-xl p-5 absolute lg:right-[950px] md:right-[500px] top-52 2xl:top-60 2xl:right-[1200px]'>
          <p className='2xl:text-[17px]'>Easy to Use and Connect</p>
          {/* Icon sitting on border */}
          <div className="absolute -top-3 -right-3  bg-green-600 rounded-full p-3 border">
            <FaVideo className="text-white text-lg" />
          </div>
        </div>
      </div>
      <div className='md:px-10   md:mt-7 mt-7 lg:mt-0 md:text-center lg:text-start'>
           <h3 className='font-bold md:text-[30px] text-[25px] 2xl:text-[40px] font-barlow'>Find Your Right Mentor</h3>
           <p className='text-gray-500 2xl:text-[20px]'>Stay connected with a monthly or yearly subscription</p>

           <div className='md:flex items-center gap-7 lg:w-[500px]  text-start 2xl:w-[600px] bg-[#181818] p-4  2xl:p-6 rounded-xl mt-6'>
            <div className='bg-white/10 p-3 w-fit rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-xl shadow-black'>
               <IoIosChatbubbles size={30} className='text-green-600 2xl:hidden ' />  
                <IoIosChatbubbles size={40} className='text-green-600 2xl:block hidden' />  
            </div>
            <div className=''>
              <h3 className='font-bold text-[20px] 2xl:text-[23px]'>Ring or message your mentor anytime</h3>
              <p className='text-[15px] 2xl:text-[17px] text-gray-500 mt-2'>we have the right mentors for any job.we have the right mentors and help you to connect with them easily</p>
            </div>
           </div>


            <div className='md:flex  items-center gap-7 lg:w-[500px] text-start 2xl:w-[600px] bg-[#181818] p-4 rounded-xl mt-6'>
            <div className='bg-white/10 p-3 w-fit rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-xl shadow-black'>
               <BsFillFileEarmarkPersonFill size={30} className='text-yellow-500 2xl:hidden' />  
               <BsFillFileEarmarkPersonFill size={40} className='text-yellow-500 2xl:block hidden' /> 
            </div>
            <div className=''>
              <h3 className='font-bold text-[20px] 2xl:text-[23px]'>Become a mentor and help out people</h3>
              <p className='text-[15px] 2xl:text-[17px] text-gray-500 mt-2'>we have the right mentors for any job.we have the right mentors and help you to connect with them easily</p>
            </div>
           </div>
      </div>
      </div>

    </div>
  )
}

export default Mentor
