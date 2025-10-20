import React from 'react'
import { SiFreelancer } from "react-icons/si";
import { MagicCard } from "../../components/magicui/magic-card";
import { FaSuitcase } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdExplore } from "react-icons/md";
const Offer = () => {
  return (
    <div className='lg:flex md:flex md:flex-col-reverse flex flex-col-reverse lg:flex-row gap-10 mt-10 lg:mt-0  justify-between md:px-10 px-3'>
    {/* leftside */}
       <div className='md:flex   gap-4'> 
        <div className='flex flex-col gap-5 lg:mt-10'>
        <MagicCard>
            <div className='p-4 rounded-xl bg-black/40 shadow-xl shadow-black lg:w-[230px] 2xl:w-[250px] w-full '>
              <div className='bg-green-600/20 w-fit p-5 rounded-full'>
                <SiFreelancer size={20} className='2xl:hidden'/>
                <SiFreelancer size={27} className='hidden 2xl:block'/>
              </div>
              <h3 className='font-bold text-[20px] 2xl:text-[25px] lg:text-[27px] mt-2'>Freelancing</h3>
              <p className='text-gray-400 text-[13px] 2xl:text-[15px] lg:text-[15px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </MagicCard>
            <MagicCard>
            <div className='p-4 rounded-xl bg-black/40 shadow-xl shadow-black lg:w-[230px] 2xl:w-[250px] w-full'>
              <div className='bg-violet-600/20 w-fit p-4 rounded-full'>
                <FaSuitcase size={20} className='2xl:hidden'/>
                <FaSuitcase size={20} className='hidden 2xl:block'/>
              </div>
              <h3 className='font-bold text-[20px] 2xl:text-[25px] lg:text-[27px]  mt-2'>Jobs</h3>
              <p className='text-gray-400 text-[13px] 2xl:text-[15px]  lg:text-[15px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </MagicCard>
        </div>
         <div className='flex flex-col gap-5'>
        <MagicCard>
            <div className='p-4 rounded-xl bg-black/40 shadow-xl shadow-black lg:w-[230px]  2xl:w-[250px] w-full'>
              <div className='bg-yellow-600/20 w-fit p-4 rounded-full'>
                <GiSkills size={20} className='2xl:hidden'/>
                <GiSkills size={20} className='hidden 2xl:block'/>
              </div>
              <h3 className='font-bold text-[20px] 2xl:text-[25px] lg:text-[27px]  mt-2'>Skill Exchange</h3>
              <p className='text-gray-400 text-[13px] 2xl:text-[15px]  lg:text-[15px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </MagicCard>
            <MagicCard>
            <div className='p-4 rounded-xl bg-black/40 shadow-xl shadow-black lg:w-[230px] 2xl:w-[250px] w-full'>
              <div className='bg-red-400/20 w-fit p-4 rounded-full'>
                <MdExplore size={20} className='2xl:hidden'/>
                <MdExplore size={20} className='hidden 2xl:block'/>
              </div>
              <h3 className='font-bold text-[20px] 2xl:text-[25px] lg:text-[27px]  mt-2'>Learning</h3>
              <p className='text-gray-400 text-[13px] 2xl:text-[15px]  lg:text-[15px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </MagicCard>
        </div>
       </div>
    {/* rightside */}
       <div>
       <h1 className='font-bold font-barlow md:text-[40px] text-[30px] 2xl:text-[50px] lg:text-[60px]'>What We are Offering For You?</h1>
       <p className='text-gray-400 mt-3 2xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       <p  className='text-gray-400 mt-3 2xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       <div className='mt-10 flex items-center gap-7'>
             <div className='bg-black/30 border font-semibold border-gray-800 backdrop-blur w-fit rounded-xl p-5'>
                <h1 className='font-bold text-[40px] text-yellow-500'>150+</h1>
                <p className='text-gray-400'>Happy Clients</p>
             </div>
             <div className='bg-black/30 border font-semibold border-gray-800 backdrop-blur w-fit rounded-xl p-5'>
                <h1 className='font-bold text-[40px]  text-green-500 '>500+</h1>
                <p className='text-gray-400'>Active Recuiters</p>
             </div>
       </div>
       </div>
    </div>
  )
}

export default Offer