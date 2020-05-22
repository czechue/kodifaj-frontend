import { Db, ObjectId } from 'mongodb';
import { Task } from '../../../../lib/models/task/task';

export default async function getTaskById(db: Db, taskId: string): Promise<null | Task> {
  return await db
    .collection<Task>('tasks')
    .aggregate([
      { $match: { _id: new ObjectId(taskId) } },
      {
        $lookup: {
          from: 'solutions',
          let: {
            solutions: '$_solutions',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$_id', '$$solutions'],
                },
              },
            },
            {
              $lookup: {
                from: 'users',
                localField: '_user',
                foreignField: '_id',
                as: '_user',
              },
            },
            {
              $unwind: '$_user',
            },
          ],
          as: '_solutions',
        },
      },
    ])
    .next();
}
