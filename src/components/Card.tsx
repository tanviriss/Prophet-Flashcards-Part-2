
import React from 'react';

interface CardProps {
  question: string;
  answer: string;
  flip: boolean;
  setFlip: (flip: boolean) => void;
}

const Card: React.FC<CardProps> = ({ question, answer, flip, setFlip }) => {

  const handleFlip = () => {
    setFlip(!flip);
  }
  
  return (
    <div onClick={handleFlip}>
      <h3>{question}</h3>
      <p>{answer}</p>
      
    </div>
  )
}

export default Card;
