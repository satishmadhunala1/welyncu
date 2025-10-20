import { IoMdInformationCircle } from "react-icons/io";

const About = () => {
  return (
    <div className="">
      <h1 className="font-bold text-[25px] mb-4">Overview</h1>
      <p className="text-gray-300 text-[17px] font-normal">
        A problem isn't truly solved until it's solved for all. Googlers build
        products that help create opportunities for everyone, whether down the
        street or across the globe. Bring your insight, imagination and a
        healthy disregard for the impossible. Bring everything that makes you
        unique. Together, we can build for everyone.
      </p>

      <p className="my-4 text-gray-500 text-[22px] ">
        Check out our career opportunities at goo.gle/3DLEokh
      </p>

      <div>
        <p className="font-semibold text-[20px]">Website</p>
        <p className="text-blue-400 text-[17px] hover:underline cursor-pointer ">
          https://googlefake.com
        </p>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <p className="font-semibold text-[20px]">Verified Page</p>
          <IoMdInformationCircle size={20} className="mt-2" />
        </div>
        <p className="text-gray-300 text-[17px]">Aug 16,2023</p>
      </div>

    <div className="mt-4">
        <p className="font-semibold text-[20px]">Industry</p>
        <p className="text-gray-300 text-[17px]">Software Development</p>
      </div>

      <div className="mt-4">
        <p className="font-semibold text-[20px]">Comapny Size</p>
        <p className="text-gray-300 text-[17px] my-1">10,000+ employees</p>
        <p className="text-gray-300 text-[17px]">32,000+ associated members</p>
      </div>


          <div className="mt-4">
        <p className="font-semibold text-[20px]">Headquarters</p>
        <p className="text-gray-300 text-[17px] ">Mountain View, CA</p>
      </div>

          <div className="mt-4">
        <p className="font-semibold text-[20px]">Specialties</p>
        <p className="text-gray-300 text-[17px] ">search, ads, mobile, android, online video, apps, machine learning, virtual reality, cloud, hardware, artificial intelligence, youtube, and software</p>
      </div>


      <div className="mt-4 border border-gray-700 p-4 rounded-lg bg-gray-900/50 text-white">
<div className="flex items-center gap-5">
       <div>
           <h1 className="font-bold text-[22px] text-gray-100">Interested in working with us in the future?</h1>
       <p className="mt-2 text-gray-300">Members who share that they’re interested in a company may be 2x as likely to get a message from a recruiter than those who don’t. <br /> <span className="text-blue-400">Learn more</span></p>
       </div>
       <img src="/google.jpeg" className="h-20 w-20 rounded-full" alt="" />
</div>

       <button className="font-semibold border border-blue-500 px-5 py-2 rounded-full mt-5 cursor-pointer ">I'm intrested</button>
      </div>


      <div className="mt-5">
        <h1 className="font-bold text-gray-100 text-[25px]">Locations (10)</h1>
        <p className="text-gray-300 ">Interact with the map to explore all locations</p>

        {/* integrate map like in linkedin */}
      </div>
    </div>
  );
};

export default About;
