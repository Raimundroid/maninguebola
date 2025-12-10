// import React from "react";
// import "./TeamDetailPage.css";
// import { useParams } from "react-router-dom";

// const TeamDetailPage = () => {
//   // Destructure the teamId from the URL params
//   const { teamId } = useParams();
//   return (
//     <div className="team-detail-page-container">
//       <h1>Hello!</h1>
//       <div>Team Detail Page for teamId: {teamId}</div>

//     </div>
//   );
// };

// export default TeamDetailPage;

//============WORKS BUT TOO BASIC===========
//=============================
//==============================
//=============================
//==============================
//=============================
//==============================//=============================
//==============================//=============================
//==============================//=============================
//==============================//=============================
//==============================//=============================
//==============================
// import React from "react";
// import { useParams } from "react-router-dom";
// import "./TeamDetailPage.css"; // Assuming you still have a CSS file for styling

// // 📚 Data Import: We import all necessary data structures.
// import { teams, players, standings, matchesData } from "../../data/sampleData";

// /**
//  * TeamDetailPage
//  * Displays detailed information for a single team, determined by the teamId in the URL.
//  * * NOTE: The data structure from sampleData.js has been adapted here.
//  * - teams is an OBJECT: { eagles: {...} } -> requires teams[teamId] lookup.
//  * - players, standings, matchesData are ARRAYS -> require .find() or .filter() lookup.
//  */

// const TeamDetailPage = () => {
//   // 1. Get the teamId from the URL (e.g., 'eagles', 'lions')
//   const { teamId } = useParams();

//   // --- Data Filtering based on teamId ---

//   // 1. Team Profile: Lookup directly in the 'teams' object
//   const team = teams[teamId];

//   // If the teamId doesn't exist, show an error message
//   if (!team) {
//     return (
//       <div className="team-detail-error">
//         <h1>❌ Equipa Não Encontrada</h1>
//         <p>
//           O ID da equipa "{teamId}" não corresponde a nenhuma equipa nos dados.
//         </p>
//       </div>
//     );
//   }

//   // 2. Standings/Stats: Find the detailed stats object for this team
//   // Note: 'standings' is already processed (includes points, goalDiff)
//   const teamStanding = standings.find((s) => s.id === teamId);

//   // 3. Squad/Players: Filter players belonging to this team
//   // Note: Player team reference is by NAME ("FC Eagles"), not ID. We must convert the ID to the Name.
//   const teamPlayers = players.filter((p) => p.team === team.name);

//   // 4. Matches: Filter matches involving this team
//   // Note: Match team references are by OBJECT, so we filter by the team object reference.
//   const teamMatches = matchesData.filter(
//     (m) => m.homeTeam.id === teamId || m.awayTeam.id === teamId
//   );

//   // --- Derived Metrics ---

//   // Calculate total goals scored by players on this team
//   const teamGoalsScored = teamPlayers.reduce((sum, p) => sum + p.goals, 0);

//   // Get the top 3 recent and upcoming matches
//   const upcomingMatches = teamMatches
//     .filter((m) => m.status === "upcoming")
//     .slice(0, 3);
//   const finishedMatches = teamMatches
//     .filter((m) => m.status === "finished")
//     .slice(0, 3);

//   // Sort players by goals for a simple top scorers list
//   const topScorers = [...teamPlayers]
//     .sort((a, b) => b.goals - a.goals)
//     .slice(0, 5);

//   // --- Component Render ---
//   return (
//     <div className="team-detail">
//       {/* 🚩 Header Section */}
//       <header className="team-header">
//         <h1 className="team-header__name">
//           {team.name} ({team.abbr})
//         </h1>
//         <p>ID da Equipa: **{team.id}**</p>
//       </header>

//       <hr />

//       {/* 📊 Standings and General Stats */}
//       <section className="stats-section">
//         <h2>📊 Estatísticas da Liga</h2>
//         {teamStanding ? (
//           <div className="stats-grid">
//             <div className="stat-card">
//               <span className="stat-label">Pontos (Pts)</span>
//               <span className="stat-value">{teamStanding.points}</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Jogos (J)</span>
//               <span className="stat-value">{teamStanding.played}</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Vitórias (V)</span>
//               <span className="stat-value">{teamStanding.wins}</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Derrotas (D)</span>
//               <span className="stat-value">{teamStanding.losses}</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Golos Marcados (GM)</span>
//               <span className="stat-value">{teamStanding.goalsFor}</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Diferença de Golos (DG)</span>
//               <span className="stat-value">
//                 {teamStanding.goalDiff > 0
//                   ? `+${teamStanding.goalDiff}`
//                   : teamStanding.goalDiff}
//               </span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-label">Golos de Jogadores (Soma)</span>
//               <span className="stat-value">{teamGoalsScored}</span>
//             </div>
//           </div>
//         ) : (
//           <p>Estatísticas da liga não disponíveis para esta equipa.</p>
//         )}
//       </section>

//       <hr />

//       {/* 🥇 Top Scorers (Jogadores) */}
//       <section className="players-section">
//         <h2>
//           🥇 Melhores Marcadores da Equipa ({teamPlayers.length} jogadores)
//         </h2>
//         {topScorers.length > 0 ? (
//           <table className="players-table">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Nome</th>
//                 <th>Golos</th>
//                 <th>Assistências</th>
//                 <th>Jogos</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topScorers.map((player, index) => (
//                 <tr key={player.id}>
//                   <td>{index + 1}</td>
//                   <td>**{player.name}**</td>
//                   <td>{player.goals}</td>
//                   <td>{player.assists}</td>
//                   <td>{player.matches}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>Não há dados de jogadores disponíveis para esta equipa.</p>
//         )}
//       </section>

//       <hr />

//       {/* 🎯 Upcoming Matches */}
//       <section className="matches-section">
//         <h2>🎯 Próximos Jogos</h2>
//         {upcomingMatches.length > 0 ? (
//           <ul className="match-list">
//             {upcomingMatches.map((m) => (
//               <li key={m.id}>
//                 **{m.homeTeam.name}** vs **{m.awayTeam.name}** | {m.date}{" "}
//                 {m.time} | {m.venue}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Nenhum jogo futuro programado.</p>
//         )}
//       </section>

//       {/* 🏁 Recent Results */}
//       <section className="matches-section">
//         <h2>🏁 Últimos Resultados</h2>
//         {finishedMatches.length > 0 ? (
//           <ul className="match-list">
//             {finishedMatches.map((m) => (
//               <li
//                 key={m.id}
//                 className={
//                   m.homeTeam.id === teamId
//                     ? m.homeScore > m.awayScore
//                       ? "win"
//                       : m.homeScore < m.awayScore
//                       ? "loss"
//                       : "draw"
//                     : m.awayScore > m.homeScore
//                     ? "win"
//                     : m.awayScore < m.homeScore
//                     ? "loss"
//                     : "draw"
//                 }
//               >
//                 **{m.homeTeam.name}** {m.homeScore} - {m.awayScore} **
//                 {m.awayTeam.name}** ({m.date})
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Nenhum resultado recente disponível.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default TeamDetailPage;

//=========================================================================================================================================================================GOODLOOKS===============================================================================================================================================================================================
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import MatchCard from "../MatchCard/MatchCard";
// import "./TeamDetailPage.css";

// /**
//  * Team Detail Page Component - Works with BOTH array and object teams data
//  * - Handles teams as Array: [{ id: "eagles", ... }, ...]
//  * - Handles teams as Object: { eagles: { id: "eagles", ... }, ... }
//  */

// const TeamDetailPage = ({
//   teams = {},
//   players = [],
//   matches = [],
//   standings = [],
// }) => {
//   const { teamId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("overview");

//   // =========================================================
//   // CONVERT teams to array if it's an object (from sampleData.js)
//   // =========================================================
//   const teamsArray = Array.isArray(teams) ? teams : Object.values(teams); // Convert { eagles: {...}, lions: {...} } to [{...}, {...}]

//   // Find team by ID (works for both string and number IDs)
//   const team = teamsArray.find((t) => t.id === teamId || t.id == teamId);

