import Lottie from "lottie-react";
import rb from "../../animations/rb.json";
import { Link } from "react-router-dom";
const ResumeEntryPage = () => {
  return (
    <div className="min-h-screen lg:max-w-6xl w-full  lg:mx-auto lg:px-10 p-2 pt-7">
      <div className="lg:flex items-center gap-7">
        {/* left */}
        <div className="lg:w-[50%] w-full">
          <h1 className="font-extrabold lg:text-[85px] text-[60px]  leading-[65px] mb-10">Just three easy steps</h1>
          <div className="flex items-center gap-3">
            <p className="bg-gray-700 h-10 w-10 rounded-full flex font-semibold items-center justify-center text-white">
              1
            </p>
            <p className="font-semibold text-[20px]">
              <span className="text-[30px] text-green-600">Select</span> a
              template from our library of professional designs
            </p>
          </div>
          <div className="flex items-center gap-3 my-7">
            <p className="bg-gray-700 h-10 w-10 rounded-full flex font-semibold items-center justify-center text-white">
              2
            </p>
            <p className="font-semibold text-[20px]">
              <span className="text-[30px] text-green-600">Build</span> your
              resume with our industry-specific bullet points
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="bg-gray-700 h-10 w-10 rounded-full flex font-semibold items-center justify-center text-white">
              3
            </p>
            <p className="font-semibold text-[20px]">
              <span className="text-[30px] text-green-600"> Customize</span> the
              details and wrap it up. You’re ready to send!
            </p>
          </div>

         <Link to={"/experience-page"}>
          <button className="my-10 px-6 py-3 rounded-full w-full bg-green-500 font-bold text-[16px] cursor-pointer" >Next</button>
         </Link>
        </div>

        {/* right */}
        <div>
          <Lottie
            animationData={rb}
            loop={true}
            className="lg:w-[400px] h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeEntryPage;
