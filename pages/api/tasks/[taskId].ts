import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import middleware from '../../../middlewares/middleware';
import { Document } from 'mongoose';
import Task from '../../../models/task/task.schema';
import Solution from '../../../models/solution/solutions.schema';

const handler = nextConnect();
handler.use(middleware);

handler.get(
  async (req: NextApiRequest, res: NextApiResponse<Document[]>): Promise<void> => {
    const task = await Task.findById(req.query.taskId).populate('_user');
    const solutions = await Solution.find({ _task: req.query.taskId }).populate('_user');

    return Promise.all([task, solutions]).then(([taskRes, solutionsRes]) => {
      return res.send({
        ...taskRes?._doc,
        solutions: solutionsRes,
      });
    });
  },
);

export default handler;
