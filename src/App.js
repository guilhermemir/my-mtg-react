import './App.css';
import SearchForm from './components/SearchForm';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
  const loadCards = () => {
    let loadedCards = JSON.parse(localStorage.getItem('cards'));
    if (loadedCards.length === 0) {
      loadedCards = [
        { id: 1, scryfallId: "7c4c4a0f-0ee4-422d-b807-f64b77dd6831", quantity: 1 },
        { id: 2, scryfallId: "86bc07c6-2ba7-41f8-90ab-f9bbac86dd08", quantity: 3 },
        { id: 3, scryfallId: "244bdd06-bb74-4030-b343-9a764f0f2462", quantity: 2 },
        { id: 4, scryfallId: "9dfd36c5-a484-4973-873c-b6a433da8e7a", quantity: 1 },
        { id: 5, scryfallId: "c5e92f14-776d-4fa6-b872-1acadca1e372", quantity: 5 },
      ];
    }

    return loadedCards;
  };

  const [cards, setCards] = useState(loadCards());

  // when cards change, save cards to local storage
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]);

  const updateCardQuantity = (id, quantity) => {
    id = parseInt(id);
    quantity = parseInt(quantity);

    if (quantity > 0) {
      setCards(
        cards.map(card => {
          if (card.id === id) {
            card.quantity = quantity;
          }
          return card;
        })
      );
    } else {
      deleteCard(id);
    }
  };

  const deleteCard = (id) => {
    setCards(
      cards.filter(card => card.id !== id)
    )
  };

  // // exemplo: addCard({ id: 6, scryfallId: "c5e92f14-776d-4fa6-b872-1acadca1e372", quantity: 5 })
  // const addCard = (card) => {
  //   setCards(
  //     [...cards, card]
  //   );
  // }

  return (
    <>
      <h1 className="flex text-3xl font-semibold justify-center m-4">
        My MTG
      </h1>

      <SearchForm />

      <div className="flex min-h-screen w-full flex-wrap content-center justify-center bg-gray-200">
        <div className="flex flex-wrap justify-center gap-3 p-4">
          { cards.map(cardData => <Card key={cardData.id} card={cardData} updateCardQuantity={updateCardQuantity} deleteCard={deleteCard} /> ) }
        </div>
      </div>
    </>
  );
}

export default App;
