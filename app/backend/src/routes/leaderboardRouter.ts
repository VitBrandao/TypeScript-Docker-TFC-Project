import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRouter = Router();
const controller = new LeaderboardController();

leaderboardRouter.get('/', controller.leaderboard);
leaderboardRouter.get('/home', controller.homeLeaderboard);
leaderboardRouter.get('/away', controller.awayLeaderboard);

export default leaderboardRouter;
