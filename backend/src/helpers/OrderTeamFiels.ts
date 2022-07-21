import TeamData from './TeamData';

function OrderTeamFields(teamFields: TeamData) {
  const orderTeamObject = {
    name: teamFields.name,
    totalPoints: teamFields.totalPoints,
    totalGames: teamFields.totalGames,
    totalVictories: teamFields.totalVictories,
    totalDraws: teamFields.totalDraws,
    totalLosses: teamFields.totalLosses,
    goalsFavor: teamFields.goalsFavor,
    goalsOwn: teamFields.goalsOwn,
    goalsBalance: teamFields.goalsBalance,
    efficiency: teamFields.efficiency,
  };

  return orderTeamObject;
}

export default OrderTeamFields;
