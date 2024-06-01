import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cards = [
  { id: 1, name: 'Card 1' },
  { id: 2, name: 'Card 2' },
  { id: 3, name: 'Card 3' },
  // Add all tarot cards
];

const CardDeck = ({ setCards }) => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);

  const selectCard = (card) => {
    if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
      if (selectedCards.length === 2) {
        setCards([...selectedCards, card]);
        
      }
    }
  };

  return (
    <div>
      <h2>Select Your Cards</h2>
      <button onClick={() => setSelectedCards([])}>Shuffle Deck</button>
      <div className="card-deck">
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => selectCard(card)}
            className="card"
          >
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
