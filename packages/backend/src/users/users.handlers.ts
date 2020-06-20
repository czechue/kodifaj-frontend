import { CreateUser } from '@kodifaj/common';
import { User } from '@kodifaj/common';

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
    .findOne({ _id: (new ObjectId(userId) as unknown) as string })
    .then((data) => {
      console.log('x', data);
      return data;
    });
}

export async function createUser(
  newUser: CreateUser,
): Promise<InsertOneWriteOpResult<WithId<CreateUser>>> {
  return await db.getDb().db().collection<CreateUser>('users').insertOne(newUser);
}
