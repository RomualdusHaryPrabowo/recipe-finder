import React from 'react';

const RecipeDetail = ({ meal, onClose }) => {
  if (!meal) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="recipe-detail">
      <button className="btn" onClick={onClose}>Menu Utama</button>
      
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      
      <h2>{meal.strMeal}</h2>
      
      <div className="recipe-info">
        <p><strong>Kategori:</strong> {meal.strCategory}</p>
        <p><strong>Negara:</strong> {meal.strArea}</p>
      </div>
      
      <div className="ingredients-list">
        <h3>Bahan-bahan</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div className="instructions-list">
        <h3>Instruksi</h3>
        <ol>
          {meal.strInstructions.split('\r\n').filter(step => step.trim() !== '').map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
      {meal.strYoutube && (
        <div className="video-container">
          <h3>Video Tutorial</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
            title={meal.strMeal}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;