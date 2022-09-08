import * as dotenv from 'dotenv';
import messages from '../../common/messages';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(messages.ENV_NOT_FOUND);
}

export default {
  port: Number(process.env.PORT),

  jwtSecret: process.env.JWT_SECRET,
};
