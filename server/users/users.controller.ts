import { Express, Request, Response } from 'express';

import { getUserById, getUsers } from './users.handlers';
import { User } from '../../lib/models/user/User';

export default function usersController(server: Express): void {
  server.get(
    '/api/users',
    (_req: Request, res: Response): Promise<void | User[]> => {
      console.log('ppppppppppp');
      return getUsers()
        .then((users) => {
          res.send(users);
        })
        .catch((e) => console.warn(e));
    },
  );

  server.get(
    '/api/users/:id',
    (req: Request, res: Response): Promise<void | User> => {
      const userId = req?.params?.id;

      return getUserById(userId)
        .then((user) => {
          res.send(user);
        })
        .catch((e) => console.warn(e));
    },
  );
}
