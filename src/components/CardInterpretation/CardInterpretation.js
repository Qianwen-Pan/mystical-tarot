import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CardInterpretation = ({ cards }) => {
  const location = useLocation();
  const category = location.state?.category || 'decision'; // fallback if category is not provided
  const [interpretations, setInterpretations] = useState(null);

  useEffect(() => {
    const fetchInterpretations = async () => {
      const response = await fetch('/api/interpretations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cards, category }),
      });
      const data = await response.json();
      setInterpretations(data);
    };

    fetchInterpretations();
  }, [cards, category]);

  return (
    <div>
      <h2>Interpretations</h2>
      {interpretations ? (
        <div>{interpretations}</div>
      ) : (
        <p>Fetching interpretations...</p>
      )}
    </div>
  );
};

export default CardInterpretation;
