import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
        {flipped ? <p>{answer}</p> : <p>{question}</p>}
      </div>
    </div>
  );
};

export default Flashcard;
