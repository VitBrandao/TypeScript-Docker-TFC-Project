import JWT = require('jsonwebtoken');
import readJWT from '../auth/readJWT';
import Match from '../database/models/match';
import Team from '../database/models/team';
import IMatch from '../interfaces/IMatch';

class MatchesServices {
  public getAll = async () => {
    const findMatches = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return findMatches;
  };

  public getByProgress = async (status: string) => {
    const progressStatus = status === 'true';

    const findMatches = await Match.findAll({
      where: { inProgress: progressStatus },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return findMatches;
  };

  public create = async (body: IMatch, auth: string) => {
    const verifyJWT = JWT.verify(auth, readJWT);
    if (!verifyJWT) throw new Error('Token not valid');

    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = body;

    const newMatch = Match
      .create({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress });

    return newMatch;
  };
}

export default MatchesServices;
