import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../../middlewares/middleware';
import { Task } from '../../../models/task/task.model';
import getAllTasks from './_utils/tasksHandler';

const handler = nextConnect();
handler.use(middleware);

handler.get(
  (req: NextApiRequest, res: NextApiResponse<Task[] | void>): Promise<void> => {
    return getAllTasks(req.db)
      .then((tasks) => {
        console.log('1', tasks);
        res.status(200).json(tasks);
      })
      .catch((err: Error) => console.log('get task error', err));
  },
);

export default handler;
