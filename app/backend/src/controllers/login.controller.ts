import { Request, Response } from 'express';
// import JWT = require('jsonwebtoken');
// import readJWT from '../auth/readJWT';
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

  // public validate = async (req: Request, _res: Response) => {
  //   const { authorization } = req.headers;

  //   try {
  //     const verifyJWT = JWT.verify(authorization as string, readJWT);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
}

export default LoginController;
