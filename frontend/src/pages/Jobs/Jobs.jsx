import React from 'react'
import { FaSort } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import JobSearchbar from '../../components/JobSearchbar';

const Jobs = () => {
    return (
      <div className='min-h-screen'>
      <JobSearchbar/>
          <div className=' flex gap-10  bg-black/20  px-10'>
            {/* leftside bar */}
            <div className='w-[20%]  border-r-1 border-gray-600'>
                <p className='text-[20px] font-bold mt-2'>Filters</p>
                <div className='mt-4'>
                    <p className='text-gray-400'>Working schedule</p>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Full Time
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Part Time
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Internship
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Volunteering
                    </div>
                </div>


                <div className='mt-6'>
                    <p className='text-gray-400'>Employment Type</p>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Full day
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Flexible schedule
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Part Time
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Shift work
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='text-gray-400'>Location</p>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Remote
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> On-site
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> Hybrid
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <input type="checkbox" name="" id="" /> In person
                    </div>
                </div>

            </div>

            {/* rightside jobs */}
            <div className='w-[80%]'>
                <div className='flex justify-between items-center '>
                    <h3 className='font-bold text-[30px]'>Recommended Jobs</h3>
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-400 text-[10px]'>Sory by: <psan className='text-gray-400 text-[13px] font-bold'>Last updated</psan></p>
                        <FaSort />
                    </div>
                </div>

                {/* jobs */}
                <div className='grid grid-cols-3 gap-4 mt-10'>


                    <div className='border border-gray-800 p-2 rounded-xl'>
                        <div className='bg-green-400/20 w-fit p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-[15px] text-black bg-white px-4 py-1 rounded-full w-fit'>20 May,2025</p>
                                <div className='bg-white p-2 rounded-full text-black w-fit'>
                                    <CiBookmark size={15} />
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='text-[15px] font-semibold'>Amazon</p>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-[25px] leading-[20px] mt-2'>Senior UI/UX Designer</h2>
                                    <img src='/amazon.webp' className='h-10 w-10 rounded-full object-cover' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap mt-4'>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Part Time</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Senior level</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Remote</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>2-5 years</p>
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between '>
                            <div>
                                <p className='font-bold text-[20px]'>$250/hr</p>
                                <p className='text-gray-400 text-[15px]'>San Francisco, CA</p>
                            </div>
                            <button className='bg-white text-black text-[15px] py-2 px-4 rounded-full font-semibold '>Details</button>
                        </div>


                    </div>


                       <div className='border border-gray-800 p-2 rounded-xl'>
                        <div className='bg-pink-400/20 w-fit p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-[15px] text-black bg-white px-4 py-1 rounded-full w-fit'>4 Feb,2025</p>
                                <div className='bg-white p-2 rounded-full text-black w-fit'>
                                    <CiBookmark size={15} />
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='text-[15px] font-semibold'>Google</p>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-[25px] leading-[20px] mt-2'>  Junior UI/UX Designer</h2>
                                    <img src='/netflix.jpeg' className='h-10 w-10 rounded-full object-cover' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap mt-4'>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Full Time</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Junior level</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Remote</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>2 years</p>
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between '>
                            <div>
                                <p className='font-bold text-[20px]'>$150/hr</p>
                                <p className='text-gray-400 text-[15px]'>California, CA</p>
                            </div>
                            <button className='bg-white text-black text-[15px] py-2 px-4 rounded-full font-semibold '>Details</button>
                        </div>


                    </div>



                       <div className='border border-gray-800 p-2 rounded-xl'>
                        <div className='bg-blue-500/20 w-fit p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-[15px] text-black bg-white px-4 py-1 rounded-full w-fit'>29 Jan,2025</p>
                                <div className='bg-white p-2 rounded-full text-black w-fit'>
                                    <CiBookmark size={15} />
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='text-[15px] font-semibold'>Dribble</p>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-[25px] leading-[20px] mt-2'>Senior Motion Designer</h2>
                                    <img src='/apple.jpg' className='h-10 w-10 rounded-full object-cover' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap mt-4'>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Part Time</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Senior level</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Shift Work</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>2-5 years</p>
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between '>
                            <div>
                                <p className='font-bold text-[20px]'>$260/hr</p>
                                <p className='text-gray-400 text-[15px]'>New York, NY</p>
                            </div>
                            <button className='bg-white text-black text-[15px] py-2 px-4 rounded-full font-semibold '>Details</button>
                        </div>


                    </div>



                       <div className='border border-gray-800 p-2 rounded-xl'>
                        <div className='bg-yellow-400/20 w-fit p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-[15px] text-black bg-white px-4 py-1 rounded-full w-fit'>20 May,2025</p>
                                <div className='bg-white p-2 rounded-full text-black w-fit'>
                                    <CiBookmark size={15} />
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='text-[15px] font-semibold'>Apple</p>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-[25px] leading-[20px] mt-2'>Senior UI/UX Designer</h2>
                                    <img src='/google.jpeg' className='h-10 w-10 rounded-full object-cover' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap mt-4'>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Part Time</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Senior level</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Remote</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>2-5 years</p>
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between '>
                            <div>
                                <p className='font-bold text-[20px]'>$250/hr</p>
                                <p className='text-gray-400 text-[15px]'>San Francisco, CA</p>
                            </div>
                            <button className='bg-white text-black text-[15px] py-2 px-4 rounded-full font-semibold '>Details</button>
                        </div>


                    </div>



                       <div className='border border-gray-800 p-2 rounded-xl'>
                        <div className='bg-red-400/20 w-fit p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-[15px] text-black bg-white px-4 py-1 rounded-full w-fit'>20 May,2025</p>
                                <div className='bg-white p-2 rounded-full text-black w-fit'>
                                    <CiBookmark size={15} />
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='text-[15px] font-semibold'>Airbnb</p>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-[25px] leading-[20px] mt-2'>Senior UI/UX Designer</h2>
                                    <img src='/delottie.png' className='h-10 w-10 rounded-full object-cover' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap mt-4'>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Part Time</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Senior level</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Remote</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>2-5 years</p>
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between '>
                            <div>
                                <p className='font-bold text-[20px]'>$250/hr</p>
                                <p className='text-gray-400 text-[15px]'>San Francisco, CA</p>
                            </div>
                            <button className='bg-white text-black text-[15px] py-2 px-4 rounded-full font-semibold '>Details</button>
                        </div>


                    </div>



                       <div className='border border-gray-800 p-2 rounded-xl'>
                        <div className='bg-violet-400/20 w-fit p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-[15px] text-black bg-white px-4 py-1 rounded-full w-fit'>20 May,2025</p>
                                <div className='bg-white p-2 rounded-full text-black w-fit'>
                                    <CiBookmark size={15} />
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='text-[15px] font-semibold'>Twitter</p>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-[25px] leading-[20px] mt-2'>Senior UI/UX Designer</h2>
                                    <img src='/amazon.webp' className='h-10 w-10 rounded-full object-cover' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap mt-4'>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Part Time</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Senior level</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>Remote</p>
                                <p className='text-black text-[12px] font-semibold bg-transparent py-1 px-2 rounded-full border border-black '>2-5 years</p>
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between '>
                            <div>
                                <p className='font-bold text-[20px]'>$250/hr</p>
                                <p className='text-gray-400 text-[15px]'>San Francisco, CA</p>
                            </div>
                            <button className='bg-white text-black text-[15px] py-2 px-4 rounded-full font-semibold '>Details</button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
      </div>
    )
}

export default Jobs