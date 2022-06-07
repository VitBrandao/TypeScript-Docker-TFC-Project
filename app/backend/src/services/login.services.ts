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
}

export default LoginServices;
