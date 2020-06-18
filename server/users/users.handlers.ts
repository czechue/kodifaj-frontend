import { CreateUser } from '../../lib/models/user/CreateUser';
import { User } from '../../lib/models/user/User';

import db from '../services/db';
import { InsertOneWriteOpResult, ObjectId, WithId } from 'mongodb';

export function getUsers(): Promise<User[]> {
  return db.getDb().db().collection<User>('users').find().toArray();
}

export function getUser(user: Partial<User>): Promise<null | User> {
  return db.getDb().db().collection<User>('users').findOne(user);
}

export function getUserById(userId: string): Promise<null | User> {
  return db
    .getDb()
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
    ])
    .next();
}

export async function createUser(
  newUser: CreateUser,
): Promise<InsertOneWriteOpResult<WithId<CreateUser>>> {
  return await db.getDb().db().collection<CreateUser>('users').insertOne(newUser);
}
