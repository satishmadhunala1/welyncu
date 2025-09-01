import React, { useState, useEffect } from 'react';
import { AvatarCircles } from './magicui/avatar-circles';
import { Highlighter } from './magicui/highlighter';
import { FaCrown } from 'react-icons/fa6';
import { HiMiniTrophy } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const FunGames = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const avatars = [
    { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
    { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
    { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
    { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
    { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
    { imageUrl: "https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://github.com/itsarghyadas" },
  ];

  const games = [
    { img: '/memory.png', name: 'Memory Match', path: '/memory-match' },
    { img: '/tic tac toe.jpg', name: 'Tic Tac Toe', path: '/tic-tac-toe' },
    { img: '/suduko.png', name: 'Sudoku Challenge', path: '/sudoku' },
    { img: '/zip.png', name: 'Zip Puzzle', path: '/zip-puzzle' }
  ];

  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", score: 2450, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { rank: 2, name: "Sarah Williams", score: 2320, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { rank: 3, name: "Michael Chen", score: 2180, avatar: "https://randomuser.me/api/portraits/men/29.jpg" },
    { rank: 4, name: "Emma Rodriguez", score: 2050, avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
    { rank: 5, name: "David Kim", score: 1920, avatar: "https://randomuser.me/api/portraits/men/22.jpg" }
  ];

  return (
    <div className="bg-[#1A1A1E] border border-gray-800 rounded-xl p-2 md:p-3 shadow-2xl shadow-purple-900/10">
      
      {/* Banner */}
      <div className='relative overflow-hidden rounded-xl'>
        <img src='/gamebanner.jpg' className='w-full h-[200px] object-cover rounded-xl transform transition-transform duration-700 hover:scale-105' />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 rounded-xl flex items-center p-6">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white mb-2">Challenge Your Mind</h2>
            <p className="text-gray-200 text-sm md:text-base">Play, compete, and climb the leaderboard. Exciting rewards await the champions!</p>
            <button className="mt-4 bg-yellow-600/40 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Join Competition
            </button>
          </div>
        </div>
        <AvatarCircles numPeople={99} avatarUrls={avatars} className="md:absolute mt-7 mb-2 ml-3 bottom-3 right-3" />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-[28px] font-barlow font-semibold text-gray-100 flex flex-wrap justify-center items-center mt-6 gap-2">
        <span>Fun</span>
        <Highlighter action="highlight" color="#87CEFA" className="px-2">Games</Highlighter>
        <span>For</span>
        <Highlighter color="#FF9800" className="px-2">You</Highlighter>
      </h2>

      {/* Game Grid */}
      <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {games.map((game, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 aspect-square">
            <img src={game.img} alt={game.name} className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110' />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-3">
              <h4 className="text-white font-medium text-sm">{game.name}</h4>
            </div>
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to={game.path}>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transform transition-transform group-hover:scale-105 shadow-lg">
                  Play Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-100 mb-6 pb-2 border-b border-gray-700 flex items-center">
          <HiMiniTrophy className="mr-2 text-yellow-500"/>
          Top Players Leaderboard
        </h3>

        <div className="bg-[#1A1A1E] rounded-xl p-1 backdrop-blur-sm border border-gray-700/30">
          {leaderboardData.map((player) => (
            <div 
              key={player.rank} 
              className={`relative flex items-center justify-between p-4 rounded-lg mb-2 transition-all duration-500 ${player.rank === 1 ? 'bg-gradient-to-r from-amber-900/20 to-yellow-900/10 border border-amber-500/30' : 'bg-gray-800/20 hover:bg-gray-700/30'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
              style={{ transitionDelay: `${player.rank * 100}ms` }}
            >
              {player.rank === 1 && (
                <FaCrown className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce text-yellow-500 text-2xl drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
              )}
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold ${
                  player.rank === 1 ? 'bg-yellow-500 text-yellow-900 shadow-lg shadow-yellow-500/30' :
                  player.rank === 2 ? 'bg-gray-400 text-gray-900 shadow-lg shadow-gray-400/30' :
                  player.rank === 3 ? 'bg-amber-700 text-amber-100 shadow-lg shadow-amber-700/30' : 'bg-gray-700 text-gray-300'
                }`}>
                  {player.rank}
                </div>
                <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full mr-3 border-2 border-gray-600" />
                <div>
                  <span className="text-gray-200 font-medium block">{player.name}</span>
                  <span className="text-gray-400 text-xs">Level {Math.floor(player.score/100) + 1}</span>
                </div>
              </div>
              <div className="bg-green-500/30 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {player.score.toLocaleString()} pts
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="flex items-center bg-gray-800/40 hover:bg-gray-700/60 text-gray-300 hover:text-white transition-all duration-300 py-2 px-5 rounded-lg border border-gray-700/50 group">
            View full leaderboard
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunGames;
