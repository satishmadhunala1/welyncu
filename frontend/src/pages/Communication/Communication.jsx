import Lottie from "lottie-react";
import roboAnimation from "../../animations/aiblob.json";

const Communication = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <p className="text-green-400 font-extrabold text-5xl md:text-6xl uppercase mb-2 tracking-wide">
          JIMMY
        </p>
        <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
          Your AI assistant specialized in React JS development
        </p>
      </div>

      <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl shadow-violet-900/30 w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-violet-300 font-semibold text-lg">React JS</p>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="h-1 w-1 rounded-full bg-gray-400"></div>
              <p className="text-gray-300 font-medium">Female</p>
              <div className="h-1 w-1 rounded-full bg-gray-400"></div>
              <p className="text-gray-300 font-medium">English</p>
            </div>
          </div>
          
          <button className="bg-violet-600 hover:bg-violet-500 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-600/30">
            Start Chat
          </button>
        </div>
        
        <div className="flex gap-2 mb-4 md:hidden justify-center">
          <p className="text-gray-300 font-medium">Female</p>
          <div className="h-1 w-1 rounded-full bg-gray-400 self-center"></div>
          <p className="text-gray-300 font-medium">English</p>
        </div>

        <div className="">
          <div className="h-48 flex items-center justify-center">
            <Lottie
              animationData={roboAnimation}
              loop={true}
              className="w-full h-full"
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="flex gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-2 w-2 rounded-full bg-gray-600"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;