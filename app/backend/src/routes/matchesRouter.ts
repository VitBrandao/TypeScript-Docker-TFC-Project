import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRouter = Router();
const controller = new MatchesController();

matchesRouter.get('/', controller.get);

export default matchesRouter;
