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

    this.firstLeaderboardData();
  }

  private finishedMatches = async () => this.matchesServices.getByProgress('false');

  public firstLeaderboardData = async () => {
    const allTeams = await this.teamsServices.getAll();
    this.classification = allTeams.map((team) => new TeamData(team.id, team.teamName));
    console.log(this.classification);
  };

  public leaderboard = async () => {
    // const allFinishedMatches = await this.finishedMatches();
    // console.log(allFinishedMatches);
  };
}

export default LeaderboardServices;
