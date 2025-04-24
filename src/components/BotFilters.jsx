import React from 'react';

function BotFilters({ sortBy, setSortBy, filterBy, setFilterBy }) {
  return (
    <div className="d-flex justify-content-between mb-4">
      <div>
        <label>Sort by: </label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
      <div>
        <label>Filter class: </label>
        <select onChange={(e) => setFilterBy(e.target.value)} value={filterBy}>
          <option value="">All</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Support">Support</option>
        </select>
      </div>
    </div>
  );
}

export default BotFilters;