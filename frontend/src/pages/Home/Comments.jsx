import React from 'react'

const Comments = () => {
    return (
        <div className='lg:min-h-screen 2xl:mt-10 mt-15 lg:mt-15 md:px-10 px-3 lg:flex items-center justify-between gap-10'>
            {/* leftside */}
           

            <div className='lg:w-[50%]'>
                <h1 className='font-bold font-barlow md:text-[40px] text-[25px] 2xl:text-[50px] lg:text-[55px] lg:leading-[70px]'>People Share Amazing Think About Us</h1>
                <p className='text-gray-400 2xl:text-[20px] md:text-[17px] lg:text-[17px]  mt-3'>
                 Discover why thousands of professionals choose our platform to share skills, 
          connect with peers, and advance their careers in ways they never thought possible.
                </p>
                 <p className='text-gray-400 mt-6 2xl:text-[20px] md:text-[17px] lg:text-[17px] leading-relaxed'>
          Our community-driven approach ensures that you get genuine feedback and meaningful 
          connections that help you grow both personally and professionally.
        </p>
            </div>



{/* rightside */}

             <div className='flex flex-col gap-5 bg-black/30 lg:w-[50%] mt-7 lg:mt-0 h-fit backdrop-blur rounded-xl p-2'>
                <div className='md:flex gap-2 bg-[#181818] p-3  rounded-xl'>
                   <img src='/hero1.jpg' className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] 2xl:h-[60px] 2xl:w-[60px] aspect-square rounded-full object-cover' />

                    <div className='mt-3 md:mt-0'>
                        <h3 className='font-bold 2xl:text-[17px] '>Tarran Rop</h3>
                        <p className='text-[10px] 2xl:text-[14px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] 2xl:text-[15px]  mt-4'>This app is really helpful.This is the best Skill Sharing App </p>
                    </div>
                </div>

                <div className='md:flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero2.jpg' className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] 2xl:h-[60px] 2xl:w-[60px] aspect-square rounded-full object-cover' />
                    <div className='mt-3 md:mt-0'>
                        <h3 className='font-bold 2xl:text-[17px]'>Sarah Johnson</h3>
                        <p className='text-[10px] 2xl:text-[14px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] 2xl:text-[15px] mt-4'>This platform completely transformed how I share skills. The interface is intuitive and the community is incredibly supportive! </p>
                    </div>
                </div>

                <div className='md:flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero3.jpg' className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] 2xl:h-[60px] 2xl:w-[60px] aspect-square rounded-full object-cover' />
                    <div className='mt-3 md:mt-0'>
                        <h3 className='font-bold 2xl:text-[17px]'>Marcus Chen</h3>
                        <p className='text-[10px] 2xl:text-[14px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] 2xl:text-[15px] mt-4'>I've tried many skill-sharing apps, but this one stands out with its seamless experience and powerful features.</p>
                    </div>
                </div>

                <div className='md:flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero4.jpg' className='h-[40px] w-[40px] md:h-[50px] md:w-[50px] 2xl:h-[60px] 2xl:w-[60px] aspect-square rounded-full object-cover'/>
                    <div className='mt-3 md:mt-0'>
                        <h3 className='font-bold 2xl:text-[17px]'>Olivia Martinez</h3>
                        <p className='text-[10px] 2xl:text-[14px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] 2xl:text-[15px] mt-4'>The networking opportunities here are unparalleled. I've connected with industry leaders and learned so much! </p>
                    </div>
                </div>

                {/* <div className='flex gap-2 bg-[#181818] p-3 rounded-xl'>
                <img src='/hero5.jpg' className='w-[50px] h-[50px] rounded-full object-cover'/>
                <div>
                   <h3 className='font-bold'>Tarran Rop</h3>
                   <p className='text-[10px]'>⭐⭐⭐⭐⭐</p>
                   <p className='text-gray-400 text-[13px] mt-4'>This app is really helpful.This is the best Skill Sharing App </p>
                </div>
             </div> */}

            </div>
        </div>
    )
}

export default Comments