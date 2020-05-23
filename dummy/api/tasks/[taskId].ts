import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../../lib/middlewares/middleware';
import getTaskById from './_handlers/getTaskById';
import { Task } from '../../../lib/models/task/task';

const handler = nextConnect();
handler.use(middleware);

handler.get(
  async (req: NextApiRequest, res: NextApiResponse<Task | null>): Promise<void> => {
    return getTaskById(req.db, req.query.taskId as string)
      .then((task) => {
        res.status(200).json(task);
      })
      .catch((e) => res.status(400).json(e));
  },
);

export default handler;
