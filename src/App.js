import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'; 
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FilterDropdown from './components/FilterDropdown';
import RandomRecipeButton from './components/RandomRecipeButton';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import { 
  searchMealsByName, 
  filterByCategory, 
  filterByArea, 
  getMealById 
} from './services/api';
import './styles/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (isLoggedIn) {
      loadRandomMeals();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const loadRandomMeals = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchMealsByName('chicken');
      setMeals(response.slice(0, 8));
    } catch (err) {
      setError('Failed to load recipes. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMealsByName(searchTerm);
      setMeals(results);
    } catch (err) {
      setError('Failed to search recipes. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const results = await filterByCategory(category);
      setMeals(results);
    } catch (err) {
      setError('Failed to filter recipes. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterByArea = async (area) => {
    setLoading(true);
    setError(null);
    try {
      const results = await filterByArea(area);
      setMeals(results);
    } catch (err) {
      setError('Failed to filter recipes. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomMeal = async (meal) => {
    setSelectedMeal(meal);
  };

  const handleMealClick = async (mealId) => {
    setLoading(true);
    setError(null);
    try {
      const meal = await getMealById(mealId);
      setSelectedMeal(meal);
    } catch (err) {
      setError('Failed to load recipe details. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDetail = () => {
    setSelectedMeal(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Rute untuk Halaman Login */}
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />

        {/* Rute untuk Halaman Utama */}
        <Route 
          path="/" 
          element={
            // Cek sudah login?
            isLoggedIn ? (
              // JIKA SUDAH: 
              <div className="App">
                <Header />
                <div className="container">
                  <SearchForm 
                    onSearch={handleSearch} 
                    onFilterByCategory={handleFilterByCategory} 
                  />
                  <div className="filter-container">
                    <FilterDropdown onFilterByArea={handleFilterByArea} />
                    <RandomRecipeButton onRandomMeal={handleRandomMeal} />
                  </div>
                  
                  {loading && <div className="loading">Loading resep...</div>}
                  {error && <div className="error-message">{error}</div>}
                  
                  {selectedMeal ? (
                    <RecipeDetail meal={selectedMeal} onClose={handleCloseDetail} />
                  ) : (
                    <div className="recipe-grid">
                      {meals.map(meal => (
                        <RecipeCard 
                          key={meal.idMeal} 
                          meal={meal} 
                          onClick={handleMealClick} 
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // JIKA BELUM:
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
