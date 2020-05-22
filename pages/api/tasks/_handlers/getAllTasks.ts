import { Db } from 'mongodb';
import { Task } from '../../../../lib/models/task/task';

export default async function getAllTasks(db: Db): Promise<void | Task[]> {
  return await db
    .collection<Task>('tasks')
    .aggregate([
      { $lookup: { from: 'users', localField: '_user', foreignField: '_id', as: 'user' } },
    ])
    .toArray();
}