//   // =========================================================
//   // ERROR HANDLING - Team not found
//   // =========================================================
//   if (!team) {
//     return (
//       <div className="container">
//         <div className="team-not-found">
//           <h1>❌ Equipa não encontrada</h1>
//           <p>A equipa com ID "{teamId}" não existe.</p>
//           <button onClick={() => navigate("/equipas")} className="back-button">
//             ← Voltar para Equipas
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // =========================================================
//   // SAFE DESTRUCTURING with defaults
//   // =========================================================
//   const {
//     name = "Nome da Equipa",
//     logo = "/images/default-team.png",
//     founded = "N/A",
//     stadium = "Estádio N/D",
//     colors = { primary: "#3b82f6", secondary: "#1e40af" },
//     contact = {},
//   } = team;

//   const { captain = "Capitão N/D", phone = "", email = "" } = contact;

//   // =========================================================
//   // FILTER DATA FOR THIS TEAM
//   // =========================================================
//   const teamPlayers = players.filter((p) => p.teamId === teamId);
//   const teamStanding = standings.find((s) => s.teamId === teamId) || {};

//   // Get team matches
//   const teamMatches = matches
//     .filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId)
//     .sort((a, b) => new Date(b.date) - new Date(a.date));

//   const upcomingMatches = teamMatches
//     .filter((m) => m.status === "upcoming")
//     .slice(0, 3);

//   const recentMatches = teamMatches
//     .filter((m) => m.status === "finished")
//     .slice(0, 5);

//   // =========================================================
//   // CALCULATE STATS
//   // =========================================================
//   const totalGoals = teamPlayers.reduce(
//     (sum, p) => sum + (p.stats?.goals || 0),
//     0
//   );
//   const totalAssists = teamPlayers.reduce(
//     (sum, p) => sum + (p.stats?.assists || 0),
//     0
//   );

//   // Top scorers from this team
//   const topScorers = teamPlayers
//     .filter((p) => p.stats?.goals > 0)
//     .sort((a, b) => b.stats.goals - a.stats.goals)
//     .slice(0, 5);

//   // Group players by position
//   const playersByPosition = {
//     Goalkeeper: teamPlayers.filter((p) => p.position === "Goalkeeper"),
//     Defender: teamPlayers.filter((p) => p.position === "Defender"),
//     Midfielder: teamPlayers.filter((p) => p.position === "Midfielder"),
//     Forward: teamPlayers.filter((p) => p.position === "Forward"),
//   };

//   // Form badges
//   const form = teamStanding.form || [];

//   return (
//     <div className="team-detail">
//       {/* Back Button */}
//       <div className="container">
//         <button onClick={() => navigate("/equipas")} className="back-button">
//           ← Voltar para Equipas
//         </button>
//       </div>

//       {/* Team Header */}
//       <div className="team-header">
//         <div
//           className="team-header__banner"
//           style={{
//             background: `linear-gradient(135deg, ${
//               colors?.primary || "#3b82f6"
//             } 0%, ${colors?.secondary || "#1e40af"} 100%)`,
//           }}
//         >
//           <div className="team-header__content">
//             <div className="team-header__logo-section">
//               <img src={logo} alt={name} className="team-header__logo" />
//               <div className="team-header__info">
//                 <h1 className="team-header__name">{name}</h1>
//                 <div className="team-header__meta">
//                   <span>📅 Fundado: {founded}</span>
//                   <span>🏟️ {stadium}</span>
//                   <span>👥 {teamPlayers.length} Jogadores</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="team-header__stats">
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.position || "-"}
//                 </div>
//                 <div className="stat-box__label">Posição</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.points || 0}
//                 </div>
//                 <div className="stat-box__label">Pontos</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">{teamStanding.wins || 0}</div>
//                 <div className="stat-box__label">Vitórias</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">{totalGoals}</div>
//                 <div className="stat-box__label">Golos</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Badge */}
//         {form.length > 0 && (
//           <div className="team-form">
//             <span className="team-form__label">Forma:</span>
//             <div className="team-form__badges">
//               {form.map((result, index) => (
//                 <span
//                   key={index}
//                   className={`form-badge form-badge--${result.toLowerCase()}`}
//                 >
//                   {result}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Navigation Tabs */}
//       <div className="team-tabs">
//         <button
//           className={`team-tab ${
//             activeTab === "overview" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("overview")}
//         >
//           🏆 Visão Geral
//         </button>
//         <button
//           className={`team-tab ${
//             activeTab === "squad" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("squad")}
//         >
//           👥 Plantel
//         </button>
//         <button
//           className={`team-tab ${
//             activeTab === "matches" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("matches")}
//         >
//           ⚽ Jogos
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="team-content">
//         {/* Overview Tab */}
//         {activeTab === "overview" && (
//           <div className="tab-content">
//             {/* Team Statistics */}
//             <div className="content-section">
//               <h2 className="section-title">📈 Estatísticas da Época</h2>
//               <div className="stats-grid">
//                 <div className="stat-card">
//                   <div className="stat-card__label">Jogos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.played || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Vitórias</div>
//                   <div className="stat-card__value">
//                     {teamStanding.wins || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Empates</div>
//                   <div className="stat-card__value">
//                     {teamStanding.draws || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Derrotas</div>
//                   <div className="stat-card__value">
//                     {teamStanding.losses || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Golos Marcados</div>
//                   <div className="stat-card__value">
//                     {teamStanding.goalsFor || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Golos Sofridos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.goalsAgainst || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Diferença</div>
//                   <div className="stat-card__value">
//                     {teamStanding.goalDiff > 0 ? "+" : ""}
//                     {teamStanding.goalDiff || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card stat-card--highlight">
//                   <div className="stat-card__label">Pontos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.points || 0}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Top Scorers */}
//             {topScorers.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">🏅 Melhores Marcadores</h2>
//                 <div className="scorers-list">
//                   {topScorers.map((player, index) => (
//                     <div key={player.id} className="scorer-item">
//                       <div className="scorer-item__rank">#{index + 1}</div>
//                       <div className="scorer-item__info">
//                         <div className="scorer-item__name">{player.name}</div>
//                         <div className="scorer-item__position">
//                           {player.position}
//                         </div>
//                       </div>
//                       <div className="scorer-item__stats">
//                         <span className="scorer-item__goals">
//                           ⚽ {player.stats.goals}
//                         </span>
//                         <span className="scorer-item__assists">
//                           🎯 {player.stats.assists}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Upcoming Matches */}
//             {upcomingMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">Próximos Jogos</h2>
//                 <div className="matches-list">
//                   hhhhh
//                   {upcomingMatches.map((match) => (
//                     <MatchCard
//                       key={match.id}
//                       match={match}
//                       teams={teamsArray}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Recent Results */}
//             {recentMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">Resultados Recentes</h2>
//                 <div className="matches-list">
//                   {recentMatches.map((match) => (
//                     <MatchCard
//                       key={match.id}
//                       match={match}
//                       teams={teamsArray}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Squad Tab */}
//         {activeTab === "squad" && (
//           <div className="tab-content">
//             <div className="content-section">
//               <h2 className="section-title">
//                 👥 Plantel Completo ({teamPlayers.length})
//               </h2>

//               {teamPlayers.length === 0 ? (
//                 <p className="empty-message">Nenhum jogador registado ainda.</p>
//               ) : (
//                 Object.entries(playersByPosition).map(
//                   ([position, posPlayers]) =>
//                     posPlayers.length > 0 ? (
//                       <div key={position} className="position-group">
//                         <h3 className="position-group__title">
//                           {position}s ({posPlayers.length})
//                         </h3>
//                         <div className="players-grid">
//                           {posPlayers.map((player) => (
//                             <div key={player.id} className="player-card">
//                               <div className="player-card__number">
//                                 #{player.number}
//                               </div>
//                               <img
//                                 src={
//                                   player.photo || "/images/default-player.png"
//                                 }
//                                 alt={player.name}
//                                 className="player-card__photo"
//                               />
//                               <div className="player-card__info">
//                                 <h4 className="player-card__name">
//                                   {player.name}
//                                 </h4>
//                                 <p className="player-card__position">
//                                   {player.position}
//                                 </p>
//                                 {player.stats && (
//                                   <div className="player-card__stats">
//                                     <span>⚽ {player.stats.goals}</span>
//                                     <span>🎯 {player.stats.assists}</span>
//                                     <span>🟨 {player.stats.yellowCards}</span>
//                                     {player.stats.redCards > 0 && (
//                                       <span>🟥 {player.stats.redCards}</span>
//                                     )}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ) : null
//                 )
//               )}
//             </div>
//           </div>
//         )}

