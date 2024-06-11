import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import { LayoutGroup } from 'framer-motion';
import "./Library.scss";

const Library = () => {
  const [cards, setCards] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/cards")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <LayoutGroup>
      <div className="library">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isExpanded={expandedId === card.id}
            onClick={() =>
              setExpandedId(expandedId === card.id ? null : card.id)
            }
          />
        ))}
      </div>
      </LayoutGroup>
  );
};

export default Library;
