import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import { emailValidation, passwordValidation } from '../middlewares/login.middlewares';

const loginRouter = Router();
const controller = new LoginController();

loginRouter.post('/', emailValidation, passwordValidation, controller.login);
// loginRouter.get('/validate', controller.validate);

export default loginRouter;
