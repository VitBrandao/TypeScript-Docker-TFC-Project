import { Request, Response } from 'express';
import MatchesServices from '../services/matches.services';

class MatchesController {
  constructor(private matchesServices = new MatchesServices()) { }

  public get = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    // getAll
    if (!inProgress) {
      const matches = await this.matchesServices.getAll();
      return res.status(200).json(matches);
    }

    // getByProgress
    if (typeof inProgress !== 'string') throw new Error('Progress is not a string');
    const matches = await this.matchesServices.getByProgress(inProgress);
    return res.status(200).json(matches);
  };

  public create = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) throw new Error('Token not found');

    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const createMatch = await this.matchesServices.create(req.body, authorization);

    if (typeof createMatch === 'string') {
      return res.status(404)
        .json({ message: 'There is no team with such id!' });
    }

    return res.status(201).json(createMatch);
  };

  public finish = async (req: Request, res: Response) => {
    const { id } = req.params;
    const finishMatch = await this.matchesServices.finish(id);

    return res.status(200).json(finishMatch);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const finishMatch = await this.matchesServices.update(req.body, id);

    return res.status(200).json(finishMatch);
  };
}

export default MatchesController;
