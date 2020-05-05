import { Db, MongoClient } from 'mongodb';
import { NextHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

let _db: Db;

const initDb = (callback: (err: Error | null, db?: Db) => void): void => {
  if (_db) {
    console.log('Database is already initialized.');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGO_URI as string, { useUnifiedTopology: true })
    .then((client) => {
      _db = client.db();
      callback(null, _db);
    })
    .catch((err) => callback(err));
};

const getDb = () => {
  if (!_db) {
    throw Error('DB not initialized!');
  }
  return _db;
};

// const client = new MongoClient(process.env.MONGO_URI as string);
//
// export async function setUpDb(db: any) {
//   await db.collection('tokens').createIndex('expireAt', { expireAfterSeconds: 0 });
// }

export default async function database(
  req: any,
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
