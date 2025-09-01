import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryMatchGame.css';

const MemoryMatchGame = ({ onGameComplete }) => {
  const emojis = ['😺', '🐶', '🐘', '🦒', '🦁', '🐻', '🐰', '🦊'];
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();

  // Memoized shuffle function
  const shuffle = useCallback((array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Initialize game
  const initGame = useCallback(() => {
    const duplicatedEmojis = [...emojis, ...emojis];
    const shuffledCards = shuffle(duplicatedEmojis).map((emoji, index) => ({
      id: index,
      value: emoji,
      isFlipped: false,
      isMatched: false
    }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setTimer(0);
    setGameStarted(true);
    setIsGameActive(true);
    setGameCompleted(false);
  }, [emojis, shuffle]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isGameActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive]);

  // Check for match when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      
      // Prevent further clicks during evaluation
      setIsGameActive(false);
      
      setTimeout(() => {
        setMoves((prev) => prev + 1);
        
        if (card1.value === card2.value) {
          // Match found
          setCards((prev) =>
            prev.map((card) =>
              card.id === card1.id || card.id === card2.id
                ? { ...card, isMatched: true }
                : card
            )
          );
          setMatchedPairs((prev) => prev + 1);
        } else {
          // No match - flip back
          setCards((prev) =>
            prev.map((card) =>
              card.id === card1.id || card.id === card2.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }
        
        setFlippedCards([]);
        setIsGameActive(true);
      }, 800);
    }
  }, [flippedCards]);

  // Check for game completion
  useEffect(() => {
    if (matchedPairs === emojis.length && gameStarted) {
      setIsGameActive(false);
      setGameCompleted(true);
      
      // Calculate score with better formula
      const timeBonus = Math.max(300 - timer, 0);
      const movesBonus = Math.max(200 - moves, 0);
      const score = Math.max(500 + timeBonus + movesBonus, 100);
      
      if (onGameComplete) {
        onGameComplete({ 
          name: "Player", 
          score, 
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          moves,
          time: timer
        });
      }
    }
  }, [matchedPairs, emojis.length, gameStarted, onGameComplete, moves, timer]);

  const flipCard = (card) => {
    if (
      !isGameActive ||
      card.isFlipped ||
      card.isMatched ||
      flippedCards.length >= 2 ||
      flippedCards.some(c => c.id === card.id)
    ) {
      return;
    }
    
    setCards((prev) =>
      prev.map((c) =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      )
    );
    setFlippedCards((prev) => [...prev, card]);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="memory-game-container">
      <h2 className="game-title">Memory Match</h2>
      
      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Time:</span>
          <span className="stat-value">{formatTime(timer)}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Moves:</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Pairs:</span>
          <span className="stat-value">{matchedPairs}/{emojis.length}</span>
        </div>
      </div>
      
      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
            onClick={() => flipCard(card)}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="emoji">{card.value}</span>
              </div>
              <div className="card-back">
                <span>❓</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {gameCompleted && (
        <div className="game-completed">
          <h3>Congratulations!</h3>
          <p>You found all pairs in {moves} moves and {formatTime(timer)}</p>
          <p>Final Score: {Math.max(500 + Math.max(300 - timer, 0) + Math.max(200 - moves, 0), 100)}</p>
        </div>
      )}
      
      <div className="game-controls">
        <button
          className="btn btn-primary"
          onClick={initGame}
        >
          {gameStarted ? 'Restart Game' : 'Start Game'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/dashboard')}
        >
          Back to Games
        </button>
      </div>
    </div>
  );
};

export default MemoryMatchGame;