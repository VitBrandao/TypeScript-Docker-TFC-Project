import JWT = require('jsonwebtoken');
import readJWT from './readJWT';

const createJWT = async (data: object) => {
  try {
    return JWT.sign({ data }, readJWT);
  } catch (error) {
    console.log(error);
  }
};

export default createJWT;
