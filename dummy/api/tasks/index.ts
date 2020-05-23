import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import getAllTasks from './_handlers/getAllTasks';
import { Task } from '../../../lib/models/task/task';
import middleware from '../../../lib/middlewares/middleware';

const handler = nextConnect();
handler.use(middleware);

handler.get(
  (req: NextApiRequest, res: NextApiResponse<Task[] | void>): Promise<void> => {
    return getAllTasks(req.db)
      .then((tasks) => {
        res.status(200).json(tasks);
      })
      .catch((err: Error) => console.error('get task error', err));
  },
);

export default handler;
