import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { TiArrowUpOutline } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const CommunityPage = () => {
  // Sample post data
  const posts = [
    {
      id: 1,
      username: 'John Smith',
      time: '2 hrs ago',
      title: 'It took me 3 months to implement React Server Components from Scratch',
      image: '/react2.jpg',
      upvotes: '10k',
      comments: '2.9k'
    },
    {
      id: 2,
      username: 'Emma Wilson',
      time: '5 hrs ago',
      title: 'Building a Scalable Microservices Architecture with Node.js',
      image: '/aws.jpg',
      upvotes: '8.5k',
      comments: '1.7k'
    },
    {
      id: 3,
      username: 'Alex Patel',
      time: 'Yesterday',
      title: 'My Journey Optimizing Web Performance with Lazy Loading',
      image: '/react.jpg',
      upvotes: '12.3k',
      comments: '3.4k'
    },
    {
      id: 4,
      username: 'Sarah Kim',
      time: '2 days ago',
      title: 'How I Built a Real-Time Chat App with WebSocket',
      image: '/chat.jpg',
      upvotes: '6.2k',
      comments: '980'
    },
    {
      id: 5,
      username: 'Michael Brown',
      time: '3 days ago',
      title: 'Exploring GraphQL: From REST to GraphQL in 30 Days',
      image: '/graphql.jpg',
      upvotes: '15.7k',
      comments: '4.1k'
    }
  ];

  return (
    <div className=' flex gap-3 mt-3  max-w-6xl mx-auto '>
      <div className='w-[80%] flex flex-col gap-10  bg-[#1A1A1E] border border-gray-800 rounded-xl p-6 md:p-2'>
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <img src={`/hero${post.id}.jpg`} className='w-9 h-9 rounded-full object-cover'/>
                  <div className='flex items-center gap-1'>
                    <p className='text-gray-500 text-[13px]'>{post.username}</p>
                    <div className='h-1 w-1 rounded-full bg-gray-600'/>
                    <p className='text-gray-500 text-[13px]'>{post.time}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <button className='px-5 py-1 bg-green-600/30 text-white rounded-full'>Join</button>
                  <BsThreeDots />
                </div>
              </div>
              <h3 className='text-white font-bold text-[16px] mt-3'>{post.title}</h3>
              <img src={post.image} className='w-full h-[300px] object-cover mt-3'/>
              <div className='mt-3 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full hover:bg-white/30'>
                    <TiArrowUpOutline />
                    <p className='text-white text-[13px]'>{post.upvotes}</p>
                    <TiArrowUpOutline className='rotate-180'/>
                  </div>
                  <div className='flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full hover:bg-white/30'>
                    <FaRegComment />
                    <p className='text-white text-[13px]'>{post.comments}</p>
                  </div>
                  <div className='flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full hover:bg-white/30'>
                    <FaShare />
                    <p className='text-white text-[13px]'>Share</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 bg-white/20 w-fit p-2 rounded-full hover:bg-white/30'>
                  <FiBookmark />
                </div>
              </div>
            </div>
            {index < posts.length - 1 && <div className='h-[1px] w-full bg-gray-800'/>}
          </React.Fragment>
        ))}
      </div>


{/* right side */}
      <div className='border  w-[30%]  border-gray-800 h-fit rounded-xl p-3  bg-[#1A1A1E] border border-gray-800 rounded-xl'>

      <p className='font-bold text-[17px] text-gray-300'>Communities</p>
      <div className='flex items-center gap-3 mt-5 border border-gray-800 p-3 rounded-xl'>
          <GoPlus size={20} />
          <p>Create Community</p>
      </div>
 {/* communities */}
      <div className='mt-5 flex flex-col gap-5'>
      <div className='flex items-center gap-3'>
        <img src='/reactlogo.jpg' className='h-10 w-10 rounded-full object-cover'/>
        <div>
           <div className='flex items-center justify-between'>
             <h4>Frontend</h4>
             <button className='px-5 py-1 bg-gray-700 font-semibold text-[13px] hover:bg-gray-800 text-white rounded-full'>Join</button>
           </div>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>Here you can share your knowledge about frontend development</p>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>12k members</p>
        </div>
      </div>


        <div className='flex items-center gap-3'>
        <img src='/jslogo.jpg' className='h-10 w-10 rounded-full object-cover'/>
        <div>
           <div className='flex items-center justify-between'>
             <h4>Javascript</h4>
             <button className='px-5 py-1 bg-gray-700 font-semibold text-[13px] hover:bg-gray-800 text-white rounded-full'>Join</button>
           </div>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>Here you can share your knowledge about frontend development</p>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>12k members</p>
        </div>
      </div>



        <div className='flex items-center gap-3'>
        <img src='/mllogo.jpg' className='h-10 w-10 rounded-full object-cover'/>
        <div>
           <div className='flex items-center justify-between'>
             <h4>Machine Learning</h4>
             <button className='px-5 py-1 bg-gray-700 font-semibold text-[13px] hover:bg-gray-800 text-white rounded-full'>Join</button>
           </div>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>Here you can share your knowledge about frontend development</p>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>12k members</p>
        </div>
      </div>


        <div className='flex items-center gap-3'>
        <img src='/nodelogo.jpg' className='h-10 w-10 rounded-full object-cover'/>
        <div>
           <div className='flex items-center justify-between'>
             <h4>Backend</h4>
             <button className='px-5 py-1 bg-gray-700 font-semibold text-[13px] hover:bg-gray-800 text-white rounded-full'>Join</button>
           </div>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>Here you can share your knowledge about frontend development</p>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>12k members</p>
        </div>
      </div>

        <div className='flex items-center gap-3'>
        <img src='/dslogo.jpg' className='h-10 w-10 rounded-full object-cover'/>
        <div>
           <div className='flex items-center justify-between'>
             <h4>Data Science</h4>
             <button className='px-5 py-1 bg-gray-700 font-semibold text-[13px] hover:bg-gray-800 text-white rounded-full'>Join</button>
           </div>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>Here you can share your knowledge about frontend development</p>
            <p className='text-gray-400 text-[13px] truncate w-[200px]'>12k members</p>
        </div>
      </div>

      </div>
        
      </div>
    </div>
  );
};

export default CommunityPage;