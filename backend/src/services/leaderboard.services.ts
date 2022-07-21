import OrderTable from '../helpers/OrderTable';
import OrderTeamFields from '../helpers/OrderTeamFiels';
import TeamData from '../helpers/TeamData';
import MatchesServices from './matches.services';
import TeamsServices from './teams.services';

class LeaderboardServices {
  private classification: TeamData[];

  private matchesServices: MatchesServices;
  private teamsServices: TeamsServices;

  constructor() {
    this.matchesServices = new MatchesServices();
    this.teamsServices = new TeamsServices();
  }

  public finishedMatches = async () => this.matchesServices.getByProgress('false');

  public firstLeaderboardData = async () => {
    const allTeams = await this.teamsServices.getAll();
    this.classification = allTeams.map((team) => new TeamData(team.id, team.teamName));
  };

  public orderTableByPoints = () => {
    this.classification.sort((teamA, teamB) => OrderTable(teamA, teamB));
  };

  public leaderboard = async () => {
    await this.firstLeaderboardData();
    const allFinishedMatches = await this.finishedMatches();

    // Percorre partidas finalizadas, encontra time por id e adiciona nova partida
    allFinishedMatches.forEach((match) => {
      const ifHomeTeam = this.classification.find(
        (team) => team.id === match.homeTeam,
      ) as TeamData;

      const ifAwayTeam = this.classification.find(
        (team) => team.id === match.awayTeam,
      ) as TeamData;

      ifHomeTeam.addNewGame(match.homeTeamGoals, match.awayTeamGoals);
      ifAwayTeam.addNewGame(match.awayTeamGoals, match.homeTeamGoals);
    });

    this.orderTableByPoints();

    return this.classification.map((teamData) => OrderTeamFields(teamData));
  };

  public homeLeaderboard = async () => {
    await this.firstLeaderboardData();
    const allFinishedMatches = await this.finishedMatches();

    allFinishedMatches.forEach((match) => {
      const homeTeam = this.classification.find(
        (team) => team.id === match.homeTeam,
      ) as TeamData;

      homeTeam.addNewGame(match.homeTeamGoals, match.awayTeamGoals);
    });

    this.orderTableByPoints();

    return this.classification.map((teamData) => OrderTeamFields(teamData));
  };

  public awayLeaderboard = async () => {
    await this.firstLeaderboardData();
    const allFinishedMatches = await this.finishedMatches();

    allFinishedMatches.forEach((match) => {
      const awayTeam = this.classification.find(
        (team) => team.id === match.awayTeam,
      ) as TeamData;

      awayTeam.addNewGame(match.awayTeamGoals, match.homeTeamGoals);
    });

    this.orderTableByPoints();

    return this.classification.map((teamData) => OrderTeamFields(teamData));
  };
}

export default LeaderboardServices;
