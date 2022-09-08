import config from './config';
import * as express from 'express';

import { Logger } from './loaders/logger';
import messages from '../common/messages';

async function startServer() {
  const app = express();

  app
    .listen(config.port, () => {
      Logger.log(messages.SERVER_RUNNING(config.port));
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