//         {/* Matches Tab */}
//         {activeTab === "matches" && (
//           <div className="tab-content">
//             <div className="content-section">
//               <h2 className="section-title">Todos os Jogos</h2>
//               {teamMatches.length === 0 ? (
//                 <p className="empty-message">Nenhum jogo registado ainda.</p>
//               ) : (
//                 <div className="matches-list">
//                   {teamMatches.map((match) => (
//                     <MatchCard
//                       key={match.id}
//                       match={match}
//                       teams={teamsArray}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Team Contact Info */}
//       {contact && (
//         <div className="team-contact">
//           <h3>📞 Informações de Contacto</h3>
//           <p>
//             <strong>Capitão:</strong> {captain}
//           </p>
//           {phone && (
//             <p>
//               <strong>Telefone**********:</strong> {phone}
//             </p>
//           )}
//           {email && (
//             <p>
//               <strong>Email:</strong> {email}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamDetailPage;

//===================================================WORKS=BEST=====================================================================================================================================================================================================================================================================================================================
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import MatchCard from "../MatchCard/MatchCard";
// import "./TeamDetailPage.css";

// // =========================================================
// // 📥 DIRECT DATA IMPORT
// // =========================================================
// // Assuming your sampleData.js file exports these variables
// // We include fallback default values ({}) in case the import fails or the file is empty.
// import {
//   teams as importedTeams,
//   players as importedPlayers,
//   standings as importedStandings,
//   matchesData as importedMatches,
// } from "../../data/sampleData";

// // Define the component structure without receiving props for data
// const TeamDetailPage = () => {
//   // =========================================================
//   // ⚙️ INITIALIZE DATA & ROUTING
//   // =========================================================
//   const { teamId } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("overview");

//   // Fallback data structure in case the import fails/is empty
//   const teams = importedTeams || {};
//   const players = importedPlayers || [];
//   const standings = importedStandings || [];
//   const matches = importedMatches || [];

//   /**
//    * CONVERT teams to array if it's an object (handles both array and object data format)
//    * e.g., converts { eagles: {...} } to [{...}] for the .find() operation.
//    */
//   const teamsArray = Array.isArray(teams) ? teams : Object.values(teams);

//   // Find team by ID (uses loose comparison t.id == teamId to handle string vs number IDs)
//   const team = teamsArray.find((t) => t.id === teamId || t.id == teamId);

//   // =========================================================
//   // 🛑 ERROR HANDLING - Team not found
//   // =========================================================
//   if (!team) {
//     return (
//       <div className="container">
//         <div className="team-not-found">
//           <h1>❌ Equipa não encontrada</h1>
//           <p>A equipa com ID "{teamId}" não existe nos dados importados.</p>
//           <button onClick={() => navigate("/equipas")} className="back-button">
//             ← Voltar para Equipas
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // =========================================================
//   // SAFE DESTRUCTURING with defaults (using the found team object)
//   // =========================================================
//   const {
//     name = "Nome da Equipa",
//     logo = "/images/default-team.png",
//     founded = "N/A",
//     stadium = "Estádio N/D",
//     colors = { primary: "#3b82f6", secondary: "#1e40af" },
//     contact = {},
//   } = team;

//   const { captain = "Capitão N/D", phone = "", email = "" } = contact;

//   // =========================================================
//   // FILTER DATA FOR THIS TEAM
//   // =========================================================
//   const teamPlayers = players.filter((p) => p.teamId === teamId);
//   const teamStanding =
//     standings.find((s) => s.teamId === teamId || s.id === teamId) || {};

//   // Get team matches
//   const teamMatches = matches
//     .filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId)
//     .sort((a, b) => new Date(b.date) - new Date(a.date));

//   const upcomingMatches = teamMatches
//     .filter((m) => m.status === "upcoming")
//     .slice(0, 3);

//   const recentMatches = teamMatches
//     .filter((m) => m.status === "finished")
//     .slice(0, 5);

//   // =========================================================
//   // CALCULATE STATS
//   // =========================================================
//   const totalGoals = teamPlayers.reduce(
//     (sum, p) => sum + (p.stats?.goals || 0),
//     0
//   );
//   // Note: totalAssists is calculated but not used in the final JSX provided.
//   const totalAssists = teamPlayers.reduce(
//     (sum, p) => sum + (p.stats?.assists || 0),
//     0
//   );

//   // Top scorers from this team
//   const topScorers = teamPlayers
//     .filter((p) => p.stats?.goals > 0)
//     .sort((a, b) => b.stats.goals - a.stats.goals)
//     .slice(0, 5);

//   // Group players by position
//   const playersByPosition = {
//     Goalkeeper: teamPlayers.filter((p) => p.position === "Goalkeeper"),
//     Defender: teamPlayers.filter((p) => p.position === "Defender"),
//     Midfielder: teamPlayers.filter((p) => p.position === "Midfielder"),
//     Forward: teamPlayers.filter((p) => p.position === "Forward"),
//   };

//   // Form badges
//   const form = teamStanding.form || [];

//   // =========================================================
//   // 🖼️ RENDER (Same structure as your previous code)
//   // =========================================================
//   return (
//     <div className="team-detail">
//       {/* Back Button */}
//       <div className="container">
//         <button onClick={() => navigate("/equipas")} className="back-button">
//           ← Voltar para Equipas
//         </button>
//       </div>

//       {/* Team Header */}
//       <div className="team-header">
//         <div
//           className="team-header__banner"
//           style={{
//             background: `linear-gradient(135deg, ${
//               colors?.primary || "#3b82f6"
//             } 0%, ${colors?.secondary || "#1e40af"} 100%)`,
//           }}
//         >
//           <div className="team-header__content">
//             <div className="team-header__logo-section">
//               <img src={logo} alt={name} className="team-header__logo" />
//               <div className="team-header__info">
//                 <h1 className="team-header__name">{name}</h1>
//                 <div className="team-header__meta">
//                   <span>📅 Fundado: {founded}</span>
//                   <span>🏟️ {stadium}</span>
//                   <span>👥 {teamPlayers.length} Jogadores</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="team-header__stats">
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.position || "-"}
//                 </div>
//                 <div className="stat-box__label">Posição</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.points || 0}
//                 </div>
//                 <div className="stat-box__label">Pontos</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">{teamStanding.wins || 0}</div>
//                 <div className="stat-box__label">Vitórias</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">{totalGoals}</div>
//                 <div className="stat-box__label">Golos</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Badge */}
//         {form.length > 0 && (
//           <div className="team-form">
//             <span className="team-form__label">Forma:</span>
//             <div className="team-form__badges">
//               {form.map((result, index) => (
//                 <span
//                   key={index}
//                   className={`form-badge form-badge--${result.toLowerCase()}`}
//                 >
//                   {result}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Navigation Tabs */}
//       <div className="team-tabs">
//         <button
//           className={`team-tab ${
//             activeTab === "overview" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("overview")}
//         >
//           🏆 Visão Geral
//         </button>
//         <button
//           className={`team-tab ${
//             activeTab === "squad" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("squad")}
//         >
//           👥 Plantel
//         </button>
//         <button
//           className={`team-tab ${
//             activeTab === "matches" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("matches")}
//         >
//           ⚽ Jogos
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="team-content">
//         {/* Overview Tab */}
//         {activeTab === "overview" && (
//           <div className="tab-content">
//             {/* Team Statistics */}
//             <div className="content-section">
//               <h2 className="section-title">📈 Estatísticas da Época</h2>
//               <div className="stats-grid">
//                 <div className="stat-card">
//                   <div className="stat-card__label">Jogos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.played || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Vitórias</div>
//                   <div className="stat-card__value">
//                     {teamStanding.wins || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Empates</div>
//                   <div className="stat-card__value">
//                     {teamStanding.draws || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Derrotas</div>
//                   <div className="stat-card__value">
//                     {teamStanding.losses || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Golos Marcados</div>
//                   <div className="stat-card__value">
//                     {teamStanding.goalsFor || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Golos Sofridos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.goalsAgainst || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Diferença</div>
//                   <div className="stat-card__value">
//                     {teamStanding.goalDiff > 0 ? "+" : ""}
//                     {teamStanding.goalDiff || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card stat-card--highlight">
//                   <div className="stat-card__label">Pontos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.points || 0}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Top Scorers */}
//             {topScorers.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">🏅 Melhores Marcadores</h2>
//                 <div className="scorers-list">
//                   {topScorers.map((player, index) => (
//                     <div key={player.id} className="scorer-item">
//                       <div className="scorer-item__rank">#{index + 1}</div>
//                       <div className="scorer-item__info">
//                         <div className="scorer-item__name">{player.name}</div>
//                         <div className="scorer-item__position">
//                           {player.position}
//                         </div>
//                       </div>
//                       <div className="scorer-item__stats">
//                         <span className="scorer-item__goals">
//                           ⚽ {player.stats.goals}
//                         </span>
//                         <span className="scorer-item__assists">
//                           🎯 {player.stats.assists}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Upcoming Matches */}
//             {upcomingMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">Próximos Jogos</h2>
//                 <div className="matches-list">
//                   {/* The teams prop is passed as teamsArray so MatchCard can look up opponents */}
//                   {upcomingMatches.map((match) => (
//                     <MatchCard
//                       key={match.id}
//                       match={match}
//                       teams={teamsArray}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Recent Results */}
//             {recentMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">Resultados Recentes</h2>
//                 <div className="matches-list">
//                   {/* The teams prop is passed as teamsArray so MatchCard can look up opponents */}
//                   {recentMatches.map((match) => (
//                     <MatchCard
//                       key={match.id}
//                       match={match}
//                       teams={teamsArray}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Squad Tab */}
//         {activeTab === "squad" && (
//           <div className="tab-content">
//             <div className="content-section">
//               <h2 className="section-title">
//                 👥 Plantel Completo ({teamPlayers.length})
//               </h2>

