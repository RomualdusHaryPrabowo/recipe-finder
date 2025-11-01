import React from 'react';
import { getRandomMeal } from '../services/api';

const RandomRecipeButton = ({ onRandomMeal }) => {
  const handleRandomMeal = async () => {
    const randomMeal = await getRandomMeal();
    if (randomMeal) {
      onRandomMeal(randomMeal);
    }
  };

  return (
    <button className="btn" onClick={handleRandomMeal}>
      Resep Acak
    </button>
  );
};

export default RandomRecipeButton;