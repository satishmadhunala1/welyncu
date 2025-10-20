import { Link } from "react-router-dom";

const ExperienceLevelPage = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto lg:px-10 px-2 flex flex-col items-center justify-center">
      <div className="">
        <h1 className="font-bold lg:text-[60px] text-center text-[50px] leading-[50px]">
          How long have you been working?
        </h1>
        <p className="text-center lg:text-[25px] text-[20px] mt-4">
          We'll find the best templates for your experience level.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 w-full gap-5 mt-10">
        <Link to={"/choose-template"}>
          <div className="border border-gray-700  px-4 py-4 rounded-lg hover:bg-gray-800 cursor-pointer flex items-center text-center justify-center">
            <p className="text-[20px]">No Experience</p>
          </div>
        </Link>
        <Link to={"/choose-template"}>
          <div className="border border-gray-700 px-4 py-4 rounded-lg hover:bg-gray-800 cursor-pointer flex items-center text-center justify-center">
            <p className="text-[20px]">Less than 3 years</p>
          </div>
        </Link>
        <Link to={"/choose-template"}>
          <div className="border border-gray-700 px-4 py-4 rounded-lg hover:bg-gray-800 cursor-pointer flex items-center text-center justify-center">
            <p className="text-[20px]">3-5 years</p>
          </div>
        </Link>
        <Link to={"/choose-template"}>
          <div className="border border-gray-700 px-4 py-4 rounded-lg hover:bg-gray-800 cursor-pointer flex items-center text-center justify-center">
            <p className="text-[20px]">5-10 years</p>
          </div>
        </Link>

        <Link to={"/choose-template"}>
          <div className="border border-gray-700 px-4 py-4 rounded-lg hover:bg-gray-800  cursor-pointer flex items-center text-center justify-center">
            <p className="text-[20px] text-center ">10+ years</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExperienceLevelPage;
