import React from "react";
const SortBar = ({ onSort }) => {
    const handleSort = (criteria) => {
      // Call the onSort function with the selected sorting criteria
      onSort(criteria);
    };
    return (
      <div className="sort-bar">
        <h3>Sort by:</h3>
        <button onClick={() => handleSort('health')}>Health</button>
        <button onClick={() => handleSort('damage')}>Damage</button>
        <button onClick={() => handleSort('armor')}>Armor</button>
      </div>
    );
  }
  export default SortBar;