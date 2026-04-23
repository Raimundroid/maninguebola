export const getTopPlayersByCompetition = (
  players,
  competitionId,
  statType = "goals",
) => {
  const filtered = players.filter((player) => {
    const compStats = player.stats?.byCompetition?.[competitionId];
    if (!compStats) return false;

    const goals = Number(compStats.goals) || 0;
    const assists = Number(compStats.assists) || 0;

    // 🎯 Conditional filtering based on active tab
    if (statType === "goals") {
      return goals > 0;
    }

    if (statType === "assists") {
      return assists > 0;
    }

    return false;
  });

  const enriched = filtered.map((player) => {
    const compStats = player.stats.byCompetition[competitionId];

    return {
      ...player,
      stats: {
        appearances: compStats.appearances,
        goals: compStats.goals,
        assists: compStats.assists,
      },
    };
  });

  //   const sorted = enriched.sort((a, b) => {
  //     return (b.stats?.[statType] || 0) - (a.stats?.[statType] || 0);
  //   });
  const sorted = enriched.sort((a, b) => {
    const aGoals = a.stats?.goals || 0;
    const bGoals = b.stats?.goals || 0;

    const aAssists = a.stats?.assists || 0;
    const bAssists = b.stats?.assists || 0;

    // 🥇 PRIMARY SORT
    if (statType === "goals") {
      if (bGoals !== aGoals) return bGoals - aGoals;

      // 🥈 SECONDARY SORT (assists)
      if (bAssists !== aAssists) return bAssists - aAssists;
    } else {
      if (bAssists !== aAssists) return bAssists - aAssists;

      // 🥈 SECONDARY SORT (goals)
      if (bGoals !== aGoals) return bGoals - aGoals;
    }

    // 🥉 TERTIARY SORT (alphabetical)
    return a.name.localeCompare(b.name);
  });

  return sorted.slice(0, 10);
};
