// ============================================
// TeamsGrid.jsx
// ============================================
// Grid layout component that displays multiple team cards
//
// This component handles:
// - Converting teams data (object or array) into a displayable grid
// - Creating a responsive grid that adapts to screen size
// - Passing click handlers to individual team cards
//
// Props:
//   - teams: Can be EITHER:
//     * Object/dictionary: { eagles: {...}, lions: {...} }
//     * Array: [{...}, {...}]
//   - onTeamClick: function called when any team card is clicked
//                  receives the clicked team object as parameter

import React from "react";
import "./TeamsGrid.css";
import TeamCard from "../TeamCard/TeamCard.jsx";

const TeamsGrid = ({ teams, onTeamClick }) => {
  // ============================================
  // DATA TRANSFORMATION
  // ============================================
  // Convert teams to array format if it's not already an array
  // This is necessary because .map() only works on arrays, not objects

  // Check if teams is already an array using Array.isArray()
  const teamsArray = Array.isArray(teams)
    ? array // If it's an array, use it as-is
    : Object.values(teams); // If it's an object, convert to array of values

  // Example transformation:
  // Input object: { eagles: {id: "eagles", ...}, lions: {id: "lions", ...} }
  // After Object.values(): [ {id: "eagles", ...}, {id: "lions", ...} ]

  return (
    <div className="teams-grid">
      {/*
         MAP FUNCTION EXPLANATION:
         .map() iterates through each item in the array and returns a new array
         For each team in teamsArray, we create a TeamCard component

         Syntax: array.map((currentItem) => { return something })

         Example:
         [team1, team2, team3].map((team) => <TeamCard ... />)
         Returns: [<TeamCard team1 />, <TeamCard team2 />, <TeamCard team3 />]
       */}
      {teamsArray.map((team) => (
        <TeamCard
          // KEY PROP:
          // React needs a unique 'key' for each item in a list
          // This helps React efficiently update the UI when data changes
          // We use team.id because it's unique for each team
          key={team.id}
          // Pass the current team's data to the TeamCard component
          team={team}
          // Pass the click handler function down to TeamCard
          // When a card is clicked, this function will be called
          onClick={onTeamClick}
        />
      ))}
    </div>
  );
};

export default TeamsGrid;
