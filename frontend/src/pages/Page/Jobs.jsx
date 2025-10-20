import { RiArrowLeftSLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
const Jobs = () => {
  return (
    <div>
      <div className="mt-4 border border-gray-700 p-4 rounded-lg bg-gray-900/50 text-white">
        <div className="flex items-center gap-5">
          <div>
            <h1 className="font-bold text-[22px] text-gray-100">
              Interested in working with us in the future?
            </h1>
            <p className="mt-2 text-gray-300">
              Members who share that they’re interested in a company may be 2x
              as likely to get a message from a recruiter than those who don’t.{" "}
              <br /> <span className="text-blue-400">Learn more</span>
            </p>
          </div>
          <img src="/google.jpeg" className="h-20 w-20 rounded-full" alt="" />
        </div>

        <button className="font-semibold border border-blue-500 px-5 py-2 rounded-full mt-5 cursor-pointer ">
          I'm intrested
        </button>
      </div>


      <div className="mt-10 flex flex-col items-center justify-center border border-gray-700 bg-gray-900/60 p-3 w-full  rounded-lg">
  <h1 className="text-[25px] text-center font-bold text-white">
    Google has 4,329 job openings — find the one for you.
  </h1>

  <div className="mt-6 relative w-full">
    <input
      type="text"
      placeholder="Search jobs..."
      className="border border-gray-600 p-3 w-full rounded-full bg-gray-800 text-white focus:outline-none pr-24"
    />
    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold"
    >
      Search
    </button>
  </div>
</div>



{/* jobs */}

<div className="mt-4 p-4 rounded-lg border border-gray-700 ">

    <div className="flex items-center justify-between">
        <h1 className="font-semibold text-[20px]">Recently posted jobs</h1>

        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white">
                <RiArrowLeftSLine size={20} className="mt-1"/>
                <p className="font-semibold ">Previous</p>
            </div>
             <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white">
                <p className="font-semibold ">Next</p>
                <RiArrowLeftSLine size={20} className="rotate-[180deg] mt-1"/>
            </div>
        </div>
    </div>

<div className="mt-7">

    <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl relative">
              <img src="/google.jpeg" className="h-20 w-20 rounded-full" alt="" />

              <div className="mt-4">
                <h1 className="font-bold text-[20px] text-gray-100">Web Application Engineer</h1>
                <p className="text-gray-300 text-sm my-1">Google</p>
                <p className="text-gray-300 text-sm ">Benguluru</p>
              </div>

              <p className="text-gray-400 text-sm pt-5">3 weeks ago</p>
              <FaRegBookmark size={20}  className="absolute top-3 right-3 cursor-pointer"/>
        </div>

          <div className="bg-gray-800 p-4 rounded-xl relative">
              <img src="/google.jpeg" className="h-20 w-20 rounded-full" alt="" />

              <div className="mt-4">
                <h1 className="font-bold text-[20px] text-gray-100">Web Application Engineer</h1>
                <p className="text-gray-300 text-sm my-1">Google</p>
                <p className="text-gray-300 text-sm ">Benguluru</p>
              </div>

              <p className="text-gray-400 text-sm pt-5">3 weeks ago</p>
              <FaRegBookmark size={20}  className="absolute top-3 right-3 cursor-pointer"/>
        </div>


          <div className="bg-gray-800 p-4 rounded-xl relative">
              <img src="/google.jpeg" className="h-20 w-20 rounded-full" alt="" />

              <div className="mt-4">
                <h1 className="font-bold text-[20px] text-gray-100">Web Application Engineer</h1>
                <p className="text-gray-300 text-sm my-1">Google</p>
                <p className="text-gray-300 text-sm ">Benguluru</p>
              </div>

              <p className="text-gray-400 text-sm pt-5">3 weeks ago</p>
              <FaRegBookmark size={20}  className="absolute top-3 right-3 cursor-pointer"/>
        </div>

    </div>

</div>
</div>



    </div>
  );
};

export default Jobs;
