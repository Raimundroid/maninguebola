// ============================================
// MatchesPage.jsx (with filtering using useMemo)
// ============================================
//
// This page displays all matches with filtering functionality.
// Users can filter by: All, Live, Finished, or Upcoming matches.
//
// KEY CONCEPT: useMemo
// ====================
//
// WHAT IS useMemo?
// ----------------
// useMemo is a React Hook that "remembers" (caches) the result of a calculation.
// It only recalculates when its dependencies change.
//
// WHY USE IT?
// -----------
// Filtering an array can be "expensive" (slow) if the array is large.
// Without useMemo, React would filter the matches array on EVERY render,
// even if nothing changed. This wastes processing power.
//
// With useMemo, React says: "I'll only filter again if 'matches' or
// 'activeFilter' actually changes. Otherwise, I'll use the cached result."
//
// SYNTAX:
// -------
// const result = useMemo(() => {
//   // expensive calculation here
//   return calculatedValue;
// }, [dependency1, dependency2]); // Only recalculate when these change
//
// WHEN TO USE useMemo:
// --------------------
// 1. Filtering or sorting large arrays
// 2. Complex calculations that don't need to run on every render
// 3. Creating objects/arrays that are passed to child components
//    (prevents unnecessary child re-renders)
//
// WHEN NOT TO USE:
// ----------------
// - Simple calculations (the overhead of useMemo might be worse)
// - Values that change on every render anyway

import { useState, useMemo } from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import FilterButtons from "../../components/atoms/filterButtons/FilterButtons";
import MatchesGrid from "../../components/MatchesGrid/MatchesGrid";
import "./MatchesPage.css";

// Define filter options as a constant outside the component
// This prevents recreating the array on every render
const MATCH_FILTERS = [
  { value: "all", label: "Todos" }, // All matches
  { value: "live", label: "Ao Vivo" }, // Currently playing
  { value: "finished", label: "Realizados" }, // Finished/completed
  { value: "upcoming", label: "Próximos" }, // Future matches
  { value: "exemplo", label: "Exemplo" },
];

const MatchesPage = ({ matches }) => {
  // State to track which filter is currently selected
  // Default is 'all' (show all matches)
  const [activeFilter, setActiveFilter] = useState("all");

  // ============================================
  // useMemo EXPLAINED STEP BY STEP:
  // ============================================
  //
  // Step 1: React sees useMemo and checks if dependencies changed
  // Step 2: If [matches, activeFilter] are the same as last render:
  //         → Return the cached (memorized) result immediately
  //         → Skip the filtering code entirely
  // Step 3: If either dependency changed:
  //         → Run the function inside useMemo
  //         → Cache the new result
  //         → Return the new result
  //
  // This is especially helpful when:
  // - 'matches' array has hundreds of items
  // - Component re-renders for other reasons (parent updates, etc.)
  // - Filter hasn't changed, so why filter again?

  // This code only runs when 'matches' or 'activeFilter' changes
  const filteredMatches = useMemo(() => {
    // If 'all' is selected, return all matches (no filtering needed)
    if (activeFilter === "all") {
      return matches;
    }

    // Otherwise, filter matches where status matches the active filter
    // .filter() returns a NEW array with only items where the condition is true
    return matches.filter((match) => match.status === activeFilter);
  }, [matches, activeFilter]); // <-- DEPENDENCY ARRAY
  // ↑ These are the "dependencies" - values that, when changed,
  //   trigger recalculation. If you forget a dependency, you'll
  //   get stale (outdated) data!

  return (
    <div className="matches-page-container">
      {/* Page title badge */}
      <PageIndicator icon="📅" title="Todos os Jogos" />

      {/* Filter buttons */}
      {/* When user clicks a filter, setActiveFilter is called */}
      {/* This triggers a re-render, and useMemo recalculates filteredMatches */}
      <FilterButtons
        filters={MATCH_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Show matches or empty state */}
      {/* Ternary operator: condition ? ifTrue : ifFalse */}
      {filteredMatches.length > 0 ? (
        <MatchesGrid matches={filteredMatches} />
      ) : (
        <div className="empty-state">
          <p>Nenhum jogo encontrado para este filtro.</p>
        </div>
      )}
    </div>
  );
};

export default MatchesPage;
