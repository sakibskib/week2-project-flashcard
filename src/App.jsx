import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import './App.css';
import background from './assets/bgfire.jpg';

// Firefighting 10s and 18s data
const flashcardsData = [
  { question: "Firefighting 10: Keep informed on fire weather conditions and forecasts", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Know what your fire is doing at all times", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Base all actions on current and expected behavior of the fire", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Identify escape routes and safety zones, and make them known", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Post lookouts when there is possible danger", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Be alert. Keep calm. Think clearly. Act decisively", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Maintain prompt communication with your forces, your supervisor, and adjoining forces", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Give clear instructions and ensure they are understood", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Maintain control of your forces at all times", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 10: Fight fire aggressively, having provided for safety first", answer: "Standard Firefighting Orders" },
  { question: "Firefighting 18: Fire not scouted and sized up", answer: "Watch Out Situations" },
  { question: "Firefighting 18: In country not seen in daylight", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Safety zones and escape routes not identified", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Unfamiliar with weather and local factors influencing fire behavior", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Inadequate communication with your company or supervisor", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Constructing fireline without safe anchor point", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Building fireline downhill with fire below", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Attempting a frontal assault on the fire", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Unburned fuel between you and the fire", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Cannot see main fire, not in contact with anyone who can", answer: "Watch Out Situations" },
  { question: "Firefighting 18: On a hillside where rolling material can ignite fuel below", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Weather is getting hotter and drier", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Wind increases and/or changes direction", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Getting frequent spot fires across the line", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Terrain and fuels make escape to safety zones difficult", answer: "Watch Out Situations" },
  { question: "Firefighting 18: Taking a nap near the fireline", answer: "Watch Out Situations" }
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [guess, setGuess] = useState(''); // State for the user's guess
  const [feedback, setFeedback] = useState(''); // Feedback for correct/incorrect answer
  const [streak, setStreak] = useState(0); // Streak of correct answers

  const handleInputChange = (e) => {
    setGuess(e.target.value); // Update guess state on input change
  };

  const handleSubmit = () => {
    const currentCard = flashcardsData[currentCardIndex];
    if (guess.toLowerCase().trim() === currentCard.answer.toLowerCase().trim()) {
      setFeedback('Correct!');
      setStreak(streak + 1); // Increment streak on correct answer
    } else {
      setFeedback('Incorrect!');
      setStreak(0); // Reset streak on incorrect answer
    }
    setGuess(''); // Clear guess after submission
  };

  const handleNext = () => {
    setFeedback(''); // Clear feedback on navigation
    if (currentCardIndex < flashcardsData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevious = () => {
    setFeedback(''); // Clear feedback on navigation
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleShuffle = () => {
    setCurrentCardIndex(Math.floor(Math.random() * flashcardsData.length));
    setFeedback(''); // Clear feedback when shuffling
  };

  return (
    <div className="app">
      <h1>Firefighting 10s & 18s Flashcards</h1>
      <p>A study tool for learning firefighting safety rules and situations</p>
      <p>Total Cards: {flashcardsData.length}</p>

      <Flashcard
        question={flashcardsData[currentCardIndex].question}
        answer={flashcardsData[currentCardIndex].answer}
      />

      {/* Input for user guess */}
      <input 
        type="text" 
        value={guess} 
        onChange={handleInputChange} 
        placeholder="Enter your guess" 
      />
      <button onClick={handleSubmit}>Submit Guess</button>
      
      {/* Feedback about the guess */}
      <p>{feedback}</p>

      {/* Navigation buttons */}
      <button onClick={handlePrevious} disabled={currentCardIndex === 0}>Back</button>
      <button onClick={handleNext} disabled={currentCardIndex === flashcardsData.length - 1}>Next</button>
      <button onClick={handleShuffle}>Shuffle</button>

      {/* Display streak */}
      <p>Current Streak: {streak}</p>
    </div>
  );
};

export default App;
