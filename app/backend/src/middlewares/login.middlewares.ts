import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import User from '../database/models/user';

const doesEmailExists = async (email: string) => {
  const findEmail = await User.findOne({ where: { email } });
  // console.log(findEmail);
  if (!findEmail || findEmail === null) return false;
  if (findEmail) return true;
};

export async function emailValidation(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  if (!email || email === null || email.length === 0) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const verifyEmail = await doesEmailExists(email);
  if (verifyEmail === false) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
}

const doesPasswordExists = async (password: string, email: string) => {
  if (password.length <= 6) return false;

  const verifyUser = await User.findOne({ where: { email } });
  if (!verifyUser) return false;

  const decode = await compare(password, verifyUser.password);

  if (!decode) return false;
  if (decode) return true;
};

export async function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password, email } = req.body;

  if (!password || password === null || password.length === 0) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const verifyPassword = await doesPasswordExists(password, email);
  if (verifyPassword === false) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
}
