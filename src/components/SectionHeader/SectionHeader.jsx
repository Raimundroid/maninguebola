// ============================================
// SectionHeader.jsx
// ============================================
// A header for content sections with optional "View all" link
// Props:
//   - title: the section title text
//   - linkText: optional text for the link (e.g., "Ver todos")
//   - onLinkClick: optional function to call when link is clicked

import { Link } from "react-router-dom";
import "./SectionHeader.css";

const SectionHeader = ({ title, linkTo, linkText, onLinkClick }) => {
  return (
    <div className="section-header-container">
      <h2 className="title">{title}</h2>

      {/* Only render link if linkText is provided */}
      {linkText && (
        <Link
          to={linkTo}
          className="link"
          onClick={
            (/*e*/) => {
              // e.preventDefault(); // Prevent page navigation
              onLinkClick?.(); // Call handler if it exists (optional chaining)
            }
          }
        >
          {linkText} →
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
