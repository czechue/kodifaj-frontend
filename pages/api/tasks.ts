import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../middlewares/middleware';
import { Document } from 'mongoose';
import Task from '../../models/task/task.schema';

const handler = nextConnect();
handler.use(middleware);

handler.get(
  async (req: NextApiRequest, res: NextApiResponse<Document[]>): Promise<void> => {
    const tasks = await Task.find().populate('_user', 'login');
    res.status(200).json(tasks);
  },
);

export default handler;
