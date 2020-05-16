// todo: fix declaration
import { NextApiRequest } from 'next';
import { Db, MongoClient } from 'mongodb';

declare module 'next' {
  interface NextApiRequest extends NextApiRequest {
    db: Db;
    dbClient: MongoClient;
  }
}
