// ============================================
// MatchesPage.jsx (with dual filtering: competition + status)
// ============================================

//PAGE GOALS:
// ─────────────────────────────────────
/**
 * This page displays all matches with filtering functionality.
 * Users can filter by: [competition filter] → [status filter]
 */

// NEW FEATURE: Competition Filter Row // [Thursday; April 09, 2026, Pande - Govuro]
// ─────────────────────────────────────
/**
 * A second row of filter buttons sits between the page title and the status filters. It lets the user narrow down matches by competition.
 * (e.g. "Pande Wafa-Wafa") before applying a status filter (Live, etc.).


// HOW THE TWO FILTERS INTERACT:

*  1. Competition filter runs FIRST  → "which matches do I care about?"
*  2. Status filter runs SECOND      → "within those, what state are they in?"

* This is a sequential (chained) filter pattern:
*  allMatches → [competition filter] → [status filter] → displayed matches


// DYNAMIC COMPETITION OPTIONS:

 Instead of hard-coding competition names, we derive them from the
* matches array itself using useMemo. This means:
*   - No manual updates needed when you add a new competition
*   - Options stay in sync with your actual data automatically

*
// MATCHES WITHOUT A 'competition' FIELD:
* ─────────────────────────────────────
* Some older match objects may not have a `competition` property.
* Those matches are always visible under "Todas as Competições"
* (the "all" option) but are hidden when a specific competition is selected — which is the most intuitive behaviour.
*/

/**
// KEY CONCEPT: useMemo
─────────────────────────────────────
─────────────────────────────────────

// WHAT IS useMemo?

* useMemo is a React Hook that "remembers" (caches) the result of a calculation.
* It only recalculates when its dependencies change.


// WHY USE IT?

* Filtering an array can be "expensive" (slow) if the array is large.
* Without useMemo, React would filter the matches array on EVERY render, even if nothing changed. This wastes processing power.

* With useMemo, React says: "I'll only filter again if 'matches' or 'activeFilter' actually changes. Otherwise, I'll use the cached result."


// SYNTAX:

 const result = useMemo(() => {
   // expensive calculation here
   return calculatedValue;
 }, [dependency1, dependency2]); // Only recalculate when these change


// WHEN TO USE useMemo:

* 1. Filtering or sorting large arrays
* 2. Complex calculations that don't need to run on every render
* 3. Creating objects/arrays that are passed to child components (prevents unnecessary child re-renders)


// WHEN NOT TO USE:

* - Simple calculations (the overhead of useMemo might be worse)
* - Values that change on every render anyway
*/

import { useState, useMemo } from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import FilterButtons from "../../components/atoms/filterButtons/FilterButtons";
import MatchesGrid from "../../components/MatchesGrid/MatchesGrid";
import "./MatchesPage.css";
import competitionsData from "../../data/competitionsData";

import { useSearchParams } from "react-router-dom";

// ─── Status filter options  ──────────────────────────────────────
// Define filter options as a constant outside the component
// This prevents recreating the array on every render
const MATCH_FILTERS = [
  { value: "all", label: "Todos" }, // All matches
  { value: "live", label: "Ao Vivo" }, // Currently playing
  { value: "finished", label: "Finalizados" }, // Finished/completed
  { value: "upcoming", label: "Próximos" }, // Future matches
  { value: "canceled", label: "Cancelados" }, // Canceled matches
];

// ─── Status priority for sorting ────────────────────────────────
// Define Priority Order (Lower number = Higher priority)
const statusPriority = {
  live: 1,
  upcoming: 2,
  finished: 3,
  canceled: 4,
};

