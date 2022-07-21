import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRouter = Router();
const controller = new MatchesController();

matchesRouter.get('/', controller.get);
matchesRouter.post('/', controller.create);
matchesRouter.patch('/:id/finish', controller.finish);
matchesRouter.patch('/:id', controller.update);

export default matchesRouter;
