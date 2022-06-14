import { Request, Response } from 'express';
import LeaderboardServices from '../services/leaderboard.services';

class LeaderboardController {
  constructor(private leaderboardServices = new LeaderboardServices()) { }

  public leaderboard = async (_req: Request, res: Response) => {
    const table = await this.leaderboardServices.leaderboard();
    return res.status(200).json(table);
  };
}

export default LeaderboardController;