//               {teamPlayers.length === 0 ? (
//                 <p className="empty-message">Nenhum jogador registado ainda.</p>
//               ) : (
//                 Object.entries(playersByPosition).map(
//                   ([position, posPlayers]) =>
//                     posPlayers.length > 0 ? (
//                       <div key={position} className="position-group">
//                         <h3 className="position-group__title">
//                           {position}s ({posPlayers.length})
//                         </h3>
//                         <div className="players-grid">
//                           {posPlayers.map((player) => (
//                             <div key={player.id} className="player-card">
//                               <div className="player-card__number">
//                                 #{player.number}
//                               </div>
//                               <img
//                                 src={
//                                   player.photo || "/images/default-player.png"
//                                 }
//                                 alt={player.name}
//                                 className="player-card__photo"
//                               />
//                               <div className="player-card__info">
//                                 <h4 className="player-card__name">
//                                   {player.name}
//                                 </h4>
//                                 <p className="player-card__position">
//                                   {player.position}
//                                 </p>
//                                 {player.stats && (
//                                   <div className="player-card__stats">
//                                     <span>⚽ {player.stats.goals}</span>
//                                     <span>🎯 {player.stats.assists}</span>
//                                     <span>🟨 {player.stats.yellowCards}</span>
//                                     {player.stats.redCards > 0 && (
//                                       <span>🟥 {player.stats.redCards}</span>
//                                     )}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ) : null
//                 )
//               )}
//             </div>
//           </div>
//         )}

//         {/* Matches Tab */}
//         {activeTab === "matches" && (
//           <div className="tab-content">
//             <div className="content-section">
//               <h2 className="section-title">Todos os Jogos</h2>
//               {teamMatches.length === 0 ? (
//                 <p className="empty-message">Nenhum jogo registado ainda.</p>
//               ) : (
//                 <div className="matches-list">
//                   {teamMatches.map((match) => (
//                     <MatchCard
//                       key={match.id}
//                       match={match}
//                       teams={teamsArray}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Team Contact Info */}
//       {contact && (
//         <div className="team-contact">
//           <h3>📞 Informações de Contacto</h3>
//           <p>
//             <strong>Capitão:</strong> {captain}
//           </p>
//           {phone && (
//             <p>
//               <strong>Telefone:</strong> {phone}
//             </p>
//           )}
//           {email && (
//             <p>
//               <strong>Email:</strong> {email}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamDetailPage;

//============================THE=FINAL=VERSION=COMMENTED==================================================================================================FULL=OG=========================================================================================================================================================================================================================================

// // ============================================================================
// // TeamDetailPage Component
// // ============================================================================
// // This component displays detailed information about a single team.
// // It receives data as props from the parent component (App.jsx) and uses
// // the teamId from the URL to filter and display the correct team's information.
// //
// // KEY CONCEPTS FOR BEGINNERS:
// // - Props: Data passed from parent components (teams, players, matches)
// // - useParams: React Router hook to get URL parameters (teamId)
// // - useState: React hook to manage component state (activeTab)
// // - Array methods: filter(), find(), map(), reduce() for data manipulation
// // ============================================================================

// import React, { useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import MatchCard from "../MatchCard/MatchCard";
// import "./TeamDetailPage.css";

// // ============================================================================
// // COMPONENT DEFINITION
// // ============================================================================
// // Props with default values ensure the component doesn't crash if data is missing
// const TeamDetailPage = ({
//   teams = {}, // Can be object {eagles: {...}} or array [{...}]
//   players = [], // Array of all player objects
//   matches = [], // Array of enriched match objects (already has team data)
// }) => {
//   // --------------------------------------------------------------------------
//   // ROUTING & STATE MANAGEMENT
//   // --------------------------------------------------------------------------

//   // useParams(): Gets dynamic URL parameters.
//   // Example: /equipas/eagles → teamId = "eagles"
//   const { teamId } = useParams();

//   // useNavigate(): Returns function to programmatically navigate between routes
//   // Example: navigate("/equipas") redirects user to teams list page
//   const navigate = useNavigate();

//   // useState(): Creates state variable for tracking which tab is active
//   // First value is current state, second is setter function
//   // "overview" is the default/initial value
//   const [activeTab, setActiveTab] = useState("overview");

//   // --------------------------------------------------------------------------
//   // DATA NORMALIZATION
//   // --------------------------------------------------------------------------

//   // PROBLEM: The 'teams' prop might be an object OR an array depending on source
//   // SOLUTION: Convert to array format for consistent processing
//   //
//   // Object format: { eagles: {id: "eagles", name: "Eagles"}, lions: {...} }
//   // Array format:  [ {id: "eagles", name: "Eagles"}, {...} ]
//   //
//   // Array.isArray() checks the type
//   // Object.values() converts object to array of its values
//   const teamsArray = Array.isArray(teams) ? teams : Object.values(teams);

//   // --------------------------------------------------------------------------
//   // FIND CURRENT TEAM
//   // --------------------------------------------------------------------------

//   // .find() searches array and returns FIRST match
//   // Uses "loose equality" (==) to handle both string and number IDs
//   // Example: "1" == 1 is true, but "1" === 1 is false
//   const team = teamsArray.find((t) => t.id === teamId || t.id == teamId);

//   // --------------------------------------------------------------------------
//   // ERROR HANDLING - Team Not Found
//   // --------------------------------------------------------------------------

//   // Early return pattern: if team doesn't exist, show error and exit
//   // This prevents the rest of the code from running with invalid data
//   if (!team) {
//     return (
//       <div className="team-not-found-container">
//         <div className="team-not-found">
//           <h1>❌ Equipa não encontrada</h1>
//           <p>A equipa com ID "{teamId}" não existe nos dados fornecidos.</p>
//           <button onClick={() => navigate("/equipas")} className="back-button">
//             ← Voltar para Equipas
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // --------------------------------------------------------------------------
//   // DESTRUCTURING WITH DEFAULTS
//   // --------------------------------------------------------------------------

//   // Destructuring extracts properties from objects into variables
//   // Default values (= "...") prevent undefined errors if property is missing
//   //
//   // Example: If team.name doesn't exist, name = "Nome da Equipa"
//   const {
//     name = "Nome da Equipa",
//     logo = "/images/default-team.png",
//     founded = "Deconhecido",
//     stadium = "Deconhecido",
//     colors = { primary: "#3b82f6", secondary: "#1e40af" },
//     contact = {},
//   } = team;

//   // Nested destructuring: Extract properties from the contact object
//   const {
//     coach = "Deconhecido",
//     captain = "Deconhecido",
//     phone = "",
//     email = "",
//   } = contact;

//   // --------------------------------------------------------------------------
//   // FILTER DATA FOR CURRENT TEAM
//   // --------------------------------------------------------------------------

//   // .filter() creates new array with elements that pass the test
//   // Only keeps players whose teamId matches current team
//   const teamPlayers = players.filter((p) => p.teamId === teamId);

//   // .find() returns first matching standing object, or empty object {} if none found
//   // The || operator provides fallback value
//   const teamStanding =
//     teams.find((s) => s.teamId === teamId || s.id === teamId) || {};

