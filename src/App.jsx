import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Hero from "./components/Hero/Hero.jsx";

import MatchesPage from "./pages/MatchesPage/MatchesPage.jsx";
import PlayersPage from "./pages/PlayersPage/PlayersPage.jsx";
import StandingsPage from "./pages/StandingsPage/StandingsPage.jsx";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage.jsx";
import TeamsPage from "./pages/TeamsPage/TeamsPage.jsx";
import TeamDetailPage from "./components/TeamDetailPage/TeamDetailPage.jsx";

import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx";

import Footer from "./components/Footer/Footer.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop.jsx";
import "./App.css";

import PlayerDetailPage from "./pages/PlayerDetailPage/PlayerDetailPage.jsx";

import AboutPage from "./pages/AboutPage/AboutPage.jsx";

import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-MPT58VN5EM";

// Component to track page views
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with current path
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });

    console.log("Page view tracked:", location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
}

import playersData from "./data/playersData.js";
import teamsData from "./data/teamsData.js";
import standingsData from "./data/standingsData.js";
import matchesData from "./data/matchesData.js";
import statsData from "./data/statsData.js";

// import{
//   players,
//   teams,
//   standings,
//   matchesData,
//   statsData,
// } from "./data/sampleData.js";

// ===============================================
// 🔑 DATA ENRICHMENT FUNCTIONS
// ===============================================
// These functions take your raw data and add extra information to it
// Think of it like adding toppings to a pizza - the pizza is still there,
// but now it has everything you need in one place!

/**
 * Creates a lookup object (also called a dictionary or map)
 *
 * WHY? Finding items in an array is slow (you have to check each item)
 * A lookup object is super fast - you just use the ID as a key!
 *
 * Example input:  [{ id: 1, name: "Eagles" }, { id: 2, name: "Lions" }]
 * Example output: {
 *   1: { id: 1, name: "Eagles" },
 *   2: { id: 2, name: "Lions" }
 * }
 *
 * Now instead of: teams.find(t => t.id === 1)  // Slow!
 * You can do:     teamLookup[1]                 // Fast!
 */

// Define the Helper (Only for Arrays)
const createLookup = (array, keyField = "id") => {
  //reduce() goes through each item and builds up a new object

  if (!Array.isArray(array)) return {}; // Safety check

  return array.reduce((lookup, item) => {
    // Use the item's ID (or other key) as the property name
    // Example: lookup[1] = { id: 1, name: "Eagles" }
    lookup[item[keyField]] = item;
    return lookup;
  }, {}); // Start with an empty object {}
};

// const createLookup = (array, keyField = "id") => {
//   // reduce() goes through each item and builds up a new object
//   return array.reduce((lookup, item) => {
//     // Use the item's ID (or other key) as the property name
//     // Example: lookup[1] = { id: 1, name: "Eagles" }
//     lookup[item[keyField]] = item;
//     return lookup;
//   }, {}); // Start with an empty object {}
// };

//==================matches + teams + standings================

/**
 * Enriches matches with full team details and standings
 *
 * BEFORE: match = { homeTeamId: 1, awayTeamId: 2, score: "2-1" }
 * AFTER:  match = {
 *   homeTeamId: 1,
 *   awayTeamId: 2,
 *   score: "2-1",
 *   homeTeam: { id: 1, name: "Eagles", logo: "..." },      // Full team object!
 *   awayTeam: { id: 2, name: "Lions", logo: "..." },       // Full team object!
 *   homeTeamStanding: { position: 2, points: 33, ... },    // Full standings!
 *   awayTeamStanding: { position: 1, points: 38, ... }     // Full standings!
 * }
 *  *
 * WHY? Now your MatchCard component can directly access team.name, team.logo, etc.
 * without having to search through arrays or pass extra props!
 */

