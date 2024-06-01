import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategorySelection = ({ setCategory }) => {
  const navigate = useNavigate();

  const handleSelection = (category) => {
    setCategory(category);
    // navigate('/card-deck');
  };

  return (
    <div>
      <h2>Select a Category</h2>
      <button onClick={() => handleSelection('decision')}>Decision Making</button>
      <button onClick={() => handleSelection('dream')}>Dream Interpretation</button>
    </div>
  );
};

export default CategorySelection;
