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

    const createMatch = await this.matchesServices.create(req.body, authorization);
    return res.status(201).json(createMatch);
  };

  public finish = async (req: Request, res: Response) => {
    const { id } = req.params;
    const finishMatch = await this.matchesServices.finish(id);

    return res.status(200).json(finishMatch);
  };
}

export default MatchesController;
