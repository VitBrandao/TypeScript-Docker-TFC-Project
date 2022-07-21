import fs = require('fs');

const readJWT = fs.readFileSync('jwt.evaluation.key', 'utf-8');

export default readJWT;
