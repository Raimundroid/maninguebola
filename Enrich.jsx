// ===============================================
// 🔑 DATA TRANSFORMATION: LOOKUP LOGIC HERE (Once)
// ===============================================
// const getEnrichedMatches = (rawMatches, teamLookup) => {
//   return rawMatches.map((match) => {
//     // Resolve the Foreign Keys (IDs) to full Team objects
//     const homeTeamDetails = teamLookup[match.homeTeamId];
//     const awayTeamDetails = teamLookup[match.awayTeamId];

//     // Return the new, enriched match object
//     return { ...match, homeTeam: homeTeamDetails, awayTeam: awayTeamDetails };
//   });
// };

// // The fully enriched array that will be passed down
// const enrichedMatches = getEnrichedMatches(matchesData, teams);



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
const createLookup = (array, keyField = 'id') => {
  // reduce() goes through each item and builds up a new object
  return array.reduce((lookup, item) => {
    // Use the item's ID (or other key) as the property name
    // Example: lookup[1] = { id: 1, name: "Eagles" }
    lookup[item[keyField]] = item;
    return lookup;
  }, {}); // Start with an empty object {}
};

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
 *
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
      ...match,                              // Keep all original match data
      homeTeam: homeTeamDetails,             // Add: full home team object
      awayTeam: awayTeamDetails,             // Add: full away team object
      homeTeamStanding: homeTeamStanding,    // Add: home team standings
      awayTeamStanding: awayTeamStanding     // Add: away team standings
    };
  });
};

//==================================

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
 *     won: 10,
 *     drawn: 3,
 *     lost: 2,
 *     goalsFor: 32,
 *     goalsAgainst: 15,
 *     // ... etc
 *   }
 * }
 *
 * WHY? Now in TeamsPage you can do: team.standing.position
 * instead of finding the standing in a separate array!
 */
const getEnrichedTeams = (teams, standingsLookup) => {
  // Go through each team and add its standings
  return teams.map((team) => {
    // Look up this team's standings using its ID
    const standing = standingsLookup[team.id];

    // Return a new team object with standings included
    return {
      ...team,  // Keep all original team data (name, stadium, logo, etc.)
      // Add the standings data, or provide defaults if standings don't exist
      standing: standing || {
        // Default values if this team has no standings yet
        position: '-', //calculated
        points: 0, //calculated
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDiff: 0, //calculated
        form: []
      }
    };
  });
};

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
      ...player,        // Keep all original player data
      team: teamDetails // Add: full team object
    };
  });
};

// ===============================================
// 📊 HOW TO USE IN YOUR APP
// ===============================================

