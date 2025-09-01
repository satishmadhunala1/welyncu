import React, { useState, useEffect } from 'react';

const TicTacToe = ({ onGameComplete }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerNext, setIsPlayerNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [scores, setScores] = useState({ player: 0, ai: 0, draws: 0 });
  const [gameHistory, setGameHistory] = useState([]);
  const [playerSymbol, setPlayerSymbol] = useState('X');
  const [aiSymbol, setAiSymbol] = useState('O');
  const [difficulty, setDifficulty] = useState('hard'); // easy, medium, hard
  const [gameMode, setGameMode] = useState('ai'); // ai, two-player
  const [thinking, setThinking] = useState(false);

  // Check for winner on each move
  useEffect(() => {
    const gameWinner = calculateWinner(board);
    if (gameWinner) {
      setWinner(gameWinner);
      const winnerType = gameWinner === playerSymbol ? 'player' : 'ai';
      setScores(prev => ({
        ...prev,
        [winnerType]: prev[winnerType] + 1
      }));
      
      if (onGameComplete) {
        onGameComplete({ 
          winner: gameWinner, 
          moves: gameHistory.length + 1,
          board: board 
        });
      }
    } else if (isBoardFull(board)) {
      setIsDraw(true);
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      
      if (onGameComplete) {
        onGameComplete({ 
          winner: 'Draw', 
          moves: gameHistory.length + 1,
          board: board 
        });
      }
    }
  }, [board]);

  // AI makes a move when it's their turn - FIXED: Added proper condition checks
  useEffect(() => {
    if (gameMode === 'ai' && !isPlayerNext && !winner && !isDraw && !thinking) {
      // Check if there are any moves left
      const emptySquares = getEmptySquares(board);
      if (emptySquares.length > 0) {
        setThinking(true);
        const timer = setTimeout(() => {
          makeAIMove();
          setThinking(false);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [isPlayerNext, winner, isDraw, gameMode, board]);

  // Calculate winner function
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Check if board is full (draw)
  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  // Get empty squares on the board
  const getEmptySquares = (squares) => {
    return squares.map((square, index) => square === null ? index : null)
                  .filter(val => val !== null);
  };

  // Minimax algorithm for AI
  const minimax = (squares, depth, isMaximizing, alpha = -Infinity, beta = Infinity) => {
    const winner = calculateWinner(squares);
    
    // If AI wins
    if (winner === aiSymbol) return { score: 10 - depth };
    // If player wins
    if (winner === playerSymbol) return { score: depth - 10 };
    // If it's a draw
    if (isBoardFull(squares)) return { score: 0 };
    
    const emptySquares = getEmptySquares(squares);
    
    if (isMaximizing) {
      let bestScore = -Infinity;
      let bestMove = null;
      
      for (let i = 0; i < emptySquares.length; i++) {
        const index = emptySquares[i];
        squares[index] = aiSymbol;
        const result = minimax(squares, depth + 1, false, alpha, beta);
        squares[index] = null;
        
        if (result.score > bestScore) {
          bestScore = result.score;
          bestMove = index;
        }
        
        alpha = Math.max(alpha, bestScore);
        if (beta <= alpha) break; // Alpha-beta pruning
      }
      
      return { score: bestScore, index: bestMove };
    } else {
      let bestScore = Infinity;
      let bestMove = null;
      
      for (let i = 0; i < emptySquares.length; i++) {
        const index = emptySquares[i];
        squares[index] = playerSymbol;
        const result = minimax(squares, depth + 1, true, alpha, beta);
        squares[index] = null;
        
        if (result.score < bestScore) {
          bestScore = result.score;
          bestMove = index;
        }
        
        beta = Math.min(beta, bestScore);
        if (beta <= alpha) break; // Alpha-beta pruning
      }
      
      return { score: bestScore, index: bestMove };
    }
  };

  // Make AI move based on difficulty
  const makeAIMove = () => {
    const emptySquares = getEmptySquares(board);
    if (emptySquares.length === 0 || winner || isDraw) return;

    let aiMove;
    
    if (difficulty === 'easy') {
      // Easy: Random move
      aiMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    } else if (difficulty === 'medium') {
      // Medium: 50% chance of best move, 50% chance of random move
      if (Math.random() > 0.5) {
        const result = minimax([...board], 0, true);
        aiMove = result.index;
      } else {
        aiMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      }
    } else {
      // Hard: Always best move (unbeatable)
      const result = minimax([...board], 0, true);
      aiMove = result.index;
    }

    // Make the move
    const newBoard = [...board];
    newBoard[aiMove] = aiSymbol;
    
    // Save move to history
    setGameHistory([...gameHistory, { board: [...board], player: aiSymbol }]);
    
    setBoard(newBoard);
    setIsPlayerNext(true);
  };

  // Handle click on a square
  const handleClick = (index) => {
    if (winner || board[index] || isDraw || thinking) return;
    if (gameMode === 'ai' && !isPlayerNext) return;

    const newBoard = [...board];
    newBoard[index] = isPlayerNext ? playerSymbol : aiSymbol;
    
    // Save move to history
    setGameHistory([...gameHistory, { 
      board: [...board], 
      player: isPlayerNext ? playerSymbol : aiSymbol 
    }]);
    
    setBoard(newBoard);
    
    if (gameMode === 'two-player') {
      setIsPlayerNext(!isPlayerNext);
    } else {
      setIsPlayerNext(false);
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerNext(playerSymbol === 'X');
    setWinner(null);
    setIsDraw(false);
    setGameHistory([]);
    setThinking(false);
  };

  // Reset scores and game
  const resetAll = () => {
    resetGame();
    setScores({ player: 0, ai: 0, draws: 0 });
  };

  // Change player symbol
  const togglePlayerSymbol = () => {
    const newPlayerSymbol = playerSymbol === 'X' ? 'O' : 'X';
    const newAiSymbol = aiSymbol === 'X' ? 'O' : 'X';
    
    setPlayerSymbol(newPlayerSymbol);
    setAiSymbol(newAiSymbol);
    setIsPlayerNext(newPlayerSymbol === 'X');
    resetGame();
  };

  // Change difficulty
  const changeDifficulty = (level) => {
    setDifficulty(level);
    resetGame();
  };

  // Change game mode
  const changeGameMode = (mode) => {
    setGameMode(mode);
    resetGame();
  };

  // Render a square
  const renderSquare = (index) => {
    const isWinningSquare = winner && calculateWinner(board) && 
      (board[index] === winner) && 
      [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(i => board[i] === winner).includes(index);
    
    return (
      <button
        onClick={() => handleClick(index)}
        disabled={winner || board[index] || isDraw || thinking || (gameMode === 'ai' && !isPlayerNext)}
        className={`w-20 h-20 md:w-24 md:h-24 text-4xl md:text-5xl font-bold border-2 
                  flex items-center justify-center transition-all duration-200
                  ${!board[index] && !winner && !isDraw && !thinking ? 'hover:bg-blue-50' : ''}
                  ${board[index] === 'X' ? 'text-blue-600' : 'text-red-600'}
                  ${isWinningSquare ? 'bg-green-200 animate-pulse' : 'bg-white'}
                  ${winner || isDraw ? 'opacity-90' : 'opacity-100'}
                  rounded-lg shadow-md`}
      >
        {board[index]}
      </button>
    );
  };

  // Get game status message
  const getStatusMessage = () => {
    if (winner) {
      return `Winner: ${winner === playerSymbol ? 'You!' : 'AI'}`;
    } else if (isDraw) {
      return "Game ended in a draw!";
    } else if (thinking) {
      return "AI is thinking...";
    } else {
      if (gameMode === 'ai') {
        return isPlayerNext ? 'Your turn' : "AI's turn";
      } else {
        return `Next player: ${isPlayerNext ? playerSymbol : aiSymbol}`;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Tic Tac Toe
        </h1>
        
        <p className="text-center text-gray-600 mb-6">
          {gameMode === 'ai' ? 'Play against AI' : 'Two Player Mode'}
        </p>
        
        {/* Game Settings */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Game Mode</label>
            <div className="flex gap-2">
              <button 
                onClick={() => changeGameMode('ai')} 
                className={`px-3 py-1 rounded ${gameMode === 'ai' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              >
                vs AI
              </button>
              <button 
                onClick={() => changeGameMode('two-player')} 
                className={`px-3 py-1 rounded ${gameMode === 'two-player' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              >
                2 Players
              </button>
            </div>
          </div>
          
          {gameMode === 'ai' && (
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Difficulty</label>
              <div className="flex gap-2">
                <button 
                  onClick={() => changeDifficulty('easy')} 
                  className={`px-3 py-1 rounded ${difficulty === 'easy' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
                >
                  Easy
                </button>
                <button 
                  onClick={() => changeDifficulty('medium')} 
                  className={`px-3 py-1 rounded ${difficulty === 'medium' ? 'bg-yellow-600 text-white' : 'bg-gray-300'}`}
                >
                  Medium
                </button>
                <button 
                  onClick={() => changeDifficulty('hard')} 
                  className={`px-3 py-1 rounded ${difficulty === 'hard' ? 'bg-red-600 text-white' : 'bg-gray-300'}`}
                >
                  Hard
                </button>
              </div>
            </div>
          )}
          
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Your Symbol</label>
            <button 
              onClick={togglePlayerSymbol} 
              className="px-3 py-1 bg-purple-600 text-white rounded"
            >
              {playerSymbol} (Click to change)
            </button>
          </div>
        </div>
        
        {/* Score Board */}
        <div className="flex justify-between mb-8 bg-gray-100 p-4 rounded-lg">
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-blue-600">{gameMode === 'ai' ? 'You' : 'Player 1'}</div>
            <div className="text-xl font-semibold">{scores.player}</div>
          </div>
          <div className="text-center flex-1 border-l border-r border-gray-300">
            <div className="text-2xl font-bold text-gray-700">Draws</div>
            <div className="text-xl font-semibold">{scores.draws}</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-red-600">{gameMode === 'ai' ? 'AI' : 'Player 2'}</div>
            <div className="text-xl font-semibold">{scores.ai}</div>
          </div>
        </div>
        
        {/* Game Status */}
        <div className={`text-xl font-semibold text-center mb-6 py-3 rounded-lg
          ${winner ? (winner === playerSymbol ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800') : 
            isDraw ? 'bg-yellow-100 text-yellow-800' : 
            thinking ? 'bg-blue-100 text-blue-800 animate-pulse' :
            'bg-blue-100 text-blue-800'}`}>
          {getStatusMessage()}
        </div>
        
        {/* Game Board */}
        <div className="grid grid-cols-3 gap-3 mb-8 bg-gray-800 p-3 rounded-lg mx-auto" style={{ maxWidth: '20rem' }}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={resetGame}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 
                     rounded-lg font-semibold transition-colors duration-200 shadow-md"
          >
            New Game
          </button>
          <button
            onClick={resetAll}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 
                     rounded-lg font-semibold transition-colors duration-200 shadow-md"
          >
            Reset Scores
          </button>
        </div>
        
        {/* Game History */}
        {gameHistory.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Move History</h3>
            <div className="bg-gray-100 p-3 rounded-lg max-h-40 overflow-y-auto">
              {gameHistory.map((move, index) => (
                <div key={index} className="text-sm py-1 border-b border-gray-300 last:border-0">
                  Move {index + 1}: {move.player === playerSymbol ? 'You' : (gameMode === 'ai' ? 'AI' : 'Player 2')}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;