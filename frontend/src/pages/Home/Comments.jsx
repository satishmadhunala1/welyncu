import React from 'react'

const Comments = () => {
    return (
        <div className='min-h-screen px-10 flex items-center justify-between gap-10'>
            {/* leftside */}
           

            <div className='w-[50%]'>
                <h1 className='font-bold font-barlow text-[40px]'>People Share Amazing Think About Us</h1>
                <p className='text-gray-400  mt-3'>
                 Discover why thousands of professionals choose our platform to share skills, 
          connect with peers, and advance their careers in ways they never thought possible.
                </p>
                 <p className='text-gray-400 mt-6  leading-relaxed'>
          Our community-driven approach ensures that you get genuine feedback and meaningful 
          connections that help you grow both personally and professionally.
        </p>
            </div>



{/* rightside */}

             <div className='flex flex-col gap-5 bg-black/30 w-[50%] h-fit backdrop-blur rounded-xl p-5'>
                <div className='flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero1.jpg' className='w-[50px] h-[50px] rounded-full object-cover' />
                    <div>
                        <h3 className='font-bold'>Tarran Rop</h3>
                        <p className='text-[10px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] mt-4'>This app is really helpful.This is the best Skill Sharing App </p>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero2.jpg' className='w-[50px] h-[50px] rounded-full object-cover' />
                    <div>
                        <h3 className='font-bold'>Sarah Johnson</h3>
                        <p className='text-[10px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] mt-4'>This platform completely transformed how I share skills. The interface is intuitive and the community is incredibly supportive! </p>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero3.jpg' className='w-[50px] h-[50px] rounded-full object-cover' />
                    <div>
                        <h3 className='font-bold'>Marcus Chen</h3>
                        <p className='text-[10px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] mt-4'>I've tried many skill-sharing apps, but this one stands out with its seamless experience and powerful features.</p>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#181818] p-3 rounded-xl'>
                    <img src='/hero4.jpg' className='w-[50px] h-[50px] rounded-full object-cover' />
                    <div>
                        <h3 className='font-bold'>Olivia Martinez</h3>
                        <p className='text-[10px]'>⭐⭐⭐⭐⭐</p>
                        <p className='text-gray-400 text-[13px] mt-4'>The networking opportunities here are unparalleled. I've connected with industry leaders and learned so much! </p>
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