function App() {
  // Step 1: Get your raw data (from API, database, files, etc.)
  const teamsData = [...];           // Array of teams
  const matchesData = [...];         // Array of matches
  const playersData = [...];         // Array of players
  const calculatedStandings = [...]; // Array of standings (has teamId field)

  // ===============================================
  // Step 2: Create lookup objects (DO THIS ONCE!)
  // ===============================================
  // These are like fast dictionaries for finding data by ID

  // Team lookup: { 1: {team1 data}, 2: {team2 data}, ... }
  const teamLookup = createLookup(teamsData, 'id');

  // Standings lookup: { 1: {team1 standings}, 2: {team2 standings}, ... }
  // Note: standings use 'teamId' as the key, not 'id'!
  const standingsLookup = createLookup(calculatedStandings, 'teamId');

  // Player lookup: { 1: {player1 data}, 2: {player2 data}, ... }
  const playerLookup = createLookup(playersData, 'id');

  // ===============================================
  // Step 3: Enrich all your data (DO THIS ONCE!)
  // ===============================================
  // Now we add all the extra information to each item

  // Each team now has a .standing property
  const enrichedTeams = getEnrichedTeams(teamsData, standingsLookup);

  // Each match now has .homeTeam, .awayTeam, and standings
  const enrichedMatches = getEnrichedMatches(matchesData, teamLookup, standingsLookup);

  // Each player now has a .team property
  const enrichedPlayers = getEnrichedPlayers(playersData, teamLookup);

  // ===============================================
  // Step 4: Pass enriched data to your components
  // ===============================================
  // Now your components have everything they need!

  return (
    <BrowserRouter>
      <Routes>
        {/* Teams page can now access team.standing.position directly! */}
        <Route
          path="/equipas"
          element={<TeamsPage teams={enrichedTeams} />}
        />

        {/* Matches page can access match.homeTeam.name directly! */}
        <Route
          path="/jogos"
          element={<MatchesPage matches={enrichedMatches} />}
        />

        {/* Players page can access player.team.name directly! */}
        <Route
          path="/jogadores"
          element={<PlayersPage players={enrichedPlayers} />}
        />

        {/* Team detail page gets all the enriched data */}
        <Route
          path="/equipas/:id"
          element={
            <TeamDetailWrapper
              teams={enrichedTeams}
              matches={enrichedMatches}
              players={enrichedPlayers}
              standings={calculatedStandings}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// ===============================================
// 💡 EXAMPLE: HOW THIS HELPS YOUR COMPONENTS
// ===============================================

// ❌ BEFORE (without enrichment) - messy and slow!
function MatchCard({ match, teams, standings }) {
  // Have to search through arrays every time (slow!)
  const homeTeam = teams.find(t => t.id === match.homeTeamId);
  const awayTeam = teams.find(t => t.id === match.awayTeamId);
  const homeStanding = standings.find(s => s.teamId === match.homeTeamId);
  const awayStanding = standings.find(s => s.teamId === match.awayTeamId);

  return (
    <div>
      <span>{homeTeam?.name}</span>
      <span>{homeStanding?.position}</span>
      {/* ... */}
    </div>
  );
}

// ✅ AFTER (with enrichment) - clean and fast!
function MatchCard({ match }) {
  // Everything is already there! No searching needed!
  return (
    <div>
      <span>{match.homeTeam.name}</span>
      <span>{match.homeTeamStanding.position}</span>
      <span>{match.homeScore} - {match.awayScore}</span>
      <span>{match.awayTeam.name}</span>
      <span>{match.awayTeamStanding.position}</span>
    </div>
  );
}

// ✅ Teams page example
function TeamsPage({ teams }) {
  return (
    <div>
      {teams.map(team => (
        <div key={team.id}>
          <h3>{team.name}</h3>
          {/* Standings are right here on the team object! */}
          <p>Position: {team.standing.position}</p>
          <p>Points: {team.standing.points}</p>
          <p>Wins: {team.standing.won}</p>
        </div>
      ))}
    </div>
  );
}

// ✅ Players page example
function PlayerCard({ player }) {
  return (
    <div>
      <h4>{player.name}</h4>
      {/* Team info is right here on the player object! */}
      <p>Team: {player.team.name}</p>
      <img src={player.team.logo} alt={player.team.name} />
    </div>
  );
}


// 222222222
//========================================
//PROMPT: ...so i was thinking, if is it possible, to instead of adding each player who scores to this two keys:homeScorers: awayScorers: , i just provide the id of the player who scored.
// (some possible issues i notice: the players' ids are integers, it would make it near impossible to associate the id of the ones who score, and i currently do not a loooup for players + matches).

// for now do not provide any solution code, just explain the feasibility and if feasible, how would it be done.
//========================================

// RESPONSE:
// That's an excellent idea and is a much more robust and scalable data architecture than using comma-separated strings of names.

// Yes, it is highly feasible and is the recommended approach for handling relationships between data entities (like Players and Matches) in a normalized structure.

// ⚽ Feasibility and Implementation Overview
// Using player IDs in your matchesData is not only possible but is considered a best practice in data modeling (normalization). This prevents errors if a player's name changes, minimizes data duplication, and allows you to easily pull rich player data (like their photo, position, or jersey number) without changing your MatchCard component logic.

// 1. Data Structure Change (The Match object)
// You would change the match data structure from:

// JavaScript

// BEFORE (String-based)
{
    id: 2,
    homeScore: 3,
    awayScore: 2,
    homeScorers: "Miguel Santos (2), Tomás Ferreira", // ❌ Avoid this
    awayScorers: "Ricardo Matos, João Silva",        // ❌ Avoid this
}
// To a more normalized, ID-based array structure:

JavaScript

// AFTER (ID-based)
{
    id: 2,
    homeScore: 3,
    awayScore: 2,
    // List of Player IDs who scored for the home team
    // You can repeat IDs if a player scored multiple times
    homeScorerIds: [1, 1, 4], // Miguel Santos (ID 1) scored twice, Tomás Ferreira (ID 4) once
    // List of Player IDs who scored for the away team
    awayScorerIds: [101, 105], // Example IDs for away players
}
// Note on IDs: If your player IDs are sequential integers (like 1, 2, 3...) as shown in your mock data, they work perfectly fine. The key is that they are unique identifiers for the player object.

// 2. Implementation Steps (The Enrichment)
// The process will involve a new, small Data Enrichment step within your App function to look up the full player details based on the IDs.

// A. Create the Player Lookup
// You already have this: const playerLookup = createLookup(players, "id");

// This creates a fast dictionary that maps player ID to the full player object (e.g., playerLookup[4] gives you the object for "Tomás Ferreira").

// B. Modify getEnrichedMatches (The New Logic)
// You will update your existing getEnrichedMatches function to handle the new homeScorerIds and awayScorerIds fields.

// The new logic would be:

// Access the homeScorerIds array from the raw match data.

// Map over that array of IDs.

// For each ID, use the playerLookup to pull the full Player Object.

// Attach the resulting array of Player Objects (not just names!) to the enriched match object under a new key, e.g., homeScorers.

// JavaScript

// Conceptual Modification inside getEnrichedMatches
const getEnrichedMatches = (rawMatches, teamLookup, standingsLookup, playerLookup) => {
    return rawMatches.map((match) => {
        // ... existing logic for homeTeamDetails, awayTeamDetails, standings

        // NEW LOGIC: Enrich Home Scorers
        const enrichedHomeScorers = (match.homeScorerIds || []).map(playerId =>
            playerLookup[playerId] // Look up the full player object
        ).filter(player => player); // Filter out any undefined lookups (safety)

        // NEW LOGIC: Enrich Away Scorers
        const enrichedAwayScorers = (match.awayScorerIds || []).map(playerId =>
            playerLookup[playerId]
        ).filter(player => player);

        return {
            ...match,
            // ... existing homeTeam, awayTeam, standings
            homeScorers: enrichedHomeScorers, // Array of full Player Objects
            awayScorers: enrichedAwayScorers, // Array of full Player Objects
        };
    });
};
// C. Update the App Call
// You would need to pass the playerLookup into the getEnrichedMatches function in your App component:

// JavaScript

// BEFORE
// const enrichedMatches = getEnrichedMatches(matchesData, teamLookup, standingsLookup);

// AFTER
const enrichedMatches = getEnrichedMatches(
    matchesData,
    teamLookup,
    standingsLookup,
    playerLookup // <-- New argument passed
);
// 3. Display in MatchCard (The Component)
// Once the match is enriched, your MatchCard component receives an array of player objects (e.g., match.homeScorers), allowing you to build the list without any string parsing:

// JavaScript

// Inside the MatchCard.jsx component:
// Destructure the new arrays:
const { homeScorers, awayScorers, /* ...other props */ } = match;

// Inside the JSX rendering:
// The list is already an array of rich objects!
{homeScorers.map((scorer) => (
  // Now you have the full player name, ID, position, etc.
  <span key={scorer.id} className="scorer-name">
    {scorer.name}
    <span className="ball-icon">⚽</span>
  </span>
))}
// Conclusion
// This ID-based approach is significantly cleaner and gives your MatchCard component access to the full, rich player data immediately, making future updates (like adding player photos or jersey numbers to the card) trivial.