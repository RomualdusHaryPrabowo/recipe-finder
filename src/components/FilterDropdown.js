import React, { useState, useEffect } from 'react';
import { getAreas } from '../services/api';

const FilterDropdown = ({onFilterByArea }) => {
  const [selectedArea, setSelectedArea] = useState('');
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const areasData = await getAreas();
      setAreas(areasData);
    };
    
    fetchAreas();
  }, []);

  const handleAreaChange = (e) => {
    const area = e.target.value;
    setSelectedArea(area);
    if (area) {
      onFilterByArea(area);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor="area">Negara</label>
      <select
        id="area"
        className="form-control"
        value={selectedArea}
        onChange={handleAreaChange}
      >
        <option value="">Semua Negara</option>
        {areas.map(area => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;