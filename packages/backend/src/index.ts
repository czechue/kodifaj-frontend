import express from 'express';

import keys from './config/keys';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import usersController from './users/users.controller';
import taskController from './tasks/tasks.controller';

import passportService from './auth/passport.service';
import authRoutes from './auth/auth.routes';

const initDb = require('./services/db').initDb as (callback: (err: Error | null) => void) => void;

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';

passportService();

const server = express();

server.use(bodyParser.json());
server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
server.use(passport.initialize());
server.use(passport.session());

authRoutes(server);
server.use('/api/tasks', taskController);
server.use('/api/users', usersController);

initDb((err: any) => {
  if (err) {
    console.log(err);
  } else {
    server.listen(port, () => {
      console.log(`> Ready on PORT: ${port}`);
    });
  }
});
