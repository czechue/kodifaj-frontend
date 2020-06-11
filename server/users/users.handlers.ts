import { CreateUser } from '../../lib/models/user/CreateUser';
import { User } from '../../lib/models/user/User';

import { InsertOneWriteOpResult, ObjectId, WithId } from 'mongodb';
import { getDb } from '../services/db';

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
