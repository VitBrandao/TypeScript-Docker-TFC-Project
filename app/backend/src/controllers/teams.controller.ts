import { Request, Response } from 'express';
import TeamsServices from '../services/teams.services';

class TeamsController {
  constructor(private teamsServices = new TeamsServices()) { }

  public getAll = async (_req: Request, res: Response) => {
    const allTeams = await this.teamsServices.getAll();
    return res.status(200).json(allTeams);
  };
}

export default TeamsController;
