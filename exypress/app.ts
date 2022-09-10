import config from './config';
import * as express from 'express';

import { logger } from './loaders/logger';
import messages from '../common/messages';

async function startServer() {
  const app = express();

  app
    .listen(config.port, () => {
      logger.info(messages.SERVER_RUNNING(config.port));
    })
    .on('error', (err) => {
      logger.error(err);
      process.exit(1);
    });
}

startServer();
