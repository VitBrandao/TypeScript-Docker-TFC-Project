import { Request, Response } from 'express';
import TeamsServices from '../services/teams.services';

class TeamsController {
  constructor(private teamsServices = new TeamsServices()) { }

  public getAll = async (_req: Request, res: Response) => {
    const allTeams = await this.teamsServices.getAll();
    return res.status(200).json(allTeams);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const teamById = await this.teamsServices.getById(id);
    return res.status(200).json(teamById);
  };
}

export default TeamsController;
