import { CreateUser } from '@kodifaj/common';
import { User } from '@kodifaj/common';

import { InsertOneWriteOpResult, ObjectId, WithId, MongoClient } from 'mongodb';
const getDb = require('../services/db').getDb as () => MongoClient;

export function getUsers(): Promise<User[]> {
  return getDb().db().collection<User>('users').find().toArray();
}

export function getUser(user: Partial<User>): Promise<null | User> {
  return getDb().db().collection<User>('users').findOne(user);
}

export function getSimpleUserById(userId: string): Promise<null | User> {
  return getDb()
    .db()
    .collection<User>('users')
    .findOne({ _id: (new ObjectId(userId) as unknown) as string })
    .then((data) => {
      return data;
    });
}

export function getUserById(userId: string): Promise<null | User> {
  return getDb()
    .db()
    .collection<User>('users')
    .aggregate([
      { $match: { _id: new ObjectId(userId) } },
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
            {
              $lookup: {
                from: 'tasks',
                localField: '_task',
                foreignField: '_id',
                as: '_task',
              },
            },
            {
              $unwind: '$_task',
            },
          ],
          as: '_solutions',
        },
      },
      {
        $lookup: {
          from: 'tasks',
          let: {
            tasks: '$_tasks',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$_id', '$$tasks'],
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
          as: '_tasks',
        },
      },
    ])
    .next();
}

export async function createUser(
  newUser: CreateUser,
): Promise<InsertOneWriteOpResult<WithId<CreateUser>>> {
  return await getDb().db().collection<CreateUser>('users').insertOne(newUser);
}
