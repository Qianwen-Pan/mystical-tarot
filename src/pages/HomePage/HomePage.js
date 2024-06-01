import React, { useState } from 'react';
import CardDeck from '../../components/CardDeck/CardDeck';
import CardInterpretation from '../../components/CardInterpretation/CardInterpretation';
import CategorySelection from '../../components/CategorySelection/CategorySelection';

const HomePage = () => {
  const [category, setCategory] = useState(null);
  const [cards, setCards] = useState([]);

  return (
    <div>
      {!category && <CategorySelection setCategory={setCategory} />}
      {category && !cards.length && <CardDeck setCards={setCards} />}
      {cards.length === 3 && <CardInterpretation cards={cards} />}
      <h1>lalal</h1>
    </div>
  );
};

export default HomePage;
