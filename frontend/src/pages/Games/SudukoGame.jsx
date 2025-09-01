import React, { useState, useEffect, useCallback } from 'react';

const SudokuGame = ({ onGameComplete }) => {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [initialBoard, setInitialBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [solution, setSolution] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [selectedCell, setSelectedCell] = useState({ row: -1, col: -1 });
  const [difficulty, setDifficulty] = useState('medium');
  const [gameStatus, setGameStatus] = useState('idle');
  const [timer, setTimer] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [hints, setHints] = useState(3);
  const [notesMode, setNotesMode] = useState(false);
  const [notes, setNotes] = useState(Array(9).fill().map(() => Array(9).fill().map(() => [])));
  const [isGenerating, setIsGenerating] = useState(false);

  // Generate a new Sudoku puzzle
  const generateSudoku = useCallback((difficultyLevel = difficulty) => {
    setIsGenerating(true);
    
    // Reset game state
    const emptyBoard = Array(9).fill().map(() => Array(9).fill(0));
    setBoard(emptyBoard);
    setInitialBoard(emptyBoard);
    setSolution(emptyBoard);
    setSelectedCell({ row: -1, col: -1 });
    setGameStatus('playing');
    setTimer(0);
    setMistakes(0);
    setHints(3);
    setNotes(Array(9).fill().map(() => Array(9).fill().map(() => [])));
    
    // Generate a complete solved board
    const solvedBoard = generateSolvedBoard();
    setSolution(solvedBoard.map(row => [...row]));
    
    // Create a puzzle by removing numbers based on difficulty
    const puzzle = createPuzzleFromSolved(solvedBoard, difficultyLevel);
    setBoard(puzzle.map(row => [...row]));
    setInitialBoard(puzzle.map(row => [...row]));
    
    setIsGenerating(false);
  }, [difficulty]);

  // Generate a solved Sudoku board
  const generateSolvedBoard = () => {
    const board = Array(9).fill().map(() => Array(9).fill(0));
    
    // Fill diagonal 3x3 boxes
    for (let i = 0; i < 9; i += 3) {
      fillBox(board, i, i);
    }
    
    // Solve the rest of the board
    solveSudoku(board);
    return board;
  };

  // Fill a 3x3 box with random numbers
  const fillBox = (board, row, col) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // Shuffle the numbers array
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[row + i][col + j] = numbers[i * 3 + j];
      }
    }
  };

  // Solve Sudoku using backtracking
  const solveSudoku = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidPlacement(board, row, col, num)) {
              board[row][col] = num;
              
              if (solveSudoku(board)) {
                return true;
              }
              
              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  // Check if a number can be placed at given position
  const isValidPlacement = (board, row, col, num) => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
    }
    
    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false;
    }
    
    // Check 3x3 box
    const boxRowStart = Math.floor(row / 3) * 3;
    const boxColStart = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRowStart + i][boxColStart + j] === num) return false;
      }
    }
    
    return true;
  };

  // Create a puzzle from a solved board by removing numbers
  const createPuzzleFromSolved = (solvedBoard, difficultyLevel) => {
    const puzzle = solvedBoard.map(row => [...row]);
    
    // Determine how many cells to remove based on difficulty
    const cellsToRemove = {
      easy: 40,    // 41 cells remaining
      medium: 50,  // 31 cells remaining
      hard: 55,    // 26 cells remaining
      expert: 60   // 21 cells remaining
    };
    
    let removed = 0;
    const target = cellsToRemove[difficultyLevel];
    
    while (removed < target) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      
      if (puzzle[row][col] !== 0) {
        puzzle[row][col] = 0;
        removed++;
      }
    }
    
    return puzzle;
  };

  // Handle cell selection
  const handleCellSelect = (row, col) => {
    if (gameStatus !== 'playing' || initialBoard[row][col] !== 0) return;
    setSelectedCell({ row, col });
  };

  // Handle number input
  const handleNumberInput = (num) => {
    if (selectedCell.row === -1 || selectedCell.col === -1 || gameStatus !== 'playing') return;
    if (initialBoard[selectedCell.row][selectedCell.col] !== 0) return;
    
    if (notesMode) {
      // Toggle note
      const newNotes = JSON.parse(JSON.stringify(notes));
      const noteIndex = newNotes[selectedCell.row][selectedCell.col].indexOf(num);
      
      if (noteIndex === -1) {
        newNotes[selectedCell.row][selectedCell.col].push(num);
      } else {
        newNotes[selectedCell.row][selectedCell.col].splice(noteIndex, 1);
      }
      
      setNotes(newNotes);
    } else {
      // Place number
      const newBoard = JSON.parse(JSON.stringify(board));
      newBoard[selectedCell.row][selectedCell.col] = num;
      setBoard(newBoard);
      
      // Check if the move is correct
      if (num !== solution[selectedCell.row][selectedCell.col]) {
        setMistakes(mistakes + 1);
        if (mistakes + 1 >= 3) {
          setGameStatus('failed');
        }
      }
      
      // Check if the puzzle is completed
      if (isBoardComplete(newBoard)) {
        setGameStatus('completed');
        if (onGameComplete) {
          onGameComplete({ 
            time: timer, 
            mistakes: mistakes,
            difficulty: difficulty
          });
        }
      }
    }
  };

  // Check if the board is complete
  const isBoardComplete = (boardToCheck) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (boardToCheck[row][col] === 0 || boardToCheck[row][col] !== solution[row][col]) {
          return false;
        }
      }
    }
    return true;
  };

  // Handle hint
  const handleHint = () => {
    if (hints <= 0 || selectedCell.row === -1 || selectedCell.col === -1 || gameStatus !== 'playing') return;
    if (initialBoard[selectedCell.row][selectedCell.col] !== 0) return;
    
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[selectedCell.row][selectedCell.col] = solution[selectedCell.row][selectedCell.col];
    setBoard(newBoard);
    setHints(hints - 1);
    
    // Check if the puzzle is completed
    if (isBoardComplete(newBoard)) {
      setGameStatus('completed');
      if (onGameComplete) {
        onGameComplete({ 
          time: timer, 
          mistakes: mistakes,
          difficulty: difficulty
        });
      }
    }
  };

  // Handle clear cell
  const handleClear = () => {
    if (selectedCell.row === -1 || selectedCell.col === -1 || gameStatus !== 'playing') return;
    if (initialBoard[selectedCell.row][selectedCell.col] !== 0) return;
    
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[selectedCell.row][selectedCell.col] = 0;
    setBoard(newBoard);
    
    const newNotes = JSON.parse(JSON.stringify(notes));
    newNotes[selectedCell.row][selectedCell.col] = [];
    setNotes(newNotes);
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  // Initialize game on component mount
  useEffect(() => {
    generateSudoku();
  }, []);

  // Render the Sudoku board
  const renderBoard = () => {
    return (
      <div className="grid grid-cols-9 gap-0 border-2 border-gray-800 mx-auto">
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => {
            const isSelected = selectedCell.row === rowIndex && selectedCell.col === colIndex;
            const isInitial = initialBoard[rowIndex][colIndex] !== 0;
            const isError = cell !== 0 && cell !== solution[rowIndex][colIndex];
            const boxTop = rowIndex % 3 === 0;
            const boxLeft = colIndex % 3 === 0;
            
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-bold cursor-pointer
                          ${isSelected ? 'bg-blue-200' : ''}
                          ${isInitial ? 'bg-gray-100 text-gray-800' : 'bg-white text-blue-700'}
                          ${isError ? 'text-red-600 bg-red-100' : ''}
                          ${boxTop ? 'border-t-2 border-gray-800' : 'border-t border-gray-300'}
                          ${boxLeft ? 'border-l-2 border-gray-800' : 'border-l border-gray-300'}
                          ${colIndex === 8 ? 'border-r-2 border-gray-800' : ''}
                          ${rowIndex === 8 ? 'border-b-2 border-gray-800' : ''}`}
                onClick={() => handleCellSelect(rowIndex, colIndex)}
              >
                {cell !== 0 ? cell : (
                  <div className="grid grid-cols-3 gap-0 w-full h-full text-xs text-gray-500">
                    {notes[rowIndex][colIndex].map(note => (
                      <div key={note} className="flex items-center justify-center">
                        {note}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ))}
      </div>
    );
  };

  // Render number pad
  const renderNumberPad = () => {
    return (
      <div className="grid grid-cols-5 gap-2 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <button
            key={num}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white text-xl font-bold rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => handleNumberInput(num)}
          >
            {num}
          </button>
        ))}
        <button
          className={`w-10 h-10 sm:w-12 sm:h-12 text-xl font-bold rounded-lg transition-colors ${notesMode ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setNotesMode(!notesMode)}
          title="Notes Mode"
        >
          ...
        </button>
      </div>
    );
  };

  // Render control buttons
  const renderControls = () => {
    return (
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={handleHint}
          disabled={hints <= 0 || gameStatus !== 'playing'}
        >
          Hint ({hints})
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={handleClear}
          disabled={gameStatus !== 'playing'}
        >
          Clear
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          onClick={() => generateSudoku()}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'New Game'}
        </button>
      </div>
    );
  };

  // Render difficulty selector
  const renderDifficultySelector = () => {
    return (
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {['easy', 'medium', 'hard', 'expert'].map(level => (
          <button
            key={level}
            className={`px-3 py-1 rounded-full transition-colors ${difficulty === level ? 
              level === 'easy' ? 'bg-green-500 text-white' :
              level === 'medium' ? 'bg-yellow-500 text-white' :
              level === 'hard' ? 'bg-orange-500 text-white' :
              'bg-red-500 text-white' : 
              'bg-gray-200 text-gray-700'}`}
            onClick={() => {
              setDifficulty(level);
              generateSudoku(level);
            }}
            disabled={isGenerating}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Sudoku
        </h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold text-gray-700">
            Time: {formatTime(timer)}
          </div>
          <div className="text-lg font-semibold text-red-600">
            Mistakes: {mistakes}/3
          </div>
        </div>
        
        {renderDifficultySelector()}
        
        {gameStatus === 'completed' && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">
            <h3 className="text-xl font-bold">Congratulations!</h3>
            <p>You solved the puzzle in {formatTime(timer)} with {mistakes} mistakes.</p>
          </div>
        )}
        
        {gameStatus === 'failed' && (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-center">
            <h3 className="text-xl font-bold">Game Over</h3>
            <p>You made too many mistakes. Try again!</p>
          </div>
        )}
        
        {isGenerating ? (
          <div className="flex justify-center items-center h-80">
            <div className="text-xl text-gray-600">Generating puzzle...</div>
          </div>
        ) : (
          <>
            {renderBoard()}
            {renderNumberPad()}
          </>
        )}
        
        {renderControls()}
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Select a cell and use the number pad to fill in values.</p>
          <p>Toggle notes mode to add pencil marks.</p>
        </div>
      </div>
    </div>
  );
};

export default SudokuGame;