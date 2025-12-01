import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Hero from "./components/Hero/Hero.jsx";

import MatchesPage from "./pages/MatchesPage/MatchesPage.jsx";
import PlayersPage from "./pages/PlayersPage/PlayersPage.jsx";
import StandingsPage from "./pages/StandingsPage/StandingsPage.jsx";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage.jsx";
import TeamsPage from "./pages/TeamsPage/TeamsPage.jsx";
import TeamDetailPage from "./components/TeamDetailPage/TeamDetailPage.jsx";

import Footer from "./components/Footer/Footer.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop.jsx";
import "./App.css";

import {
  players,
  teams,
  standings,
  matchesData,
  statsData,
} from "./data/sampleData.js";

// ===============================================
// 🔑 DATA TRANSFORMATION: LOOKUP LOGIC HERE (Once)
// ===============================================
const getEnrichedMatches = (rawMatches, teamLookup) => {
  return rawMatches.map((match) => {
    // Resolve the Foreign Keys (IDs) to full Team objects
    const homeTeamDetails = teamLookup[match.homeTeamId];
    const awayTeamDetails = teamLookup[match.awayTeamId];

    // Return the new, enriched match object
    return { ...match, homeTeam: homeTeamDetails, awayTeam: awayTeamDetails };
  });
};

// The fully enriched array that will be passed down
const enrichedMatches = getEnrichedMatches(matchesData, teams);

// // Step 1: Convert the teams object into an array for easier mapping
// const teamsArray = Object.values(teams);

// // Step 2: Create a Standings Lookup Map for quick access (optional, but fast)
// const standingsMap = standings.reduce((map, item) => {
//   map[item.id] = item;
//   return map;
// }, {});

// // Step 3: ENRICH the teams with standing data
// const enrichedTeams = teamsArray.map((team) => {
//   const teamStandings = standingsMap[team.id] || {}; // Find the standing for this team

//   return {
//     ...team, // Basic team details (name, logo, abbr)
//     ...teamStandings, // Add all calculated stats (position, points, goalDiff, etc.)
//   };
// });

function App() {
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
      <ScrollToTop /> {/* This fixes all navigation scrolling */}
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Hero component - only on home page */}
                  <Hero />
                  <Homepage matches={enrichedMatches} stats={statsData} />
                </>
              }
            />
            <Route
              path="/jogos"
              element={<MatchesPage matches={enrichedMatches} />}
            />
            <Route
              path="/jogadores"
              element={<PlayersPage players={players} teams={teams} />}
            />
            <Route
              path="/classificacao"
              element={<StandingsPage standings={standings} />}
            />
            <Route path="/estatistica" element={<StatisticsPage />} />
            <Route path="/equipas" element={<TeamsPage teams={teams} />} />

            {/* Team detail page - shows at "/teams/eagles", "/teams/lions", etc.
                :id is a URL parameter - accessible via useParams() hook */}
            {/* <Route
              path="/equipas/:teamId"
              element={
                <TeamDetailPage
                  teams={teams}
                  players={players}
                  matches={enrichedMatches}
                  standings={standings}
                />
              }
            /> */}

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
