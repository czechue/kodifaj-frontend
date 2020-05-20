// todo: fix declaration
import { NextApiRequest } from 'next';
import { Db, MongoClient } from 'mongodb';
import { RawUserAuth0 } from './lib/models/user/user';

declare module 'next' {
  interface NextApiRequest extends NextApiRequest {
    db: Db;
    dbClient: MongoClient;
  }
}

declare global {
  interface Window {
    __user: RawUserAuth0;
  }
}
