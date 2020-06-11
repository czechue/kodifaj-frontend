import next from 'next';
import express, { Request, Response } from 'express';
import { initDb } from './services/db';
import keys from './config/keys';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import tasksRoutes from './tasks/tasks.routes';
import tasksController from './tasks/tasks.controller';
import usersController from './users/users.controller';
import passportService from './auth/passport.service';
import authRoutes from './auth/auth.routes';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

initDb((err) => console.log('err', err));

app.prepare().then(() => {
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

  tasksController(server);
  usersController(server);
  authRoutes(app, server);
  tasksRoutes(app, server);

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on PORT: ${port}`);
  });
});
