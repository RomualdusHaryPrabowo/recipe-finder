import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/api';

const SearchForm = ({ onSearch, onFilterByCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };
    
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category) {
      onFilterByCategory(category);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="search">Nama Resep</label>
        <input
          type="text"
          id="search"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Masukan nama resep..."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="category">Kategori Makanan </label>
        <select
          id="category"
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Semua Kategori</option>
          {categories.map(category => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      
      <button type="submit" className="btn">Cari</button>
    </form>
  );
};

export default SearchForm;