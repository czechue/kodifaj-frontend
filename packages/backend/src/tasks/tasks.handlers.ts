import { Task } from '@kodifaj/common';
import { InsertOneWriteOpResult, ObjectId, WithId, MongoClient } from 'mongodb';
import { CreateTask } from '@kodifaj/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getDb = require('../services/db').getDb as () => MongoClient;

export function getAllTasks(): Promise<Task[]> {
  return getDb()
    .db()
    .collection<Task>('tasks')
    .aggregate([
      { $lookup: { from: 'users', localField: '_user', foreignField: '_id', as: 'user' } },
      {
        $unwind: '$user',
      },
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
                as: 'user',
              },
            },
            {
              $unwind: '$user',
            },
            {
              $lookup: {
                from: 'tasks',
                localField: '_task',
                foreignField: '_id',
                as: 'task',
              },
            },
            {
              $unwind: '$task',
            },
          ],
          as: 'solutions',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: '_user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $unwind: '$user',
      },
    ])
    .next();
}

export async function createTask(
  newTask: CreateTask,
): Promise<InsertOneWriteOpResult<WithId<CreateTask>>> {
  return await getDb().db().collection<CreateTask>('tasks').insertOne(newTask);
}
