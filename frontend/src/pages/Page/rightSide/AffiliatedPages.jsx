import { IoAddOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const AffiliatedPages = () => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg mt-5">
      <h1 className="font-bold text-[18px]">Affiliated pages</h1>

      <div className="mt-5 flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <img src="/google.jpeg" className="h-15 w-15 rounded-xl" alt="logo" />
          <div>
            <h1 className="font-semibold text-[15px] cursor-pointer hover:underline">
              Google Search Central
            </h1>
            <p className="text-sm text-gray-400 cursor-pointer">
              Technology, Information and Internet
            </p>
            <p className="text-sm text-gray-400">showcase page</p>
            <div className="flex items-center text-center gap-2 cursor-pointer hover:bg-gray-800 px-4 py-1 rounded-full border w-full  border-gray-300 mt-4">
              <IoAddOutline size={20} />
              <p className="text-gray-200  text-lg">Follow</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img src="/google.jpeg" className="h-15 w-15 rounded-xl" alt="logo" />
          <div>
            <h1 className="font-semibold text-[15px] cursor-pointer hover:underline">
              Google Search Central
            </h1>
            <p className="text-sm text-gray-400 cursor-pointer">
              Technology, Information and Internet
            </p>
            <p className="text-sm text-gray-400">showcase page</p>
            <div className="flex items-center text-center gap-2 cursor-pointer hover:bg-gray-800 px-4 py-1 rounded-full border w-full  border-gray-300 mt-4">
              <IoAddOutline size={20} />
              <p className="text-gray-200  text-lg">Follow</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img src="/google.jpeg" className="h-15 w-15 rounded-xl" alt="logo" />
          <div>
            <h1 className="font-semibold text-[15px] cursor-pointer hover:underline">
              Google Search Central
            </h1>
            <p className="text-sm text-gray-400 cursor-pointer">
              Technology, Information and Internet
            </p>
            <p className="text-sm text-gray-400">showcase page</p>
            <div className="flex items-center text-center gap-2 cursor-pointer hover:bg-gray-800 px-4 py-1 rounded-full border w-full  border-gray-300 mt-4">
              <IoAddOutline size={20} />
              <p className="text-gray-200  text-lg">Follow</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 w-full h-[1px] my-4" />
        <div className="flex gap-2 items-center text-gray-400 hover:text-white cursor-pointer">
          <p className="hover:underline">See All</p>
          <GoArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default AffiliatedPages;
