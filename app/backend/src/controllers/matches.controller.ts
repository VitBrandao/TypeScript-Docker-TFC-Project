import { Request, Response } from 'express';
import MatchesServices from '../services/matches.services';

class MatchesController {
  constructor(private matchesServices = new MatchesServices()) { }

  public getAll = async (_req: Request, res: Response) => {
    const matches = await this.matchesServices.getAll();
    return res.status(200).json(matches);
  };
}

export default MatchesController;