//   // --------------------------------------------------------------------------
//   // FILTER & SORT MATCHES
//   // --------------------------------------------------------------------------

//   // Chain methods for complex data manipulation:
//   // 1. .filter() - Keep only matches where this team plays
//   // 2. .sort() - Order by date (newest first)
//   //
//   // SORTING EXPLANATION:
//   // - new Date() converts string to Date object for comparison
//   // - Subtracting dates gives milliseconds difference
//   // - Negative result = b is older, positive = b is newer
//   // - This creates descending order (newest first)
//   const teamMatches = matches
//     .filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId)
//     //ToDo: Add new sorting to list the matches that are live first in ascending time, then the upcomming ones by ascending date first, and if the date is the same, by sacending time, and lastly list the games that are finished by descending date, if the same, then time
//     .sort((a, b) => {
//       // 1. Define Priority Order (Lower number = Higher priority)
//       const statusPriority = {
//         live: 1,
//         upcoming: 2,
//         finished: 3,
//         canceled: 4,
//       };

//       const priorityA = statusPriority[a.status] || 99;
//       const priorityB = statusPriority[b.status] || 99;

//       // 2. First Level Sort: Compare Status Priority
//       if (priorityA !== priorityB) {
//         return priorityA - priorityB;
//       }

//       // 3. Second Level Sort: Date & Time Logic
//       // We combine date and time to ensure strictly chronological sorting
//       // Assuming format is "YYYY-MM-DD" and "HH:MM"
//       const timeA = a.time || "00:00";
//       const timeB = b.time || "00:00";

//       const dateTimeA = new Date(`${a.date}T${timeA}`);
//       const dateTimeB = new Date(`${b.date}T${timeB}`);

//       // LOGIC:
//       // Live/Upcoming: Ascending (Earliest first: A - B)
//       // Finished/Canceled: Descending (Newest first: B - A)
//       if (a.status === "live" || a.status === "upcoming") {
//         return dateTimeA - dateTimeB;
//       } else {
//         return dateTimeB - dateTimeA;
//       }
//     });
//   // .sort((a, b) => new Date(b.date) - new Date(a.date));

//   // Filter matches by status (live, upcoming, finished, canceled)
//   // .slice(0, 3) limits results to first 3 matches
//   const liveMatches = teamMatches.filter((m) => m.status === "live");
//   const upcomingMatches = teamMatches
//     .filter((m) => m.status === "upcoming")
//     .slice(0, 3);
//   const recentMatches = teamMatches
//     .filter((m) => m.status === "finished")
//     .slice(0, 5);
//   const canceledMatches = teamMatches
//     .filter((m) => m.status === "canceled")
//     .slice(0, 4);

//   // --------------------------------------------------------------------------
//   // CALCULATE STATISTICS
//   // --------------------------------------------------------------------------

//   // .reduce() accumulates a single value from array
//   // Parameters: (accumulator, currentItem) => newAccumulator, initialValue
//   //
//   // EXAMPLE: [5, 3, 7] → sum = 0 + 5 + 3 + 7 = 15
//   //
//   // Optional chaining (?.) safely accesses nested properties
//   // If player.stats is undefined, returns undefined instead of error
//   const totalGoals = teamPlayers.reduce(
//     (sum, p) => sum + (p.stats?.goals || 0),
//     0 // Start counting from 0
//   );

//   const totalAssists = teamPlayers.reduce(
//     (sum, p) => sum + (p.stats?.assists || 0),
//     0
//   );

//   // --------------------------------------------------------------------------
//   // TOP SCORERS CALCULATION
//   // --------------------------------------------------------------------------

//   // Multi-step process:
//   // 1. Filter - Only players with goals > 0
//   // 2. Sort - Order by goals (primary), then assists (tiebreaker)
//   // 3. Slice - Take only top 5
//   //
//   // SORTING LOGIC:
//   // - If goals differ, sort by goals (descending)
//   // - If goals are equal, sort by assists (descending)
//   const topScorers = teamPlayers
//     .filter((p) => p.stats?.goals > 0)
//     .sort((a, b) => {
//       if (a.stats.goals !== b.stats.goals) {
//         return b.stats.goals - a.stats.goals; // More goals first
//       }
//       return b.stats.assists - a.stats.assists; // More assists first (tiebreaker)
//     })
//     .slice(0, 5);

//   // --------------------------------------------------------------------------
//   // GROUP PLAYERS BY POSITION
//   // --------------------------------------------------------------------------

//   // Creates object with 4 arrays, one for each position
//   // This allows us to display players organized by position in the UI
//   const playersByPosition = {
//     Goalkeeper: teamPlayers.filter((p) => p.position === "Goalkeeper"),
//     Defender: teamPlayers.filter((p) => p.position === "Defender"),
//     Midfielder: teamPlayers.filter((p) => p.position === "Midfielder"),
//     Forward: teamPlayers.filter((p) => p.position === "Forward"),
//   };

//   // Extract form array from standing (W/D/L badges)
//   // Default to empty array if not available
//   const form = teamStanding.standing?.form || [];

//   // --------------------------------------------------------------------------
//   // RENDER COMPONENT
//   // --------------------------------------------------------------------------

//   return (
//     <div className="team-detail-page">
//       {/* ===== BACK BUTTON ===== */}
//       {/* Arrow function () => executes on click, navigates to teams list */}
//       <div className="back-button-container">
//         <button
//           onClick={() => navigate("/equipas")}
//           className="back-button"
//           aria-label="Voltar para lista de equipas"
//         >
//           <span className="back-button__icon">←</span>
//           <span className="back-button__text">Voltar para Equipas</span>
//         </button>
//       </div>

//       {/* ===== TEAM HEADER WITH GRADIENT BANNER ===== */}
//       <div className="team-header">
//         {/* Inline styles for dynamic gradient based on team colors */}
//         {/* Template literals (``) allow embedded expressions ${} */}
//         {/* Optional chaining (?.) prevents errors if colors is undefined */}
//         <div
//           className="team-header__banner"
//           style={{
//             background: `linear-gradient(135deg, ${
//               colors?.primary || "#3b82f6"
//             } 0%, ${colors?.secondary || "#1e40af"} 100%)`,
//           }}
//         >
//           <div className="team-header__content">
//             {/* Logo and basic info section */}
//             <div className="team-header__logo-section">
//               <img
//                 src={logo || "/images/teams/default-team-logo.png"}
//                 alt={name}
//                 className="team-header__logo"
//               />
//               <div className="team-header__info">
//                 <h1 className="team-header__name">{name}</h1>
//                 <div className="team-header__meta">
//                   <span>📅 Fundado: {founded}</span>
//                   <span>🏟️ {stadium}</span>
//                   {/* .length property gets number of items in array */}
//                   <span>👥 {teamPlayers.length} Jogadores</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick statistics boxes */}
//             <div className="team-header__stats">
//               {/* || operator provides fallback if value is falsy (0, null, undefined, etc.) */}
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.standing?.position || "-"}
//                 </div>
//                 <div className="stat-box__label">Posição</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.standing?.points || 0}
//                 </div>
//                 <div className="stat-box__label">Pontos</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">
//                   {teamStanding.standing?.wins || 0}
//                 </div>
//                 <div className="stat-box__label">Vitórias</div>
//               </div>
//               <div className="stat-box">
//                 <div className="stat-box__value">{totalGoals}</div>
//                 <div className="stat-box__label">Golos</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== FORM BADGES (W/D/L) ===== */}
//         {/* && operator: Only render if form.length > 0 is true */}
//         {/* This is called "conditional rendering" */}
//         {form.length > 0 && (
//           <div className="team-form">
//             <span className="team-form__label">Forma:</span>
//             <div className="team-form__badges">
//               {/* .map() transforms each array item into JSX */}
//               {/* (item, index) - index is position in array (0, 1, 2...) */}
//               {/* key prop helps React identify which items changed */}
//               {form.map((result, index) => (
//                 <span
//                   key={index}
//                   className={`form-badge form-badge--${result.toLowerCase()}`}
//                 >
//                   {result}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ===== NAVIGATION TABS ===== */}
//       <div className="team-tabs">
//         {/* Conditional class names based on activeTab state */}
//         {/* Ternary operator: condition ? ifTrue : ifFalse */}
//         <button
//           className={`team-tab ${
//             activeTab === "overview" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("overview")}
//         >
//           🏆 Visão Geral
//         </button>
//         <button
//           className={`team-tab ${
//             activeTab === "squad" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("squad")}
//         >
//           👥 Plantel
//         </button>
//         <button
//           className={`team-tab ${
//             activeTab === "matches" ? "team-tab--active" : ""
//           }`}
//           onClick={() => setActiveTab("matches")}
//         >
//           ⚽ Jogos
//         </button>
//       </div>

