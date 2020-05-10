import { Db, MongoClient } from 'mongodb';
import { NextHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

let _db: Db;

const initDb = (callback: (err: Error | null, db: Db) => void): void => {
  if (_db) {
    console.log('Database is already initialized.');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGO_URI as string, { useUnifiedTopology: true })
    .then((client) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err) => callback(err, _db));
};

export default async function database(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler,
): Promise<void> {
  initDb((err, db) => {
    if (err) {
      console.log(err);
    } else {
      req.db = db;
      return next();
    }
  });
}
