import React from "react";
import "./TableCaption.css";

const TableCaption = ({
  abbr1,
  text1,
  abbr2,
  text2,
  abbr3,
  text3,
  abbr4,
  text4,
  abbr5,
  text5,
  abbr6,
  text6,
  abbr7,
  text7,
  abbr8,
  text8,
  dash = "-",
}) => {
  return (
    <div className="standings-table-caption">
      <div className="caption-item">
        <span className="caption-abbr">{abbr1}</span>
        <span className="caption-dash">{dash}</span>
        <span className="caption-text">{text1}</span>
      </div>

      {/* Item : Render ONLY if abbrX is defined */}

      {abbr2 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr2}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text2}</span>
        </div>
      )}

      {abbr3 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr3}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text3}</span>
        </div>
      )}

      {abbr4 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr4}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text4}</span>
        </div>
      )}

      {abbr5 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr5}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text5}</span>
        </div>
      )}

      {abbr6 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr6}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text6}</span>
        </div>
      )}

      {abbr7 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr7}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text7}</span>
        </div>
      )}

      {abbr8 && (
        <div className="caption-item">
          <span className="caption-abbr">{abbr8}</span>
          <span className="caption-dash">{dash}</span>
          <span className="caption-text">{text8}</span>
        </div>
      )}
    </div>
  );
};

export default TableCaption;
// import React from "react";
// import "./TableCaption.css";

// // Now only accepts 'dash' and 'items'
// const StandingsTableCaption = ({ dash, items }) => {
//   // If no items are passed, return null to render nothing
//   if (!items || items.length === 0) {
//     return null;
//   }

//   return (
//     <div className="standings-table-caption">
//       {/* Use .map() to loop through the array of definitions */}
//       {items.map((item, index) => (
//         <div key={index} className="caption-item">
//           <span className="caption-abbr">{item.abbr}</span>
//           {/* Always render the dash */}
//           <span className="caption-dash">{dash}</span>
//           <span className="caption-text">{item.text}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StandingsTableCaption;
