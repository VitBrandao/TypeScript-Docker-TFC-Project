import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamsRouter = Router();
const controller = new TeamsController();

teamsRouter.get('/', controller.getAll);

export default teamsRouter;
