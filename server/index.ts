import next from 'next';
import express, { Request, Response } from 'express';
import db from './services/db';
// import keys from './config/keys';
// import passport from 'passport';
import bodyParser from 'body-parser';
// import cookieSession from 'cookie-session';

// MODELS:
// import './models/User';
// import './models/Task';
// import './models/Solution';

// import passportService from './services/passport';
import tasksRoutes from './routes/tasks.routes';
import endpoints from './endpoints';
// import authRoutes from './routes/auth.routes';

// mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // passportService();

  const server = express();

  server.use(bodyParser.json());
  // server.use(
  //   cookieSession({
  //     maxAge: 30 * 24 * 60 * 60 * 1000,
  //     keys: [keys.cookieKey],
  //   }),
  // );
  // server.use(passport.initialize());
  // server.use(passport.session());

  endpoints(server);
  // authRoutes(app, server);
  tasksRoutes(app, server);

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });


  db.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
      });
    }
  });
});
