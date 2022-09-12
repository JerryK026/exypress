import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import config from '../config';
import logger from './logger';

import morgan from 'morgan';
import statusCodes from '../../common/messages/statusCodes';

import Routes from '../index';

const app = express();

// parse requests which comes with 'urlencoded payload'
// extended: true => use 'qs' library
app.use(express.urlencoded({ extended: true }));

// parse cookie header to 'req.cookies'
app.use(cookieParser());

// enable CORS with various options
app.use(cors(config.corsOptions));

// body-parser => parse 'body' to 'req.body'
app.use(express.json());

// secure Express app by setting various HTTP headers.
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use(morgan('combined'));

Routes(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(JSON.stringify(err, Object.getOwnPropertyNames(err)));
  return res.status(statusCodes.BAD_REQUEST).json({
    status: false,
    error: err.message,
  });
});

export default app;
