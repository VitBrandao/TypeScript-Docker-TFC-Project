import { Request, Response } from 'express';
import createJWT from '../auth/createJWT';
import LoginServices from '../services/login.services';

class LoginController {
  constructor(private loginServices = new LoginServices()) { }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userLogin = await this.loginServices.login(email);
    return res.status(200)
      .json({ user: userLogin, token: await createJWT({ email, password }) });
  };

  public validate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    if (!authorization) throw new Error('Token not found');
    try {
      const verify = await this.loginServices.validate(authorization);
      // const { role } = verify;
      return res.status(200).json(verify);
    } catch (error) {
      console.log(error);
    }
  };
}

export default LoginController;
