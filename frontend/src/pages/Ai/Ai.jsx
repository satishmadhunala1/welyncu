import { Ripple } from "../../components/magicui/ripple";
import { FaBraille } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Lottie from "lottie-react";
import roboAnimation from "../../animations/robo.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Ai = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "I'm Swap AI, your intelligent study assistant!",
    "I can help you create custom topics for effective learning",
    "Ask me anything about your subjects and I'll explain it clearly",
    "I make studying smarter and more efficient with AI-powered insights"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background relative flex w-full flex-col items-center justify-center pt-5 px-4 sm:px-6 lg:px-8">
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#181818]" />
      
      {/* Navbar */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 bg-white/10 backdrop-blur-2xl rounded-xl px-4 sm:px-6 lg:px-7 py-3 sm:py-2">
        <div className="flex items-center gap-3">
          <FaBraille className="w-8 h-8 sm:w-10 sm:h-10" />
          <h2 className="font-bold text-xl sm:text-2xl lg:text-[25px]">Swap AI</h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end">
          <Link to={"/topics"} className="flex-1 sm:flex-none text-center">
            <button className="w-full sm:w-auto bg-green-700 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg shadow shadow-white/20 text-sm sm:text-[16px] lg:text-[17px] hover:bg-green-600 transition-colors">
              Clear Doubts
            </button>
          </Link>
          <Link to={"/interviewform"} className="flex-1 sm:flex-none text-center">
            <button className="w-full sm:w-auto bg-gray-700 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg shadow shadow-white/20 text-sm sm:text-[16px] lg:text-[17px] hover:bg-gray-600 transition-colors">
              Take Interview
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen w-full lg:max-w-6xl mx-auto flex flex-col items-center justify-center rounded-lg pb-20 md:pb-25 pt-8 sm:pt-12 lg:pt-16">

        {/* Animation with Thinking Bubble */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center mb-4 sm:mb-0 lg:mb-[-40px] gap-6 lg:gap-12">
          <div className="relative">
            <Lottie
              animationData={roboAnimation}
              loop={true}
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]"
            />
          </div>
          
          {/* Thinking Bubble */}
          <div className="relative lg:absolute lg:left-[100%] w-full max-w-sm lg:w-[280px] xl:w-[300px] bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
            {/* Message content */}
            <div className="text-sm sm:text-base text-gray-100 font-medium text-center lg:text-left">
              {messages[currentMessage]}
            </div>
            {/* Bubble tail */}
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 lg:block hidden">
              <div className="w-4 h-4 bg-white/10 backdrop-blur-sm transform rotate-45"></div>
            </div>
            {/* Mobile tail */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 lg:hidden block">
              <div className="w-4 h-4 bg-white/10 backdrop-blur-sm transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center px-2 sm:px-4 mt-6 lg:mt-0">
          <h1 className="z-10 whitespace-pre-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[45px] sm:leading-[55px] md:leading-[65px] lg:leading-[70px]">
            Talk to Swap AI - <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Smarter,
            </span>{" "}
            <br className="md:hidden" />
            Faster & Better
          </h1>
          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base lg:text-lg px-2 sm:px-0 max-w-2xl mx-auto">
            Make your custom topic and get prepared with Swap AI
          </p>
        </div>

        {/* Button */}
        <Link to={"/topics"} className="mt-6 sm:mt-8">
          <div className="bg-green-800 hover:bg-green-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg sm:text-xl flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/25 transform hover:scale-105">
            <BsStars className="w-6 h-6 sm:w-7 sm:h-7" />
            <span>Try it now</span>
          </div>
        </Link>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 w-full max-w-4xl px-4">
          {[
            {
              title: "Instant Answers",
              desc: "Get immediate responses to your questions",
              icon: "⚡"
            },
            {
              title: "24/7 Available",
              desc: "Always ready to help you learn",
              icon: "🌙"
            },
            {
              title: "Personalized Learning",
              desc: "Tailored explanations for your level",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-white text-sm sm:text-base lg:text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ripple Background */}
      <div className="hidden lg:flex">
          <Ripple />
      </div>
      </div>
      
      {/* Add custom animation for the floating effect */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0.5deg); }
            50% { transform: translateY(-5px) rotate(-0.5deg); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          @media (max-width: 1024px) {
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Ai;