import React from "react";
import "./TableCaption.css";

// Now only accepts 'dash' and 'items'
const TableCaption = ({ dash = "-", items }) => {
  // If no items are passed, return null to render nothing
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className="standings-table-caption">
      {/* Use .map() to loop through the array of definitions */}
      {items.map((item, index) => (
        <div key={index} className="caption-item">
          <span className="caption-abbr">{item.abbr}</span>
          {/* Always render the dash */}
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TableCaption;
