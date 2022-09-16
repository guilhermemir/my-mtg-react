import './App.css';
import SearchForm from './components/SearchForm';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
          "7c4c4a0f-0ee4-422d-b807-f64b77dd6831",
          "9dfd36c5-a484-4973-873c-b6a433da8e7a",
          "86bc07c6-2ba7-41f8-90ab-f9bbac86dd08",
          "244bdd06-bb74-4030-b343-9a764f0f2462"
    ])
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        My MTG
      </h1>

      <SearchForm />

      <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-gray-200">
        <div className='grid grid-cols-2 gap-3'>
          { cards.map(scryfallId => <Card scryfallId={scryfallId} /> ) }
        </div>
      </div>
    </>
  );
}

export default App;
