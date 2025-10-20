import React from "react";
import { FaSort } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import JobSearchbar from "../../components/JobSearchbar";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="min-h-screen">
      <JobSearchbar />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/20 px-4 md:px-6 lg:px-10 py-6">
        {/* leftside bar */}
        <div className="w-full lg:w-[25%] border-b lg:border-b-0 lg:border-r border-gray-600 pb-6 lg:pb-0">
          <p className="text-lg md:text-xl font-bold mt-2">Filters</p>

          <div className="mt-4 grid md:grid-cols-3 lg:grid-cols-1 grid-cols-2 space-y-4">
            <div>
              <p className="text-gray-400">Working schedule</p>
              <div className="space-y-2 mt-2">
                <label className="flex gap-2">
                  <input type="checkbox" /> Full Time
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Part Time
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Internship
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Volunteering
                </label>
              </div>
            </div>

            <div>
              <p className="text-gray-400">Employment Type</p>
              <div className="space-y-2 mt-2">
                <label className="flex gap-2">
                  <input type="checkbox" /> Full day
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Flexible schedule
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Part Time
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Shift work
                </label>
              </div>
            </div>

            <div>
              <p className="text-gray-400">Location</p>
              <div className="space-y-2 mt-2">
                <label className="flex gap-2">
                  <input type="checkbox" /> Remote
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> On-site
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> Hybrid
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" /> In person
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* rightside jobs */}
        <div className="w-full lg:w-[75%]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h3 className="font-bold text-2xl md:text-3xl">Recommended Jobs</h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-xs md:text-sm">
                Sort by:{" "}
                <span className="text-gray-400 font-bold">Last updated</span>
              </p>
              <FaSort />
            </div>
          </div>

          {/* jobs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Example Job Card (reuse for others) */}
            <div className="border border-gray-800 p-2 rounded-xl">
              <div className="bg-green-400/20 w-full p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm md:text-base text-black bg-white px-3 py-1 rounded-full w-fit">
                    20 May,2025
                  </p>
                  <div className="bg-white p-2 rounded-full text-black w-fit">
                    <CiBookmark size={15} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-base font-semibold">Amazon</p>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg md:text-xl leading-tight mt-2">
                      Senior UI/UX Designer
                    </h2>
                    <img
                      src="/amazon.webp"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Part Time
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Senior level
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Remote
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    2-5 years
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg md:text-xl">$250/hr</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    San Francisco, CA
                  </p>
                </div>
                <Link to={"/job"}>
                  <button className="bg-white text-black text-sm md:text-base py-2 px-4 rounded-full font-semibold">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-800 p-2 rounded-xl">
              <div className="bg-pink-400/20 w-full p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm md:text-base text-black bg-white px-3 py-1 rounded-full w-fit">
                    4 Feb,2025
                  </p>
                  <div className="bg-white p-2 rounded-full text-black w-fit">
                    <CiBookmark size={15} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-base font-semibold">Netflix</p>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg md:text-xl leading-tight mt-2">
                      Junior UI/UX Designer
                    </h2>
                    <img
                      src="/netflix.jpeg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Part Time
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Senior level
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Remote
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    2-5 years
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg md:text-xl">$150/hr</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    California, CA
                  </p>
                </div>
                <Link to={"/job"}>
                  <button className="bg-white text-black text-sm md:text-base py-2 px-4 rounded-full font-semibold">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-800 p-2 rounded-xl">
              <div className="bg-blue-500/20 w-full p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm md:text-base text-black bg-white px-3 py-1 rounded-full w-fit">
                    29 Jan,2025
                  </p>
                  <div className="bg-white p-2 rounded-full text-black w-fit">
                    <CiBookmark size={15} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-base font-semibold">Google</p>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg md:text-xl leading-tight mt-2">
                      Senior Motion Designer
                    </h2>
                    <img
                      src="/google.jpeg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Part Time
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Senior level
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Remote
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    2-5 years
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg md:text-xl">$310/hr</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    New York, NY
                  </p>
                </div>
                <Link to={"/job"}>
                  <button className="bg-white text-black text-sm md:text-base py-2 px-4 rounded-full font-semibold">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-800 p-2 rounded-xl">
              <div className="bg-yellow-400/20 w-full p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm md:text-base text-black bg-white px-3 py-1 rounded-full w-fit">
                    20 May,2025
                  </p>
                  <div className="bg-white p-2 rounded-full text-black w-fit">
                    <CiBookmark size={15} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-base font-semibold">Apple</p>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg md:text-xl leading-tight mt-2">
                      Senior UI/UX Designer
                    </h2>
                    <img
                      src="/apple.jpg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Part Time
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Senior level
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Remote
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    2-5 years
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg md:text-xl">$250/hr</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    San Francisco, CA
                  </p>
                </div>
                <Link to={"/job"}>
                  <button className="bg-white text-black text-sm md:text-base py-2 px-4 rounded-full font-semibold">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-800 p-2 rounded-xl">
              <div className="bg-red-400/20 w-full p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm md:text-base text-black bg-white px-3 py-1 rounded-full w-fit">
                    20 May,2025
                  </p>
                  <div className="bg-white p-2 rounded-full text-black w-fit">
                    <CiBookmark size={15} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-base font-semibold">Deloitte</p>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg md:text-xl leading-tight mt-2">
                      Senior UI/UX Designer
                    </h2>
                    <img
                      src="/delottie.png"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Part Time
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Senior level
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Remote
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    2-5 years
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg md:text-xl">$250/hr</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    San Francisco, CA
                  </p>
                </div>
                <Link to={"/job"}>
                  <button className="bg-white text-black text-sm md:text-base py-2 px-4 rounded-full font-semibold">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div className="border border-gray-800 p-2 rounded-xl">
              <div className="bg-violet-400/20 w-full p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm md:text-base text-black bg-white px-3 py-1 rounded-full w-fit">
                    20 May,2025
                  </p>
                  <div className="bg-white p-2 rounded-full text-black w-fit">
                    <CiBookmark size={15} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm md:text-base font-semibold">Amazon</p>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg md:text-xl leading-tight mt-2">
                      Senior UI/UX Designer
                    </h2>
                    <img
                      src="/amazon.webp"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Part Time
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Senior level
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    Remote
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold border border-gray-400 py-1 px-2 rounded-full">
                    2-5 years
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg md:text-xl">$250/hr</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    San Francisco, CA
                  </p>
                </div>
                <Link to={"/job"}>
                  <button className="bg-white text-black text-sm md:text-base py-2 px-4 rounded-full font-semibold">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