//       {/* ===== TAB CONTENT (Changes based on activeTab) ===== */}
//       <div className="team-content">
//         {/* ----- OVERVIEW TAB ----- */}
//         {activeTab === "overview" && (
//           <div className="tab-content">
//             {/* Season Statistics Grid */}
//             <div className="content-section">
//               <h2 className="section-title">📈 Estatísticas da Época</h2>
//               <div className="stats-grid">
//                 <div className="stat-card">
//                   <div className="stat-card__label">Jogos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.played || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Vitórias</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.wins || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Empates</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.draws || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Derrotas</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.losses || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Golos Marcados</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.goalsFor || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Golos Sofridos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.goalsAgainst || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-card__label">Diferença</div>
//                   <div className="stat-card__value">
//                     {/* Ternary adds + sign for positive numbers */}
//                     {teamStanding.standing?.goalDiff > 0 ? "+" : ""}
//                     {teamStanding.standing?.goalDiff || 0}
//                   </div>
//                 </div>
//                 <div className="stat-card stat-card--highlight">
//                   <div className="stat-card__label">Pontos</div>
//                   <div className="stat-card__value">
//                     {teamStanding.standing?.points || 0}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Top Scorers List */}
//             {topScorers.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">🏅 Melhores Marcadores</h2>

//                 <div className="scorers-list">
//                   {topScorers.map((player, index) => (
//                     <div key={player.id} className="scorer-item">
//                       {/* index + 1 because arrays start at 0 */}
//                       <div className="scorer-item__rank">#{index + 1}</div>
//                       <div className="scorer-item__info">
//                         <Link to={`/jogadores/${player.id}`}>
//                           <div className="scorer-item__name">{player.name}</div>
//                         </Link>
//                         <div className="scorer-item__position">
//                           {player.position}
//                         </div>
//                       </div>
//                       <div className="scorer-item__stats">
//                         <span className="scorer-item__goals">
//                           ⚽ {player.stats.goals}
//                         </span>
//                         <span className="scorer-item__assists">
//                           🎯 {player.stats.assists}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Live Matches Section */}
//             {liveMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">🔴 Jogos ao Vivo</h2>
//                 <div className="matches-list">
//                   {/* MatchCard is a separate component that handles match display */}
//                   {liveMatches.map((match) => (
//                     <MatchCard key={match.id} match={match} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Upcoming Matches Section */}
//             {upcomingMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">📅 Próximos Jogos</h2>
//                 <div className="matches-list">
//                   {upcomingMatches.map((match) => (
//                     <MatchCard key={match.id} match={match} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Recent Results Section */}
//             {recentMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">✅ Resultados Recentes</h2>
//                 <div className="matches-list">
//                   {recentMatches.map((match) => (
//                     <MatchCard key={match.id} match={match} />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Canceled Matches Section */}
//             {canceledMatches.length > 0 && (
//               <div className="content-section">
//                 <h2 className="section-title">❌ Jogos Cancelados</h2>
//                 <div className="matches-list">
//                   {canceledMatches.map((match) => (
//                     <MatchCard key={match.id} match={match} />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ----- SQUAD TAB ----- */}
//         {activeTab === "squad" && (
//           <div className="tab-content">
//             <div className="content-section">
//               <h2 className="section-title">
//                 👥 Plantel Completo ({teamPlayers.length})
//               </h2>

//               {/* Conditional rendering: Show message if no players */}
//               {teamPlayers.length === 0 ? (
//                 <p className="empty-message">Nenhum jogador registado ainda.</p>
//               ) : (
//                 // Object.entries() converts object to array of [key, value] pairs
//                 // Example: {Goalkeeper: [...]} → [["Goalkeeper", [...]]]
//                 Object.entries(playersByPosition).map(
//                   ([position, posPlayers]) =>
//                     // Only render section if position has players
//                     posPlayers.length > 0 ? (
//                       <div key={position} className="position-group">
//                         <h3 className="position-group__title">
//                           {position} ({posPlayers.length})
//                         </h3>
//                         <div className="players-grid">
//                           {posPlayers.map((player) => (
//                             <Link to={`/jogadores/${player.id}`}>
//                               <div key={player.id} className="player-card">
//                                 <div className="player-card__number">
//                                   Nº{player.number}
//                                 </div>
//                                 <img
//                                   src={
//                                     player.photo ||
//                                     "/images/players/default-player.png"
//                                   }
//                                   alt={player.name}
//                                   className="player-card__photo"
//                                 />
//                                 <div className="player-card__info">
//                                   <h4 className="player-card__name">
//                                     {player.name}
//                                   </h4>
//                                   <p className="player-card__position">
//                                     {player.position}
//                                   </p>
//                                   {/* Only show stats if they exist */}
//                                   {player.stats && (
//                                     <div className="player-card__stats">
//                                       <span>⚽ {player.stats.goals}</span>
//                                       <span>🎯 {player.stats.assists}</span>
//                                       <span>🟨 {player.stats.yellowCards}</span>
//                                       {/* Only show red cards if > 0 */}
//                                       {player.stats.redCards > 0 && (
//                                         <span>🟥 {player.stats.redCards}</span>
//                                       )}
//                                     </div>
//                                   )}
//                                 </div>
//                               </div>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ) : null // Return null if no players in this position
//                 )
//               )}
//             </div>
//           </div>
//         )}

//         {/* ----- MATCHES TAB ----- */}
//         {activeTab === "matches" && (
//           <div className="tab-content">
//             <div className="content-section">
//               <h2 className="section-title">⚽ Todos os Jogos</h2>
//               {teamMatches.length === 0 ? (
//                 <p className="empty-message">Nenhum jogo registado ainda.</p>
//               ) : (
//                 <div className="matches-list">
//                   {teamMatches.map((match) => (
//                     <MatchCard key={match.id} match={match} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ===== TEAM CONTACT INFORMATION ===== */}
//       {/* Only render if contact object exists */}
//       {contact && (
//         <div className="team-contact">
//           <h3>📞 Informações de Contacto</h3>
//           <p>
//             <strong>Treinador:</strong> {coach}
//           </p>
//           <p>
//             <strong>Capitão:</strong> {captain}
//           </p>
//           {/* Only show phone/email if they have values */}
//           {phone && (
//             <p>
//               <strong>Telefone:</strong> {phone}
//             </p>
//           )}
//           {email && (
//             <p>
//               <strong>Email:</strong> {email}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // Export component so it can be imported in other files
// export default TeamDetailPage;.

//========================================================================================================================================================================================================================================================================================================================================THE=FINAL=VERSION=TYPED/REVIWED===========================================================================================================================================================================================================================================================================================================================================

// ============================================================================
// TeamDetailPage Component
// ============================================================================

// This component displays detailed information about a single team.
// It receives data as props from the parent component (App.jsx) and uses
// the teamId from the URL to filter and display the correct team's information.
//
// KEY CONCEPTS FOR BEGINNERS:
// - Props: Data passed from parent components (teams, players, matches)
// - useParams: React Router hook to get URL parameters (teamId)
// - useState: React hook to manage component state (activeTab)
// - Array methods: filter(), find(), map(), reduce() for data manipulation
// ============================================================================

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MatchCard from "../MatchCard/MatchCard";
import "./TeamDetailPage.css";

