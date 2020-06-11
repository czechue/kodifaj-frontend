import { Task } from '../../lib/models/task/Task';
import { InsertOneWriteOpResult, ObjectId, WithId } from 'mongodb';
import { CreateTask } from '../../lib/models/task/CreateTask';
import { getDb } from '../services/db';

export function getAllTasks(): Promise<Task[]> {
  return getDb()
    .db()
    .collection<Task>('tasks')
    .aggregate([
      { $lookup: { from: 'users', localField: '_user', foreignField: '_id', as: 'user' } },
    ])
    .toArray();
}

export async function getTaskById(taskId: string): Promise<null | Task> {
  return await getDb()
    .db()
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

export async function createTask(
  newTask: CreateTask,
): Promise<InsertOneWriteOpResult<WithId<CreateTask>>> {
  return await getDb().db().collection<CreateTask>('tasks').insertOne(newTask);
}
