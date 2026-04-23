// ============================================
// PageIndicator.jsx
// ============================================
// A badge that shows the current page title
// Props:
//   - icon: emoji or icon string
//   - title: page title text

import React from "react";
import "./PageIndicator.css";

const PageIndicator = ({ icon, title }) => {
  return (
    <div className="badge-container">
      <div className="badge">
        {icon} {title}
      </div>
    </div>
  );
};
{
}

export default PageIndicator;
