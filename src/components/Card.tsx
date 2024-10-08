import React, { useState } from 'react';

interface CardProps {
  id: string;
  question: string;
  answer: string;
  flipped: boolean;
  setFlip: (flip: boolean) => void;
}

const Card = (props: CardProps) => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [inputColor, setInputColor] = useState('border');

  const flip = () => {
    props.setFlip(!props.flipped);
  }

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  }

  const handleSubmit = () => {
    if (guess.toLowerCase() === props.answer.toLowerCase()) {
      setFeedback('Correct!');
      setInputColor('border-green-500');
    } else {
      setFeedback('Incorrect!');
      setInputColor('border-red-500');
    }
  }

  return (
    <div>
      <div 
        className="flex flex-col items-center justify-center bg-gray-500 border rounded-lg shadow-lg p-10 w-full max-w-2xl h-80 cursor-pointer transition-transform transform hover:scale-105" 
        onClick={flip}
      >
        <p className="font-bold font-serif text-4xl text-pink-500 mb-4">{props.id}</p>
        {props.flipped ? (
          <p className="text-2xl text-center font-serif">{props.answer}</p>
        ) : (
          <p className="text-2xl text-center font-serif">{props.question}</p>
        )}
      </div>
      {!props.flipped && (
        <div className="mt-4">
          <input 
            type="text" 
            value={guess} 
            onChange={handleGuessChange} 
            className={`border rounded p-2 w-full ${inputColor}`}
            placeholder="Enter your guess"
          />
          <button 
            onClick={handleSubmit} 
            className="mt-2 bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
          {feedback && <p className="mt-2">{feedback}</p>}
        </div>
      )}
    </div>
  )
}

export default Card;