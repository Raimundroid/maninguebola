// ============================================
// PlayerDetailPage.jsx
// ============================================

import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator"; // Adjust path as needed
import "./PlayerDetailPage.css";

const PlayerDetailPage = ({ players, matches, teams }) => {
  // 1. Get the Player ID from the URL (e.g. /jogadores/17)
  const { id } = useParams();

  // 2. Find the Player
  const player = useMemo(() => {
    // Convert URL id to number just in case
    return players.find((p) => p.id === Number(id));
  }, [players, id]);

  // 3. Find the Player's Team (for styling and match filtering)
  const playerTeam = useMemo(() => {
    if (!player) return null;
    // Handle both: 'teams' lookup object OR 'player.team' enriched object
    return player.team || (teams && teams[player.teamId]);
  }, [player, teams]);

  // 4. Get Recent Matches for this Player's Team
  const playerMatches = useMemo(() => {
    if (!player || !matches) return [];

    return matches
      .filter((m) => m.homeTeamId === player.teamId || m.awayTeamId === player.teamId)
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first
      .slice(0, 5); // Limit to last 5
  }, [player, matches]);

  // Helper: Check if player scored in a specific match
  // Works with both Array of Strings OR String (Legacy)
  const hasScoredInMatch = (match) => {
    if (!match || match.status !== "finished") return false;
    
    // Combine home and away scorers into one list/string
    const allScorers = [].concat(match.homeScorers || [], match.awayScorers || []);
    
    // Check if player name exists in that list
    // Note: This is a simple string check. Ideally use IDs in future.
    if (Array.isArray(allScorers)) {
      return allScorers.some(scorer => typeof scorer === 'string' && scorer.includes(player.name));
    }
    return false;
  };

  // --- LOADING / ERROR STATE ---
  if (!player) {
    return (
      <div className="player-not-found">
        <h2>Jogador não encontrado</h2>
        <Link to="/jogadores" className="back-link">Voltar à lista</Link>
      </div>
    );
  }

  return (
    <div className="player-page">
      <PageIndicator icon="👤" title="Perfil do Jogador" />

      <div className="player-content">
        
        {/* --- SECTION 1: HERO PROFILE --- */}
        <div className="player-hero">
          <div className="hero-bg" style={{ backgroundColor: playerTeam?.colors?.primary || 'var(--primary)' }}></div>
          
          <div className="hero-content">
            <div className="player-avatar-container">
              <img 
                src={player.photo} 
                alt={player.name} 
                className="player-avatar-large"
                onError={(e) => e.target.src = "/src/images/players/default-placeholder.png"} 
              />
              <div className="team-badge-overlap">
                {/* Team Logo (Small badge) */}
                {playerTeam?.logo && <img src={playerTeam.logo} alt={playerTeam.abbr} />}
              </div>
            </div>

            <div className="player-identity">
              <h1 className="player-name">
                {player.name}
                <span className="player-number">#{player.number}</span>
              </h1>
              <p className="player-meta">
                {player.position} • {playerTeam?.name || "Sem Equipa"}
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: KEY STATS --- */}
        <div className="stats-grid">
          <div className="stat-card highlight">
            <span className="stat-label">Golos</span>
            <span className="stat-value">{player.stats?.goals || 0}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Assistências</span>
            <span className="stat-value">{player.stats?.assists || 0}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Jogos</span>
            <span className="stat-value">{player.stats?.appearances || 0}</span>
          </div>
          {/* Calculated Stat: Goal Contributions */}
          <div className="stat-card">
            <span className="stat-label">G+A</span>
            <span className="stat-value">
              {(player.stats?.goals || 0) + (player.stats?.assists || 0)}
            </span>
          </div>
        </div>

        {/* --- SECTION 3: DISCIPLINE (Small row) --- */}
        <div className="discipline-row">
          <div className="discipline-item yellow">
            <div className="card-icon yellow-card"></div>
            <span>{player.stats?.yellowCards || 0} Amarelos</span>
          </div>
          <div className="discipline-item red">
            <div className="card-icon red-card"></div>
            <span>{player.stats?.redCards || 0} Vermelhos</span>
          </div>
        </div>

        {/* --- SECTION 4: RECENT MATCHES --- */}
        <div className="player-history">
          <h3>Jogos Recentes da Equipa</h3>
          {playerMatches.length > 0 ? (
            <div className="history-list">
              {playerMatches.map((match) => {
                const didScore = hasScoredInMatch(match);
                const isHome = match.homeTeamId === player.teamId;
                const opponentName = isHome ? match.awayTeam?.abbr : match.homeTeam?.abbr;
                const result = match.status === 'finished' 
                  ? `${match.homeScore} - ${match.awayScore}`
                  : match.time;

                return (
                  <div key={match.id} className="history-item">
                    <div className="history-date">
                       {/* Format: 16 Nov */}
                      {new Date(match.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' })}
                    </div>
                    <div className="history-info">
                      <span className="history-vs">
                        {isHome ? "vs" : "@"} {opponentName || "OPP"}
                      </span>
                      <span className={`history-result ${match.status}`}>
                        {result}
                      </span>
                    </div>
                    {/* Goal Icon if they scored */}
                    <div className="history-badge">
                      {didScore && <span title="Marcou golo neste jogo">⚽</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="no-history">Sem jogos recentes.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default PlayerDetailPage;