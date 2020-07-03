import express from 'express';

import keys from './config/keys';
import passport from 'passport';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import usersController from './users/users.controller';
import taskController from './tasks/tasks.controller';
import solutionsController from './solutions/solutions.controller';

import passportService from './auth/passport.service';
import authRoutes from './auth/auth.routes';

const initDb = require('./services/db').initDb as (callback: (err: Error | null) => void) => void;

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';

const server = express();

server.set('trust proxy', true);
server.use(bodyParser.json());
server.use(
  cors({
    origin: ['http://localhost:3000', 'https://kodifaj.pl', 'http://localhost:8080'],
    credentials: true,
  }),
);

console.log('IS DEV', dev);

server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
    domain: dev ? 'localhost' : 'kodifaj.pl',
  }),
);
server.use(passport.initialize());
server.use(passport.session());
passportService(passport);

server.use(authRoutes);
server.use('/api/tasks', taskController);
server.use('/api/users', usersController);
server.use('/api/solutions', solutionsController);

initDb((err: any) => {
  if (err) {
    console.log(err);
  } else {
    server.listen(port, () => {
      console.log(`> Ready on PORT: ${port}`);
    });
  }
});
