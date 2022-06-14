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

    // Executa função inicial de montagem do array já no constructor
    this.firstLeaderboardData();
  }

  private finishedMatches = async () => this.matchesServices.getByProgress('false');

  public firstLeaderboardData = async () => {
    const allTeams = await this.teamsServices.getAll();
    this.classification = allTeams.map((team) => new TeamData(team.id, team.teamName));
  };

  public leaderboard = async () => {
    const allFinishedMatches = await this.finishedMatches();

    // Percorre partidas finalizadas, encontra time por id e adiciona nova partida
    allFinishedMatches.forEach((match) => {
      const ifHomeTeam = this.classification.find(
        (team) => team.id === match.homeTeam,
      ) as TeamData;

      ifHomeTeam.addNewGame(match.homeTeamGoals, match.awayTeamGoals);

      const ifAwayTeam = this.classification.find(
        (team) => team.id === match.awayTeam,
      ) as TeamData;

      ifAwayTeam.addNewGame(match.awayTeamGoals, match.homeTeamGoals);
    });

    return this.classification.map((teamData) => OrderTeamFields(teamData));
  };
}

export default LeaderboardServices;
