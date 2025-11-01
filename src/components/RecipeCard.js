import React from 'react';

const RecipeCard = ({ meal, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(meal.idMeal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="recipe-card-content">
        <h3>{meal.strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;