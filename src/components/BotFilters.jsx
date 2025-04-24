import React from 'react';

function BotFilters({ sortBy, setSortBy, filterBy, setFilterBy, searchQuery, setSearchQuery }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search bots by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control mb-3"
      />

      <div className="d-flex justify-content-between">
        <div>
          <label className="me-2">Sort by:</label>
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">None</option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </div>

        <div>
          <label className="me-2">Filter class:</label>
          <select onChange={(e) => setFilterBy(e.target.value)} value={filterBy}>
            <option value="">All</option>
            <option value="Assault">Assault</option>
            <option value="Defender">Defender</option>
            <option value="Support">Support</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BotFilters;