const getEnrichedMatches = (rawMatches, teamLookup, standingsLookup) => {
  // Go through each match and add extra information
  return rawMatches.map((match) => {
    // Look up the home team using its ID
    // Instead of: teams.find(t => t.id === match.homeTeamId)
    // We use:     teamLookup[match.homeTeamId]  (much faster!)
    const homeTeamDetails = teamLookup[match.homeTeamId];

    // Look up the away team using its ID
    const awayTeamDetails = teamLookup[match.awayTeamId];

    // Look up the home team's standings (position, points, etc.)
    const homeTeamStanding = standingsLookup[match.homeTeamId];

    // Look up the away team's standings
    const awayTeamStanding = standingsLookup[match.awayTeamId];

    // Return a new match object with all the original data PLUS the extra info
    // The ... (spread operator) copies all existing properties
    return {
      ...match, // Keep all original match data
      homeTeam: homeTeamDetails, // Add full home team object
      awayTeam: awayTeamDetails, // Add full away team object
      homeTeamStanding: homeTeamStanding, // Add home team standings
      awayTeamStanding: awayTeamStanding, // Add home away standings
    };
  });
};

//====================teams + standings==============

/**
 * Enriches teams with their standings data
 *
 * BEFORE: team = { id: 1, name: "Eagles", stadium: "National Stadium" }
 * AFTER:  team = {
 *   id: 1,
 *   name: "Eagles",
 *   stadium: "National Stadium",
 *   standing: {                    // Added!
 *     position: 2,
 *     points: 33,
 *     wins: 10,
 *     draws: 3,
 *     losses: 2,
 *     goalsFor: 32,
 *     goalsAgainst: 15,
 *     // ... etc
 *   }
 * }
 *
 * WHY? Now in TeamsPage you can do: team.standing.position
 * instead of finding the standing in a separate array!
 */

const getEnrichedTeams = (teamsArray, standingsLookup) => {
  // Go through each team and add its standings
  return teamsArray.map((team) => {
    // Look up this team's standings using its ID
    const standing = standingsLookup[team.id];

    // Return a new team object with standings included
    return {
      ...team, // Keep all original team data (name, stadium, logo, etc.)
      // Add the standings data, or provide defaults if standings don't exist
      standing: standing || {
        // Default values if this team has no standings yet
        position: "-", //calculated
        points: 0, //calculated
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDiff: 0, //calculated
        form: [],
      },
    };
  });
};

//====================players + teams==============

/**
 * Enriches players with their team details
 *
 * BEFORE: player = { id: 1, name: "João Silva", teamId: 1 }
 * AFTER:  player = {
 *   id: 1,
 *   name: "João Silva",
 *   teamId: 1,
 *   team: {                      // Added!
 *     id: 1,
 *     name: "Eagles",
 *     logo: "...",
 *     stadium: "...",
 *     // ... all team info
 *   }
 * }
 *
 * WHY? Now in PlayerCard you can do: player.team.name, player.team.logo
 * without searching for the team separately!
 */

