import Card from './components/Card'
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);
  

  const Prophets = [
    { 
      id: 1,
      question: "Which prophet is known for his steadfastness and patience during trials and tribulations?", 
      answer: "Ayyub"
    },
    { 
      id: 2, 
      question: "Who is the prophet known for building the Kaaba in Mecca?", 
      answer: "Ibrahim"
    },
    { 
      id: 3, 
      question: "Which prophet was known for his wisdom and ruled over the Israelites?", 
      answer: "Dawud"
    },
    { 
      id: 4, 
      question: "Who is the prophet that led the Children of Israel out of Egypt?", 
      answer: "Musa"
    },
    { 
      id: 5, 
      question: "Which prophet is associated with the story of the Ark and the Great Flood?", 
      answer: "Nuh"
    },
    { 
      id: 6, 
      question: "Who is the prophet known for his miraculous birth and ability to speak in the cradle?", 
      answer: "Isa"
    },
    { 
      id: 7, 
      question: "Which prophet was swallowed by a big fish or whale and repented while inside?", 
      answer: "Yunus" 
    },
    { 
      id: 8, 
      question: "Who is considered the final prophet in Islam, known as the Seal of the Prophets?", 
      answer: "Muhammad(SAW)" 
    },
    { 
      id: 9, 
      question: "Which prophet is known for receiving the Psalms (Zabur)?", 
      answer: "Dawud"
    },
    { 
      id: 10, 
      question: "Who is the prophet known for his eloquent speeches and receiving the scriptures (Injil)?", 
      answer: "Isa"
    }
];

const Back = () => {
  if (count > 0) {
    setCount(count - 1);
    setFlip(false)
  }
}

const Next = () => {
  if (count < Prophets.length - 1) {
    setCount(count + 1);
    setFlip(false)
  }
}

return (
  <>
    <div className="bg-[url('https://images.alphacoders.com/841/84113.jpg')] bg-cover bg-center fixed inset-0 flex flex-col justify-center items-center text-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-red-400 font-bold font-serif mb-10">
              Islamic Prophets Trivia
            </h1>
            <h1 className="text-white mb-6 text-3xl">How good is your knoledge on the prophets?</h1>
            <h1 className="text-white mb-6 text-2xl">Number of Flashcards: 10</h1>
            <Card
              id={Prophets[count].id.toString()}
              question={Prophets[count].question}
              answer={Prophets[count].answer}
              flipped={flip}
              setFlip={setFlip}
            />
            <div className="mt-10 space-x-4">
              <button onClick={Back} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Back</button>
              <button onClick={Next} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Next</button>
            </div>
        </div>
    </div>
  </>
)
}

export default App
