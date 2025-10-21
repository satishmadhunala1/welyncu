import { useEffect, useRef, useState } from "react";
import { Ripple } from "../../components/magicui/ripple";
import { FaBraille } from "react-icons/fa";
import { FaMicrophoneLines } from "react-icons/fa6";
import { HiPhoneMissedCall } from "react-icons/hi";
import { FaChartBar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Vapi from "@vapi-ai/web";

const Interview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    role,
    level,
    techstack,
    type,
    questions: predefinedQuestions,
  } = location.state || {};
  const [isLoading, setIsLoading] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questions, setQuestions] = useState(predefinedQuestions || []);
  const [answers, setAnswers] = useState({});
  const [interviewId, setInterviewId] = useState(null);
  const [subtitles, setSubtitles] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [feedbackGenerated, setFeedbackGenerated] = useState(false);
  const vapiRef = useRef(null);

  useEffect(() => {
    if (!role || !level) {
      navigate("/interviewform");
    }

    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (error) {
          console.error("Error stopping Vapi:", error);
        }
      }
    };
  }, [role, level, navigate]);

  const initializeVapi = () => {
    const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);
    const conversationHistory = [];

    vapi.on("call-start", () => {
      setInterviewStarted(true);
      setIsLoading(false);
    });

    vapi.on("speech-start", () => {
      setIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setIsSpeaking(false);
    });

    vapi.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        conversationHistory.push({
          role: message.role,
          content: message.transcript
        });
        
        if (message.role === "assistant") {
          setCurrentQuestion(message.transcript);
          setSubtitles(message.transcript);

          setTimeout(() => {
            setSubtitles((prev) => (prev === message.transcript ? "" : prev));
          }, 5000);
        } else if (message.role === "user") {
          setAnswers((prev) => ({
            ...prev,
            [currentQuestion]: message.transcript,
          }));
          
          setSubtitles(message.transcript);
          setTimeout(() => {
            setSubtitles((prev) => (prev === message.transcript ? "" : prev));
          }, 3000);
        }
      }
    });

    vapi.on("call-end", () => {
      if (!isEnding) {
        localStorage.setItem('conversationHistory', JSON.stringify(conversationHistory));
        setInterviewCompleted(true);
      }
    });

    vapiRef.current = vapi;
    return vapi;
  };

  const startInterview = async () => {
    setIsLoading(true);

    try {
      const vapi = initializeVapi();

      await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID2, {
        model: {
          provider: "openai",
          model: "gpt-5",
          temperature: 0.7,
          systemPrompt:  ` You are a friendly, encouraging technical interviewer named Alex who specializes in ${role} positions at the ${level} level.
            
            Your personality:
            - Warm, supportive, and conversational
            - You sound like a colleague having a friendly chat
            - You provide positive reinforcement
            - You're patient and allow for thinking time
            - You adapt to the candidate's pace
            
            Tech stack focus: ${techstack}
            Question type focus: ${type}
            
            You will be asking these specific questions:
            ${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}
            
            Interview flow:
            1. Start with a warm, personalized greeting: "Hi there! I'm Alex. It's really great to meet you. Thanks for taking the time to practice this ${role} interview with me today!"
            
            2. Briefly explain the process: "I'll be asking you ${
              questions.length
            } questions focused on ${type.toLowerCase()} aspects of the role. This is a practice session, so feel free to think out loud or ask for clarification if needed."
            
            3. Ask the questions one by one, allowing time for answers.
            
            4. After each answer, provide encouraging feedback: 
               - "I like how you approached that!"
               - "That's a good way to think about it."
               - "Thanks for explaining your thought process so clearly."
            
            5. If they struggle, offer gentle guidance: "No worries at all. Would you like me to rephrase the question or give you a moment to think?"
            
            6. End the interview positively: "Well, that covers all our questions. You did a really great job today! I appreciate your thoughtful answers. I'll now generate some personalized feedback for you based on our conversation."
            
            Important: Speak naturally, use conversational language, and allow comfortable pauses. This should feel like a friendly chat, not an interrogation.
          `,
        },
        voice: {
          provider: "11labs",
          voiceId: "paula",
          stability: 0.4,
          similarityBoost: 0.8,
          speed: 1,
          style: 0.5,
          useSpeakerBoost: true,
        },
      });
    } catch (error) {
      console.error('Error starting interview:', error);
      setIsLoading(false);
      alert('Failed to start the interview. Please check your connection and try again.');
    }
  };

  const generateFeedback = async () => {
    setIsLoading(true);
    
    try {
      const interviewData = {
        role,
        level,
        techstack: Array.isArray(techstack) ? techstack : techstack.split(',').map(t => t.trim()),
        type,
        questions: questions.map((q, i) => ({
          question: q,
          answer: answers[q] || 'No answer provided',
          evaluation: ''
        }))
      };
      
      const response = await axios.post('https://sw-ai-m50t.onrender.com/api/interviews', interviewData);
      const savedInterview = response.data;
      setInterviewId(savedInterview._id);
      
      const feedbackResponse = await axios.post('https://sw-ai-m50t.onrender.com/api/feedback/generate', {
        interviewData: savedInterview
      });
      
      const feedback = feedbackResponse.data.data;
      
      await axios.put(`https://sw-ai-m50t.onrender.com/api/feedback/interview/${savedInterview._id}`, feedback);
      
      setFeedbackGenerated(true);
      
      navigate(`/feedback/${savedInterview._id}`, { 
        state: { interviewData: { ...savedInterview, ...feedback } }
      });
    } catch (error) {
      console.error('Error generating feedback:', error);
      setIsLoading(false);
      alert('We had trouble generating your feedback. Please try again.');
    }
  };

  const endInterview = async () => {
    if (vapiRef.current) {
      setIsEnding(true);
      try {
        await vapiRef.current.stop();
        setInterviewCompleted(true);
      } catch (error) {
        console.error('Error ending interview:', error);
        setIsEnding(false);
        alert('There was an issue ending the interview. Please try again.');
      }
    }
  };

  const leaveInterview = () => {
    if (vapiRef.current && interviewStarted) {
      endInterview();
    } else {
      navigate('/');
    }
  };

  if (!role || !level) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900/10 to-gray-950 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
          <FaBraille className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-400" />
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white text-center sm:text-left">
            {role} Interview
          </h1>
        </div>
        <div className="flex justify-center sm:justify-end">
          <p className="font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 bg-[#181537] rounded-lg text-white text-center">
            {type} • {level}
          </p>
        </div>
      </div>

      {/* Tech Stack Info */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 border border-gray-700">
        <p className="text-gray-300 text-sm sm:text-base text-center">
          Focus: <span className="text-green-400 font-semibold">{techstack}</span>
        </p>
        <p className="text-gray-400 text-xs sm:text-sm text-center mt-1">
          {questions.length} questions • {type.toLowerCase()} focus
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Microphone Section */}
        <div className="relative flex h-[200px] sm:h-[250px] lg:h-[300px] border border-gray-700 w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm">
          <div className="z-10 flex flex-col items-center justify-center">
            <FaMicrophoneLines className="text-4xl sm:text-5xl lg:text-6xl text-green-400 mb-2 sm:mb-3" />
            <p className="text-white font-semibold text-sm sm:text-base text-center">
              {isSpeaking ? "AI is speaking..." : "Ready for conversation"}
            </p>
            {isSpeaking && (
              <div className="flex space-x-1 mt-2">
                <div className="w-1 h-2 bg-green-400 rounded-full animate-audio-wave"></div>
                <div className="w-1 h-3 bg-green-400 rounded-full animate-audio-wave" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-1 h-4 bg-green-400 rounded-full animate-audio-wave" style={{ animationDelay: "0.4s" }}></div>
                <div className="w-1 h-3 bg-green-400 rounded-full animate-audio-wave" style={{ animationDelay: "0.6s" }}></div>
                <div className="w-1 h-2 bg-green-400 rounded-full animate-audio-wave" style={{ animationDelay: "0.8s" }}></div>
              </div>
            )}
          </div>
          <Ripple />
        </div>

        {/* User Profile Section */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-4 sm:p-6">
          <img
            src="/undertaker.jpg"
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-cover border-2 border-green-400"
            alt="User profile"
          />
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-white mt-3 sm:mt-4">Under Taker</p>
          <p className="text-gray-400 text-sm sm:text-base">(You)</p>
          <div className="mt-3 sm:mt-4 bg-gray-700/50 rounded-lg px-3 py-1">
            <p className="text-green-400 text-xs sm:text-sm font-medium">Candidate</p>
          </div>
        </div>
      </div>

      {/* Subtitles/Conversation Area */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 w-full rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 min-h-[80px] flex items-center justify-center">
        {subtitles ? (
          <p className="font-medium text-sm sm:text-base lg:text-[17px] text-white text-center leading-relaxed">
            {subtitles}
          </p>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base text-center">
            {interviewStarted 
              ? (isSpeaking ? "Alex is speaking..." : "Your response will appear here...") 
              : "Click 'Start Interview' to begin your practice session"
            }
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        {/* Leave/End Interview Button */}
        <button
          onClick={leaveInterview}
          disabled={isLoading}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto cursor-pointer transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
        >
          <HiPhoneMissedCall className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold text-white text-sm sm:text-base">
            {interviewStarted ? "End Interview" : "Leave"}
          </span>
        </button>

        {/* Start Interview Button */}
        {!interviewStarted && !interviewCompleted && (
          <button
            onClick={startInterview}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 disabled:bg-green-800 px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto cursor-pointer transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                <span className="font-semibold text-white text-sm sm:text-base">Starting...</span>
              </>
            ) : (
              <>
                <HiPhoneMissedCall className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-white text-sm sm:text-base">Start Interview</span>
              </>
            )}
          </button>
        )}

        {/* View Feedback Button */}
        {interviewCompleted && (
          <button
            onClick={generateFeedback}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto cursor-pointer transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                <span className="font-semibold text-white text-sm sm:text-base">Generating...</span>
              </>
            ) : (
              <>
                <FaChartBar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-white text-sm sm:text-base">View Feedback</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Status Messages */}
      <div className="mt-4 sm:mt-6 text-center">
        {interviewStarted && !interviewCompleted && (
          <p className="text-green-400 font-semibold text-sm sm:text-base">
            Interview in progress... Speak clearly and take your time!
          </p>
        )}
        
        {interviewCompleted && !isLoading && (
          <p className="text-green-400 font-semibold text-sm sm:text-base">
            Interview completed! Click "View Feedback" to see your results.
          </p>
        )}

        {isLoading && (
          <p className="text-gray-400 text-sm sm:text-base">
            Please wait while we process your request...
          </p>
        )}
      </div>

  

      <style>{`
        @keyframes audio-wave {
          0% { height: 2px; }
          25% { height: 6px; }
          50% { height: 3px; }
          75% { height: 5px; }
          100% { height: 2px; }
        }
        .animate-audio-wave {
          animation: audio-wave 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Interview;