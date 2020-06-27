import { Express, Request, Response } from 'express';
import keys from '../config/keys';
const Router = require('express').Router;
import passport from 'passport';

const router = Router();

router.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: ['read:user', 'public_repo'],
    session: true,
  }),
);

router.get(
  '/auth/github/callback',
  passport.authenticate('github'),
  (_req: Request, res: Response) => {
    console.log('redirect', _req.user);

    res.redirect(keys.appUrl);
  },
);

router.get('/api/logout', (req: Request, res: Response) => {
  req.logout();
  res.redirect('/');
});

router.get('/api/current_user', (req: Request, res: Response) => {
  if (req.user) {
    res.send(req.user);
  }
  res.status(403).send({});
});

export default router;
