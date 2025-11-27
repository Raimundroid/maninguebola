// ============================================
// MatchesGrid.jsx
// ============================================
// A responsive grid container that displays multiple MatchCards
// Props:
//   - matches: array of match objects to display

import MatchCard from "../MatchCard/MatchCard";
import "./MatchesGrid.css";

const MatchesGrid = ({ matches }) => {
  return (
    <div className="matches-grid">
      {/* Loop through matches array and render a MatchCard for each */}
      {/* 'key' is required by React to track items in lists efficiently */}
      {matches.map((match, index) => (
        <MatchCard key={match.id || index} match={match} />
      ))}
    </div>
  );
};

export default MatchesGrid;
