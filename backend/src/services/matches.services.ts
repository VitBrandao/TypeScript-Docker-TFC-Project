import JWT = require('jsonwebtoken');
import readJWT from '../auth/readJWT';
import Match from '../database/models/match';
import Team from '../database/models/team';
import IMatch from '../interfaces/IMatch';
import IMatchGoals from '../interfaces/IMatchGoals';

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

    const findHomeTeam = await Match.findByPk(homeTeam);
    const findAwayTeam = await Match.findByPk(awayTeam);
    if (!findHomeTeam || !findAwayTeam) return 'Not Valid Id';

    const newMatch = Match
      .create({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress });

    return newMatch;
  };

  public finish = async (id: string) => {
    try {
      const findMatch = await Match.findByPk(id);
      if (!findMatch) throw new Error('Match not found!');

      await Match.update({ inProgress: false }, { where: { id } });
      return { message: 'Finished' };
    } catch (error) {
      console.log(error);
    }
  };

  public update = async (body: IMatchGoals, id: string) => {
    const { homeTeamGoals: homeGoals, awayTeamGoals: awayGoals } = body;

    await Match.update(
      { homeTeamGoals: homeGoals, awayTeamGoals: awayGoals },
      { where: { id } },
    );

    return { message: 'Match goals successfully updated!' };
  };
}

export default MatchesServices;
