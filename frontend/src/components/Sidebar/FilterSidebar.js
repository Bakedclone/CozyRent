import React, { useState } from 'react';

const FilterSidebar = ({ categories, onCategorySelect, onPriceRangeChange, onConditionChange }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); // Example initial price range
  const [condition, setCondition] = useState('');

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({ ...priceRange, [name]: parseInt(value) });
    onPriceRangeChange(priceRange); // Callback to parent component
  };

  const handleConditionChange = (event) => {
    const { value } = event.target;
    setCondition(value);
    onConditionChange(value); // Callback to parent component
  };

  return (
    <div className="sidebar">
      <h2>Search Categories</h2>
      <ul>
        {categories && categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategoryClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
      <div className="filters">
        <h3>Filters</h3>
        <div className="filter-section">
          <label>Price Range:</label>
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceRangeChange}
            placeholder="Min"
          />
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
            placeholder="Max"
          />
        </div>
        <div className="filter-section">
          <label>Condition:</label>
          <select value={condition} onChange={handleConditionChange}>
            <option value="">Select Condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
