import { Request, Response } from 'express';
const Router = require('express').Router;
import { getUserById, getUsers } from './users.handlers';
import { User } from '../../lib/models/user/User';

const router = Router();

router.get(
  '',
  (_req: Request, res: Response): Promise<void | User[]> => {
    return getUsers()
      .then((users) => {
        res.send(users);
      })
      .catch((e) => console.warn(e));
  },
);

router.get(
  '/:id',
  (req: Request, res: Response): Promise<void | User> => {
    const userId = req?.params?.id;

    return getUserById(userId)
      .then((user) => {
        res.send(user);
      })
      .catch((e) => console.warn(e));
  },
);

export default router;
