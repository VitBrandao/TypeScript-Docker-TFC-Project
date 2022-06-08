import Match from '../database/models/match';
import Team from '../database/models/team';

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
}

export default MatchesServices;
