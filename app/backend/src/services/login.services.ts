import JWT = require('jsonwebtoken');
import readJWT from '../auth/readJWT';
import User from '../database/models/user';

class LoginServices {
  public login = async (email: string) => {
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) throw new Error('User not found!');

    const { id, username, role } = findUser;
    return {
      id,
      username,
      role,
      email,
    };
  };

  public validate = async (auth: string) => {
    const verifyJWT = JWT.verify(auth, readJWT) as { data: { email: string } };
    if (!verifyJWT) throw new Error('Token not valid');

    const { data: { email } } = verifyJWT;

    const findUser = await User.findOne({ where: { email } });
    if (!findUser) throw new Error('User not found!');

    const { role } = findUser;

    return role;
  };
}

export default LoginServices;
