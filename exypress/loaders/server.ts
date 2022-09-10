import * as express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import config from '../config';

import morgan from 'morgan';

export default ({ app }: { app: express.Application }) => {
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
};
