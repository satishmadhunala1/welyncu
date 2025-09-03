import { Ripple } from "../../components/magicui/ripple";
import { FaBraille } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Lottie from "lottie-react";
import roboAnimation from "../../animations/robo.json"; // 👈 update path if needed
import { Link } from "react-router-dom";

const Ai = () => {
  return (
    <div className="bg-background relative flex w-full flex-col items-center justify-center pt-5">

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#181818]" />
      {/* Navbar */}
      <div className="flex items-center w-[600px] justify-between pt-3 bg-white/10 backdrop-blur-2xl rounded-xl px-7 py-2">
        <div className="flex items-center gap-3">
          <FaBraille size={40} />
          <h2 className="font-bold text-[25px]">Swap AI</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow shadow-white/20 text-[17px]">
            Try it now
          </button>
          <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow shadow-white/20 text-[17px]">
            Contact us
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden rounded-lg  pb-25">
        {/* 🔥 Lottie Animation on top of heading */}
        <Lottie
          animationData={roboAnimation}
          loop={true}
          className="w-[300px] h-[300px] mb-[-40px]"
        />

        {/* Heading */}
        <p className="z-10 whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter text-white">
          Talk to Swap AI - Smarter, <br /> Faster & Better
        </p>
        <p className="mt-3 text-gray-300">
          Make your custom topic and get prepared with Swap AI
        </p>

        {/* Button */}
      <Link to={"/topics"}>
        <div className="bg-green-800 mt-7 px-5 py-2 rounded-full font-semibold text-[20px] flex items-center gap-3">
          <BsStars size={25} /> Try it now
        </div>
      </Link>

        {/* Ripple Background */}
        <Ripple />
      </div>
    </div>
  );
};

export default Ai;