// ============================================================================
// COMPONENT DEFINITION
// ============================================================================
// Props with default values ensure the component doesn't crash if data is missing
const TeamDetailPage = ({
  teams = {}, // Can be object {eagles: {...}} or array [{...}]
  players = [], // Array of all player objects
  matches = [], // Array of enriched match objects (already has team data)
}) => {
  // --------------------------------------------------------------------------
  // ROUTING & STATE MANAGEMENT
  // --------------------------------------------------------------------------

  // useParams(): Gets dynamic URL parameters.
  // Example: /equipas/eagles → teamId = "eagles"
  const { teamId } = useParams();

  // useState(): Creates state variable for tracking which tab is active
  // First value is current state, second is setter function
  // "overview" is the default/initial value
  const [activeTab, setActiveTab] = useState("overview");

  // --------------------------------------------------------------------------
  // DATA NORMALIZATION
  // --------------------------------------------------------------------------

  // PROBLEM: The 'teams' prop might be an object OR an array depending on source
  // SOLUTION: Convert to array format for consistent processing
  //
  // Object format: { eagles: {id: "eagles", name: "Eagles"}, lions: {...} }
  // Array format:  [ {id: "eagles", name: "Eagles"}, {...} ]
  //   //
  // Array.isArray() checks the type
  // Object.values() converts object to array of its values
  const teamsArray = Array.isArray(teams) ? teams : Object.values(teams);

  // --------------------------------------------------------------------------
  // FIND CURRENT TEAM
  // --------------------------------------------------------------------------

  // .find() searches array and returns FIRST match
  // Uses "loose equality" (==) to handle both string and number IDs
  // Example: "1" == 1 is true, but "1" === 1 is false
  const team = teamsArray.find((t) => t.id === teamId || t.id == teamId);

  // --------------------------------------------------------------------------
  // ERROR HANDLING - Team Not Found
  // --------------------------------------------------------------------------

  // Early return pattern: if team doesn't exist, show error and exit
  // This prevents the rest of the code from running with invalid data
  if (!team) {
    return (
      <div className="team-not-found">
        <div className="error-content">
          <h1 className="error-title">❌ Equipa não encontrada</h1>
          <p className="error-message">
            A equipa com ID "{teamId}" não existe.
          </p>
          <Link to="/equipas" className="back-button wrapper-Link">
            ← Voltar para Equipas
          </Link>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // DESTRUCTURING WITH DEFAULTS
  // --------------------------------------------------------------------------

  // Destructuring extracts properties from objects into variables
  // Default values (= "...") prevent undefined errors if property is missing
  //
  // Example: If team.name doesn't exist, name = "Nome da Equipa"
  const {
    name = "Nome da Equipa",
    logo = "/images/teams/default-team.png",
    abbr = "XX",
    founded = "Indefinido",
    stadium = "Indefinido",
    colors = { primary: "#3b82f6", secondary: "#1e40af" },
    contact = {},
  } = team;

  // Nested destructuring: Extract properties from the contact object
  const {
    coach = "Indefinido",
    captain = "Indefinido",
    phone = "-",
    email = "-",
  } = contact;

  // --------------------------------------------------------------------------
  // FILTER DATA FOR CURRENT TEAM
  // --------------------------------------------------------------------------

  // .filter() creates new array with elements that pass the test
  // Only keeps players whose teamId matches current team
  const teamPlayers = players.filter((p) => p.teamId === teamId);

  // .find() returns first matching standing object, or empty object {} if none found
  // The || operator provides fallback value
  const teamStanding =
    teams.find((s) => s.teamId === teamId || s.id === teamId) || {};

  // --------------------------------------------------------------------------
  // FILTER & SORT MATCHES
  // --------------------------------------------------------------------------

  // Chain methods for complex data manipulation:
  // 1. .filter() - Keep only matches where this team plays
  // 2. .sort() - Order by the matches that are live first in ascending time, then the upcomming ones by ascending date first, and if the date is the same, by sacending time, and lastly list the games that are finished by descending date, if the same, then time
  //
  // SORTING EXPLANATION:
  // - new Date() converts string to Date object for comparison
  // - Subtracting dates gives milliseconds difference
  // - Negative result = b is older, positive = b is newer
  // - This creates descending order (newest first)
  const teamMatches = matches
    .filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId)
    .sort((a, b) => {
      // 1. Define Priority Order (Lower number = Higher priority)
      const statusPriority = {
        live: 1,
        upcoming: 2,
        finished: 3,
        canceled: 4,
      };

      const priorityA = statusPriority[a.status] || 99;
      const priorityB = statusPriority[b.status] || 99;

      // 2. First Level Sort: Compare Status Priority
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      // 3. Second Level Sort: Date & Time Logic
      // We combine date and time to ensure strictly chronological sorting
      // Assuming format is "YYYY-MM-DD" and "HH:MM"
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
    });

  // Filter matches by status (live, upcoming, finished, canceled)
  // .slice(0, 3) limits results to first 3 matches
  const liveMatches = teamMatches.filter((m) => m.status === "live");

  const upcomingMatches = teamMatches
    .filter((m) => m.status === "upcoming")
    .slice(0, 3);

  const recentMatches = teamMatches
    .filter((m) => m.status === "finished")
    .slice(0, 5);

  const canceledMatches = teamMatches
    .filter((m) => m.status === "canceled")
    .slice(0, 4);

  // --------------------------------------------------------------------------
  // CALCULATE STATISTICS
  // --------------------------------------------------------------------------

  // .reduce() accumulates a single value from array
  // Parameters: (accumulator, currentItem) => newAccumulator, initialValue
  //
  // EXAMPLE: [5, 3, 7] → sum = 0 + 5 + 3 + 7 = 15
  //
  // Optional chaining (?.) safely accesses nested properties
  // If player.stats is undefined, returns undefined instead of error
  const totalGoals = teamPlayers.reduce(
    (sum, p) => sum + (p.stats?.goals || 0),
    0 // Start counting from 0
  );

  const totalAssists = teamPlayers.reduce(
    (sum, p) => sum + (p.stats?.assists || 0),
    0
  );

  // --------------------------------------------------------------------------
  // TOP SCORERS CALCULATION
  // --------------------------------------------------------------------------

  // Multi-step process:
  // 1. Filter - Only players with goals > 0
  // 2. Sort - Order by goals (primary), then assists (tiebreaker)
  // 3. Slice - Take only top 5
  //
  // SORTING LOGIC:
  // - If goals differ, sort by goals (descending)
  // - If goals are equal, sort by assists (descending)
  const topScorers = teamPlayers
    .filter((p) => p.stats?.goals > 0)
    .sort((a, b) => {
      if (a.stats.goals !== b.stats.goals) {
        return b.stats.goals - a.stats.goals; // More goals first
      }
      return b.stats.assists - a.stats.assists; // More assists first (tiebreaker)
    })
    .slice(0, 5);

  // --------------------------------------------------------------------------
  // GROUP PLAYERS BY POSITION
  // --------------------------------------------------------------------------

  // Creates object with 4 arrays, one for each position
  // This allows us to display players organized by position in the UI
  const playersByPosition = {
    Goalkeeper: teamPlayers.filter((p) => p.position === "Goalkeeper"),
    Defender: teamPlayers.filter((p) => p.position === "Defender"),
    Midfielder: teamPlayers.filter((p) => p.position === "Midfielder"),
    Forward: teamPlayers.filter((p) => p.position === "Forward"),
  };

  // Extract form array from standing (W/D/L badges)
  // Default to empty array if not available
  const form = teamStanding.standing?.form || [];

  // --------------------------------------------------------------------------
  // RENDER COMPONENT
  // --------------------------------------------------------------------------

  return (
    <div className="teams-detail-page">
      {/* ===== BACK BUTTON ===== */}
      <div className="back-button-container">
        <Link
          to="/equipas"
          className="back-button wrapper-Link"
          aria-label="Voltar para lista de equipas"
        >
          <span className="back-button__icon">←</span>
          <span className="back-button__text">Voltar para Equipas</span>
        </Link>
      </div>

      {/* ===== TEAM HEADER WITH GRADIENT BANNER ===== */}
      <div className="team-header">
        {/* Inline styles for dynamic gradient based on team colors */}
        {/* Template literals (``) allow embedded expressions ${} */}
        {/* Optional chaining (?.) prevents errors if colors is undefined */}
        <div
          className="team-header__banner"
          style={{
            background: `linear-gradient(135deg, ${
              colors?.primary || "#3b82f6"
            } 0%, ${colors?.secondary || "#1e40af"} 100%)`,
          }}
        >
          <div className="team-header__content">
            {/* Logo and basic info section */}
            <div className="team-header__logo-section">
              <img
                src={logo || "/images/teams/default-team-logo.png"}
                alt={abbr || name}
                className="team-header__logo"
              />
              <div className="team-header__info">
                <h1 className="team-header__name">{name}</h1>
                <div className="team-header__meta">
                  <span>📅 Fundado: {founded}</span>
                  <span>🏟️ {stadium}</span>
                  {/* .length property gets number of items in array */}
                  <span>👥 {teamPlayers.length} Jogadores</span>
                </div>
              </div>
            </div>

            {/* Quick statistics boxes */}
            <div className="team-header__stats">
              {/* || operator provides fallback if value is falsy (0, null, undefined, etc.) */}
              <div className="stat-box">
                <div className="stat-box__value">
                  {teamStanding.standing?.position || "-"}
                </div>
                <div className="stat-box__label">Posição</div>
              </div>

              <div className="stat-box">
                <div className="stat-box__value">
                  {teamStanding.standing?.points || 0}
                </div>
                <div className="stat-box__label">Pontos</div>
              </div>

              <div className="stat-box">
                <div className="stat-box__value">
                  {teamStanding.standing?.wins || 0}
                </div>
                <div className="stat-box__label">Vitórias</div>
              </div>

              <div className="stat-box">
                <div className="stat-box__value">{totalGoals}</div>
                <div className="stat-box__label">Golos</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FORM BADGES (W/D/L) ===== */}
        {/* && operator: Only render if form.length > 0 is true */}
        {/* This is called "conditional rendering" */}
        {form.length > 0 && (
          <div className="team-form">
            <span className="team-form__label">Forma:</span>
            <div className="team-form__badges">
              {/* .map() transforms each array item into JSX */}
              {/* (item, index) - index is position in array (0, 1, 2...) */}
              {/* key prop helps React identify which items changed */}
              {form.map((result, index) => (
                <span
                  key={index}
                  className={`form-badge form-badge--${result.toLowerCase()}`}
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== NAVIGATION TABS ===== */}

      <div className="team-tabs">
        {/* Conditional class names based on activeTab state */}
        {/* Ternary operator: condition ? ifTrue : ifFalse */}
        <button
          className={`team-tab ${
            activeTab === "overview" ? "team-tab--active" : ""
          }`}
          onClick={() => setActiveTab("overview")}
        >
          🏆 Visão Geral
        </button>

        <button
          className={`team-tab ${
            activeTab === "squad" ? "team-tab--active" : ""
          }`}
          onClick={() => setActiveTab("squad")}
        >
          👥 Plantel
        </button>

        <button
          className={`team-tab ${
            activeTab === "matches" ? "team-tab--active" : ""
          }`}
          onClick={() => setActiveTab("matches")}
        >
          ⚽ Jogos
        </button>
      </div>

      {/* ===== TAB CONTENT (Changes based on activeTab) ===== */}
      <div className="team-content">
        {/* ----- OVERVIEW TAB ----- */}
        {activeTab === "overview" && (
          <div className="tab-content">
            {/* Season Statistics Grid */}
            <div className="content-section">
              <h2 className="section-title">📈 Estatísticas da Época</h2>
              <div className="team-stats-grid">
                <div className="team-stat-card">
                  <div className="team-stat-card__label">Jogos</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.played || 0}
                  </div>
                </div>

                <div className="team-stat-card">
                  <div className="team-stat-card__label">Vitórias</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.wins || 0}
                  </div>
                </div>

                <div className="team-stat-card">
                  <div className="team-stat-card__label">Empates</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.draws || 0}
                  </div>
                </div>

                <div className="team-stat-card">
                  <div className="team-stat-card__label">Derrotas</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.losses || 0}
                  </div>
                </div>

                <div className="team-stat-card">
                  <div className="team-stat-card__label">Golos Marcados</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.goalsFor || 0}
                  </div>
                </div>

                <div className="team-stat-card">
                  <div className="team-stat-card__label">Golos Sofridos</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.goalsAgainst || 0}
                  </div>
                </div>

                <div className="team-stat-card">
                  <div className="team-stat-card__label">
                    Diferença de Golos
                  </div>
                  <div className="team-stat-card__value">
                    {/* Ternary adds + sign for positive numbers */}
                    {teamStanding.standing?.goalDiff > 0 ? "+" : ""}
                    {teamStanding.standing?.goalDiff || 0}
                  </div>
                </div>

                <div className="team-stat-card team-stat-card--highlight">
                  <div className="team-stat-card__label">Pontos</div>
                  <div className="team-stat-card__value">
                    {teamStanding.standing?.points || 0}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Scorers List */}
            {topScorers.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">🏅 Melhores Marcadores</h2>

                <div className="scorers-list">
                  {topScorers.map((player, index) => (
                    <div key={player.id} className="scorer-item">
                      {/* index + 1 because arrays start at 0 */}
                      <div className="scorer-item__rank">#{index + 1}</div>
                      <div className="scorer-item__info">
                        <Link
                          className="wrapper-Link"
                          to={`/jogadores/${player.id}`}
                        >
                          <div className="scorer-item__name">{player.name}</div>
                        </Link>
                        <div className="scorer-item__position">
                          {player.position}
                        </div>
                      </div>
                      <div className="scorer-item__stats">
                        <span className="scorer-item__goals">
                          ⚽ {player.stats.goals}
                        </span>
                        <span className="scorer-item__assists">
                          🎯 {player.stats.assists}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Matches Section */}
            {liveMatches.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">🔴 Jogos ao Vivo</h2>
                <div className="matches-list">
                  {/* MatchCard is a separate component that handles match display */}
                  {liveMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Matches Section */}
            {upcomingMatches.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">📅 Próximos Jogos</h2>
                <div className="matches-list">
                  {upcomingMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}

            {/* Recent Results Section */}
            {recentMatches.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">✅ Resultados Recentes</h2>
                <div className="matches-list">
                  {recentMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}

            {/* Canceled Matches Section */}
            {canceledMatches.length > 0 && (
              <div className="content-section">
                <h2 className="section-title">❌ Jogos Cancelados</h2>
                <div className="matches-list">
                  {canceledMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----- SQUAD TAB ----- */}
        {activeTab === "squad" && (
          <div className="tab-content">
            <div className="content-section">
              <h2 className="section-title">
                👥 Plantel Completo ({teamPlayers.length})
              </h2>

              {/* Conditional rendering: Show message if no players */}
              {teamPlayers.length === 0 ? (
                <p className="empty-message">Nenhum jogador registado ainda.</p>
              ) : (
                // Object.entries() converts object to array of [key, value] pairs
                // Example: {Goalkeeper: [...]} → [["Goalkeeper", [...]]]
                Object.entries(playersByPosition).map(
                  ([position, posPlayers]) =>
                    // Only render section if position has players
                    posPlayers.length > 0 ? (
                      <div key={position} className="position-group">
                        <h3 className="position-group__title">
                          {position} ({posPlayers.length})
                        </h3>
                        <div className="players-grid">
                          {posPlayers.map((player) => (
                            <Link
                              key={player.id}
                              className="wrapper-Link"
                              to={`/jogadores/${player.id}`}
                            >
                              <div key={player.id} className="player-card">
                                <div className="player-card__number">
                                  Nº{player.number}
                                </div>
                                <img
                                  src={
                                    player.photo ||
                                    "/images/players/default-player.png"
                                  }
                                  alt={player.name}
                                  className="player-card__photo"
                                />
                                <div className="player-card__info">
                                  <h4 className="player-card__name">
                                    {player.name}
                                  </h4>
                                  <p className="player-card__position">
                                    {player.position}
                                  </p>
                                  {/* Only show stats if they exist */}
                                  {player.stats && (
                                    <div className="player-card__stats">
                                      <span>⚽ {player.stats.goals}</span>
                                      <span>🎯 {player.stats.assists}</span>
                                      <span>🟨 {player.stats.yellowCards}</span>
                                      {/* Only show red cards if > 0 */}
                                      {player.stats.redCards > 0 && (
                                        <span>🟥 {player.stats.redCards}</span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null // Return null if no players in this position
                )
              )}
            </div>
          </div>
        )}

        {/* ----- MATCHES TAB ----- */}
        {activeTab === "matches" && (
          <div className="tab-content">
            <div className="content-section">
              <h2 className="section-title">⚽ Todos os Jogos</h2>
              {teamMatches.length === 0 ? (
                <p className="empty-message">Nenhum jogo registado ainda.</p>
              ) : (
                <div className="matches-list">
                  {teamMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ===== TEAM CONTACT INFORMATION ===== */}
      {/* Only render if contact object exists */}
      {contact && (
        <div className="team-contact">
          <h3>📞 Informações de Contacto</h3>
          <p>
            <strong>Treinador:</strong> {coach}
          </p>
          <p>
            <strong>Capitão:</strong> {captain}
          </p>
          {/* Only show phone/email if they have values */}
          {phone && (
            <p>
              <strong>Telefone:</strong> {phone}
            </p>
          )}
          {email && (
            <p>
              <strong>Email:</strong> {email}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
// Export component so it can be imported in other files
export default TeamDetailPage;