const getEnrichedPlayers = (players, teamLookup) => {
  // Go through each player and add their team's full details
  return players.map((player) => {
    // Look up this player's team using the teamId
    const teamDetails = teamLookup[player.teamId];

    // Return a new player object with team details included
    return {
      ...player, // Keep all original player data
      team: teamDetails, // Add full team object
    };
  });
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics once when app loads
    // 🔴 REPLACE MEASUREMENT_ID with your actual ID
    ReactGA.initialize(MEASUREMENT_ID, {
      // Optional: enable debug mode during development
      // gaOptions: {
      //   debug_mode: true
      // }
    });

    // console.log("Google Analytics initialized");
  }, []);

  // ===============================================
  // Step 2: Create lookup objects (DO THIS ONCE!)
  // ===============================================
  // These are like fast dictionaries for finding data by ID

  // Team lookup: { 1: {team1 data}, 2: {team2 data}, ... }
  const teamLookup = teamsData;

  // Standings lookup: { 1: {team1 standings}, 2: {team2 standings}, ... }
  // // Note: standings use 'teamId' as the key, not 'id'!
  // const standingsLookup = createLookup(standings, "teamId");
  const standingsLookup = createLookup(standingsData, "id");

  // Player lookup: { 1: {player1 data}, 2: {player2 data}, ... }
  const playerLookup = createLookup(playersData, "id");

  // The playerLookup variable is unused, but that's perfectly acceptable given the current set of enrichment functions. If you later create a function like getMatchMOTM(playerLookup), then the variable would become necessary.

  // ===============================================
  // Step 3: Enrich all your data (DO THIS ONCE!)
  // ===============================================
  // Now we add all the extra information to each item

  //====================teams + standings==============

  // Convert the teams OBJECT into an ARRAY of team objects
  const teamsArray = Object.values(teamsData);

  // Each team now has a .standing property
  const enrichedTeams = getEnrichedTeams(teamsArray, standingsLookup);

  //==================matches + teams + standings================
  // Each match now has .homeTeam, .awayTeam, and standings
  const enrichedMatches = getEnrichedMatches(
    matchesData,
    teamLookup,
    standingsLookup
  );

  //====================players + teams==============
  // Each player now has a .team property
  const enrichedPlayers = getEnrichedPlayers(playersData, teamLookup);

  {
    /* ============================================
              ROUTES DEFINITION
              ============================================
              Each Route maps a URL path to a component.
              The component renders when the URL matches.

              path="/" → Home page (exact match)
              path="/matches" → Matches page
              path="/teams/:id" → Team detail (dynamic route)
  */
  }

  // ===============================================
  // Step 4: Pass enriched data to your components
  // ===============================================
  // Now your components have everything they need!
  return (
    // ============================================
    // PROVIDER HIERARCHY
    // ============================================
    // Providers must wrap the components that need them.
    // Order matters: outer providers are accessible to inner ones.
    //
    // ThemeProvider: Makes theme available everywhere
    // BrowserRouter: Makes routing work everywhere

    // <ThemeProvider>
    <BrowserRouter>
      {/* This component tracks every route change */}
      <PageViewTracker />
      <ScrollToTop /> {/* This fixes all navigation scrolling */}
      <div>
        <Navbar />

        <main>
          <Routes>
            {/* 🟢 CRITICAL: Define the dynamic route with ':id' */}
            <Route
              path="/jogadores/:playerId"
              element={
                <PlayerDetailPage
                  // players={players}
                  // matches={matchesData}
                  // teams={teams}
                  matches={enrichedMatches}
                  players={enrichedPlayers}
                />
              }
            />
            <Route
              path="/"
              element={
                <>
                  {/* Hero component - only on home page */}
                  <Hero />
                  <Homepage
                    matches={enrichedMatches}
                    /*matches={matchesData}*/ stats={statsData}
                  />
                </>
              }
            />
            <Route
              path="/jogos"
              element={
                <MatchesPage
                  matches={enrichedMatches}
                  /*matches={matchesData}*/
                />
              }
            />
            <Route
              path="/jogadores"
              element={
                <PlayersPage
                  players={enrichedPlayers} /*players={players} teams={teams}*/
                />
              }
            />
            <Route
              path="/classificacao"
              element={
                <StandingsPage
                  /*standings={enrichedTeams}*/ standings={standingsData}
                />
              }
            />
            <Route
              path="/estatisticas"
              element={
                <StatisticsPage
                  // players={players}
                  // teams={teams}
                  players={enrichedPlayers} //players + teams
                />
              }
            />
            <Route
              path="/equipas"
              element={<TeamsPage /*teams={teams}*/ teams={enrichedTeams} />}
            />
            {/* Team detail page - shows at "/teams/eagles", "/teams/lions", etc.
                :id is a URL parameter - accessible via useParams() hook */}
            <Route
              path="/equipas/:teamId"
              element={
                <TeamDetailPage
                  teams={enrichedTeams} //teams + standings
                  players={enrichedPlayers} //players + teams
                  matches={enrichedMatches} //matches + teams + standings
                  //standings={enrichedTeams}//not-needed
                />
              }
            />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route
              path="/politica-privacidade"
              element={<PrivacyPolicyPage />}
            />

            {/* 404 - Catch all unmatched routes */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
