import { useEffect, useState, useRef } from "react";
import useVapi from "../../hooks/useVapi";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import roboAnimation from "../../animations/aiblob.json";

export default function CompanionPage() {
  const { id } = useParams();
  const [companion, setCompanion] = useState(null);
  const [loading, setLoading] = useState(true);
  const messageEndRef = useRef(null);

  const { isSessionActive, conversation, toggleCall, isLoading, error } =
    useVapi(import.meta.env.VITE_VAPI_PUBLIC_KEY, companion);

  // Scroll to bottom of conversation
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  useEffect(() => {
    const fetchCompanion = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://sw-ai-m50t.onrender.com/api/companions/${id}`);
        if (!res.ok) throw new Error("Failed to fetch companion");

        const data = await res.json();
        console.log("Fetched Companion:", data); // Debug fetched data
        setCompanion(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanion();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-white text-xl">Loading companion...</div>
        </div>
      </div>
    );
  }

  if (!companion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-xl">
          <div className="text-red-400 text-5xl mb-4">⚠️</div>
          <div className="text-white text-xl mb-2">Companion not found</div>
          <p className="text-gray-400">
            The companion you're looking for doesn't exist or may have been
            removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-2 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 pt-4">
        <h1 className="text-transparent bg-clip-text bg-green-700 font-extrabold text-5xl md:text-6xl uppercase mb-2 tracking-wide">
          {companion.name}
        </h1>
        <p className="text-gray-300 text-lg md:text-[19px] max-w-2xl mx-auto">
          Your AI assistant specialized in -{" "}
          <span className="uppercase text-white font-semibold">
            {companion.subject}
          </span>
        </p>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col lg:flex-row gap-8 lg:max-w-7xl lg:mx-auto">
        {/* Left column - Animation and controls */}
        <div className="w-full flex flex-col">
          <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex-1 border border-gray-700/50 flex flex-col">
            {/* AI Avatar with speaking animation */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <Lottie
                  animationData={roboAnimation}
                  loop={true}
                  className="lg:w-[500px] h-[500px] mb-[-40px]"
                />
                <div className="absolute bottom-15 right-40">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      isSessionActive ? "bg-green-500" : "bg-gray-600"
                    } shadow-lg`}
                  >
                    {isSessionActive ? (
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-audio-wave"></div>
                        <div
                          className="w-1 h-4 bg-white rounded-full animate-audio-wave"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1 h-5 bg-white rounded-full animate-audio-wave"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <div
                          className="w-1 h-4 bg-white rounded-full animate-audio-wave"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                        <div
                          className="w-1 h-3 bg-white rounded-full animate-audio-wave"
                          style={{ animationDelay: "0.8s" }}
                        ></div>
                      </div>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Companion details */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-violet-900/30 px-4 py-2 rounded-full mb-3">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      isSessionActive
                        ? "bg-green-500 animate-pulse"
                        : "bg-amber-500"
                    }`}
                  ></div>
                  <span className="text-violet-300 font-semibold">
                    {companion.subject}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-4 text-gray-300 mt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm capitalize">
                      {companion.voice} {/* Changed from companion.gender to companion.voice */}
                    </span>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm capitalize">
                      {companion.language || "English"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Control button */}
            <button
              onClick={toggleCall}
              disabled={isLoading}
              className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform flex items-center justify-center gap-3 w-fit top-5 right-5 absolute ${
                isSessionActive
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-600/30"
                  : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-violet-600/30"
              } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-105 shadow-lg`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : isSessionActive ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  End Conversation
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Start Conversation
                </>
              )}
            </button>

            {/* Description */}
            <div className="mt-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
              <h3 className="text-violet-300 font-semibold mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 1a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                About {companion.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {companion.description ||
                  `Expert in ${companion.subject} ready to help you with any questions or topics you'd like to discuss.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500/90 text-white p-4 rounded-xl shadow-lg max-w-sm">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes audio-wave {
          0% { height: 3px; }
          25% { height: 8px; }
          50% { height: 4px; }
          75% { height: 7px; }
          100% { height: 3px; }
        }
        .animate-audio-wave {
          animation: audio-wave 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}