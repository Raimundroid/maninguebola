// ============================================
// FilterButtons.jsx
// ============================================
// A group of buttons for filtering content
// Props:
//   - filters: array of filter options [{ value: 'all', label: 'Todos' }, ...]
//   - activeFilter: currently selected filter value (string)
//   - onFilterChange: function to call when user clicks a filter

import "./FilterButtons.css";

const FilterButtons = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons-container">
      {/*
        Map through each filter option and create a button
        .map() iterates through the filters array and returns a button for each
      */}
      {filters.map((filter) => (
        <button
          key={filter.value}
          // Conditionally add 'filter-button--active' class when this filter is selected
          // Template literal with ternary: if activeFilter matches, add the class
          className={`filter-button ${
            activeFilter === filter.value ? "filter-button--active" : ""
          }`}
          // When clicked, call the parent's onFilterChange function with this filter's value
          onClick={() => onFilterChange(filter.value)}
        >
          {/* Display the filter's label text (e.g., "Todos", "Casa", "Fora") */}
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
