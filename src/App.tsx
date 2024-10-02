import Card from './components/Card'
import { useState } from 'react';
import './App.css'

function App() {


  const [flip, setFlip] = useState(false);
  

  const Prophets = [
    { id:1, question: "Which prophet is known for his steadfastness and patience during trials and tribulations?", answer: "Ayyub (Job)" },
    { id: 2, question: "Who is the prophet known for building the Kaaba in Mecca?", answer: "Ibrahim (Abraham)" },
    { id: 3, question: "Which prophet was known for his wisdom and ruled over the Israelites?", answer: "Dawud (David)" },
    { id: 4, question: "Who is the prophet that led the Children of Israel out of Egypt?", answer: "Musa (Moses)" },
    { id: 5, question: "Which prophet is associated with the story of the Ark and the Great Flood?", answer: "Nuh (Noah)" },
    { id: 6, question: "Who is the prophet known for his miraculous birth and ability to speak in the cradle?", answer: "Isa (Jesus)" },
    { id: 7, question: "Which prophet was swallowed by a big fish or whale and repented while inside?", answer: "Yunus (Jonah)" },
    { id: 8, question: "Who is considered the final prophet in Islam, known as the Seal of the Prophets?", answer: "Muhammad" },
    { id:9, question: "Which prophet is known for receiving the Psalms (Zabur)?", answer: "Dawud (David)" },
    { id:10, question: "Who is the prophet known for his eloquent speeches and receiving the scriptures (Injil)?", answer: "Isa (Jesus)" }
  ];
  
  return (
    <>
      <h1>Knowledge on Islamic Prophets</h1>
      <h3>How well do you know the Islamic prophets?</h3>
      <div className="container">
        {Prophets.map((prophet, index) => (
          <Card key={index} question={prophet.question} answer={prophet.answer} flip={flip} setFlip={setFlip} />
        ))}
        </div>
    </>
  )
}

export default App
