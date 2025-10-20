import { MdPersonAddAlt1 } from "react-icons/md";

const RightSidebar = () => {
  return (
    <div className="min-h-screen hidden lg:block w-[20%] ">
      {/* requests */}

      <div className="p-2 border border-gray-800 rounded-sm bg-[#1A1A1E] ">

        <div className="mb-5 flex items-center gap-3">
            <p className="font-semibold text-gray-400">REQUESTS</p>
<p className="text-white bg-green-600/40 w-6 h-6 flex items-center justify-center rounded-full text-sm">
  2
</p>

        </div>
       <div className="flex flex-col gap-4">
        <div>
         <div className="flex items-start gap-2">
          <img
            src="/hero3.jpg"
            className="h-8 w-8 rounded-full object-cover aspect-square"
            alt="profile"
          />

          <p className="text-[13px] text-gray-500 ">
            <span className="font-semibold text-gray-300">John Cena</span> wants
            to connect with you
          </p>
        </div>

        <div className="mt-3 flex items-center gap-4">
          <p className="text-blue-400 font-semibold cursor-pointer text-[14px]">Accept</p>
          <p className="text-gray-400 hover:text-gray-200 cursor-pointer font-semibold text-[14px]">
            Decline
          </p>
        </div>
       </div>

        <div>
         <div className="flex items-start gap-2">
          <img
            src="/hero2.jpg"
            className="h-8 w-8 rounded-full object-cover aspect-square"
            alt="profile"
          />

          <p className="text-[13px] text-gray-500 ">
            <span className="font-semibold text-gray-300">Triple H</span> wants
            to connect with you
          </p>
        </div>

        <div className="mt-3 flex items-center gap-4">
          <p className="text-blue-400 font-semibold cursor-pointer text-[14px]">Accept</p>
          <p className="text-gray-400 hover:text-gray-200 cursor-pointer font-semibold text-[14px]">
            Decline
          </p>
        </div>
       </div>
       </div>
      </div>


      {/* suggestions */}

      <div className="p-2 border border-gray-800 rounded-sm bg-[#1A1A1E] mt-4">
        <p className="mb-4 font-semibold text-gray-400">SUGGESSTIONS FOR YOU</p>
         <div className="flex flex-col gap-4 ">
             <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <img src="/hero1.jpg" className="h-12 w-12 rounded-full object-cover aspect-square" alt="" />
                <div>
                    <p className="text-[17px] ">Muni</p>
                    <p className="text-gray-400 text-[13px]">UI/UX Designer</p>
                </div>
            </div>
              <MdPersonAddAlt1 size={25} className="text-gray-400 hover:text-gray-200 cursor-pointer"/>
          </div>

           <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <img src="/hero5.jpg" className="h-12 w-12 rounded-full object-cover aspect-square" alt="" />
                <div>
                    <p className="text-[17px] ">Muni</p>
                    <p className="text-gray-400 text-[13px]">UI/UX Designer</p>
                </div>
            </div>
              <MdPersonAddAlt1 size={25} className="text-gray-400 hover:text-gray-200 cursor-pointer"/>
          </div>

           <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <img src="/hero4.jpg" className="h-12 w-12 rounded-full object-cover aspect-square" alt="" />
                <div>
                    <p className="text-[17px] ">Muni</p>
                    <p className="text-gray-400 text-[13px]">UI/UX Designer</p>
                </div>
            </div>
              <MdPersonAddAlt1 size={25} className="text-gray-400 hover:text-gray-200 cursor-pointer"/>
          </div>

           <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <img src="/hero3.jpg" className="h-12 w-12 rounded-full object-cover aspect-square" alt="" />
                <div>
                    <p className="text-[17px] ">Muni</p>
                    <p className="text-gray-400 text-[13px]">UI/UX Designer</p>
                </div>
            </div>
              <MdPersonAddAlt1 size={25} className="text-gray-400 hover:text-gray-200 cursor-pointer"/>
          </div>

           <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <img src="/hero2.jpg" className="h-12 w-12 rounded-full object-cover aspect-square" alt="" />
                <div>
                    <p className="text-[17px] ">Muni</p>
                    <p className="text-gray-400 text-[13px]">UI/UX Designer</p>
                </div>
            </div>
              <MdPersonAddAlt1 size={25} className="text-gray-400 hover:text-gray-200 cursor-pointer"/>
          </div>
         </div>

                 <p className="mt-4 text-xs uppercase font-bold text-gray-400  cursor-pointer hover:underline ">View All</p>
      </div>
    </div>
  );
};

export default RightSidebar;