// ─── Custom sort function ───────────────────────────────────────
// Custom sort function for matches based on status priority and chronology.
const matchSorter = (a, b) => {
  // 1. Compare Status Priority
  const priorityA = statusPriority[a.status] || 99;
  const priorityB = statusPriority[b.status] || 99;

  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  // 2. Statuses are the same - Apply Date & Time Logic
  // Combine date and time for precise chronological sorting
  const timeA = a.time || "00:00";
  const timeB = b.time || "00:00";
  const dateTimeA = new Date(`${a.date}T${timeA}`);
  const dateTimeB = new Date(`${b.date}T${timeB}`);

  // LOGIC:
  // Live/Upcoming: Ascending (Earliest first: A - B)
  // Finished/Canceled: Descending (Newest first: B - A)
  if (a.status === "live" || a.status === "upcoming") {
    return dateTimeA - dateTimeB;
  } else {
    return dateTimeB - dateTimeA;
  }
};

// ─── MatchIcon (used for the page indicator) ───────────────────────────────────────────────────
const MatchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height="18px"
    width="18px"
    fill="currentColor"
    stroke="currentColor"
    className={className}
  >
    <g>
      <path d="M0,71.442v369.116h512V71.442H0z M273.86,205.491c20.788,7.373,35.721,27.225,35.721,50.509s-14.933,43.137-35.721,50.509 V205.491z M35.721,190.512h47.628v130.977H35.721V190.512z M238.14,306.509c-20.788-7.373-35.721-27.225-35.721-50.509 c0-23.284,14.933-43.137,35.721-50.509V306.509z M238.14,168.494c-40.712,8.297-71.442,44.38-71.442,87.506 s30.729,79.208,71.442,87.506v61.332H35.721v-47.628h59.535c13.131,0,23.814-10.683,23.814-23.814V178.605 c0-13.131-10.683-23.814-23.814-23.814H35.721v-47.628H238.14V168.494z M476.279,321.488h-47.628V190.512h47.628V321.488z M476.279,154.791h-59.535c-13.131,0-23.814,10.683-23.814,23.814v154.791c0,13.131,10.683,23.814,23.814,23.814h59.535v47.628 H273.86v-61.332c40.712-8.297,71.442-44.38,71.442-87.506s-30.73-79.208-71.442-87.506v-61.332h202.419V154.791z"></path>
    </g>
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
{
  /* Ternary operator: condition ? ifTrue : ifFalse */
}
const MatchesPage = ({ matches }) => {
  // ─── URL-based initial state ──────────────────────────────────
  // 1. Hook to read the URL query parameters
  const [searchParams] = useSearchParams();

  // 2. Get the filter value from the URL, defaulting to 'all' if not present
  const urlFilter = searchParams.get("filter");

  // 3. Determine the initial filter state
  const initialFilter =
    urlFilter &&
    ["live", "finished", "upcoming", "canceled"].includes(urlFilter)
      ? urlFilter
      : "all";

  // ─── Filter states ─────────────────────────────────────────────────────────
  // State to track which filter is currently selected
  //  Use the determined initialFilter from the URL
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  /**
  // useMemo EXPLAINED STEP BY STEP:
  ─────────────────────────────────────
  ─────────────────────────────────────
 * Step 1: React sees useMemo and checks if dependencies changed

 * Step 2: If [matches, activeFilter] are the same as last render:
 *         → Return the cached (memorized) result immediately
 *         → Skip the filtering code entirely

 * Step 3: If either dependency changed:
 *         → Run the function inside useMemo
 *         → Cache the new result
 *         → Return the new result

 * This is especially helpful when:
 * - 'matches' array has hundreds of items
 * - Component re-renders for other reasons (parent updates, etc.)
 * - Filter hasn't changed, so why filter again?
  */
  //  ------------------------------------------------------

  // NEW: tracks which competition the user has selected.
  // Default is "all" which shows matches from every competition.
  const [activeCompetition, setActiveCompetition] = useState("all");

  /**
   * ─── Derive competition options dynamically ────────────────────────────────

  // HOW THIS WORKS:
  // ───────────────
  * We scan every match in the array, collect competition names, and build
  * the filter button list automatically.
  *
  * Set: a built-in JS structure that only stores UNIQUE values.
  * If three matches all have competition: "Pande Wafa-Wafa", the Set still
  * only holds that string once — no duplicates, no extra code needed.
  *
  * The result is an array like:
  *   [
  *     { value: "all",             label: "Todas" },
  *     { value: "Pande Wafa-Wafa", label: "Pande Wafa-Wafa" },
  *     // ...any other competition found in the data
  *   ]
  *
  * DEPENDENCY: only recalculates when the `matches` array itself changes
  * (e.g. after a data fetch). Changing the active filter does NOT trigger
  * this — that would be wasteful.
  */

  // This code only runs when 'matches' or 'activeFilter' changes
  // const competitionFilters = useMemo(() => {
  //   // Collect every unique, defined competition name from the matches
  //   const uniqueCompetitions = new Set(
  //     matches
  //       .map((match) => match.competition) // Extract the competition field
  //       .filter(Boolean),
  //   );

  //   // Always start with the "show all" option
  //   const allOption = { value: "all", label: "Todas" };

  //   // Convert each unique competition string into a filter button object
  //   const competitionOptions = [...uniqueCompetitions].map((name) => ({
  //     value: name,
  //     label: name,
  //   }));

  //   return [allOption, ...competitionOptions];
  // }, [matches]); // ← Only depends on the data, not the UI state
  const competitionFilters = useMemo(() => {
    const allOption = { value: "all", label: "Todas" };

    const options = competitionsData.map((comp) => ({
      value: comp.id,
      label: comp.name,
    }));

    return [allOption, ...options];
  }, []);

  /**
  // CHAIN LOGIC (Filter + Sort (chained)):
   ─────────────────────────────────────────────────────────────────────────
  * Step A — Competition filter:
  *   "all"         → keep every match
  *   specific name → keep only matches whose .competition matches

  * Step B — Status filter (applied to the result of Step A):
  *   "all"         → keep everything from Step A
  *   specific status → keep only matches whose .status matches

  * Step C — Sort the final list

  * DEPENDENCY ARRAY now includes activeCompetition as well as the original two. This ensures the list re-filters whenever either selector changes.
  */

  // //////////////////////////////////////////////////

  const filteredMatches = useMemo(() => {
    // ── A. Competition filter ──────────────────────────────────────────────
    const byCompetition =
      activeCompetition === "all"
        ? matches
        : matches.filter((match) => match.competitionId === activeCompetition);

    // ── B. Status filter (runs on the already-competition-filtered list) ───
    const byStatus =
      activeFilter === "all"
        ? byCompetition
        : byCompetition.filter((match) => match.status === activeFilter);

    // ── C. Sort and return ─────────────────────────────────────────────────
    /**
     * We sort a COPY of the array using .slice() to ensure
     * we don't modify the original 'matches' array or the filtered result
     * before it's returned.
     */
    return byStatus.slice().sort(matchSorter);
  }, [matches, activeCompetition, activeFilter]); // ← 3 dependencies now
  // ↑ These are the "dependencies" - values that, when changed,
  //   trigger recalculation. If you forget a dependency, you'll
  //   get stale (outdated) data!

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="matches-page-container">
      {/* Page title badge */}
      {/* 📅 */}
      <PageIndicator icon=<MatchIcon /> title="Jogos" />

      {/* ── NEW: Competition filter row ──────────────────────────────────────
          Shown ONLY when there is at least one competition in the data.
          If no match has a 'competition' field, this row stays hidden —
          no empty or single-option bar cluttering the UI.
      ─────────────────────────────────────────────────────────────────────── */}
      {competitionFilters.length > 1 && (
        <FilterButtons
          filters={competitionFilters}
          activeFilter={activeCompetition}
          onFilterChange={(newCompetition) => {
            setActiveCompetition(newCompetition);
            // Optional UX improvement: reset status filter to "all" whenever
            // the user switches competition, so they always see the full
            // picture of the newly selected competition first.
            setActiveFilter("all");
          }}
        />
      )}

      {/* ── Status filter row ───────────────────────────────────
          Filters within whichever competition is currently selected.

          * When user clicks a filter, setActiveFilter is called
          * This triggers a re-render, and useMemo recalculates filteredMatches
      ─────────────────────────────────────────────────────────────────────── */}
      <FilterButtons
        filters={MATCH_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Show matches or empty state */}
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
