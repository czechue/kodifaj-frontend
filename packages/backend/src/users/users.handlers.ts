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

export function getUserById(userId: string): Promise<null | User> {
  return getDb()
    .db()
    .collection<User>('users')
    .findOne({ _id: (new ObjectId(userId) as unknown) as string })
    .then((data) => {
      return data;
    });
}

export async function createUser(
  newUser: CreateUser,
): Promise<InsertOneWriteOpResult<WithId<CreateUser>>> {
  return await getDb().db().collection<CreateUser>('users').insertOne(newUser);
}
