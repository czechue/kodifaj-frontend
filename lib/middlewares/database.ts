import { Db, MongoClient } from 'mongodb';
import { NextHandler } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

let _db: Db;
let _client: MongoClient;

const initDb = (callback: (err: Error | null, db: Db, client: MongoClient) => void): void => {
  if (_db && _client) {
    console.log('Database is already initialized.');
    return callback(null, _db, _client);
  }
  MongoClient.connect(process.env.MONGO_URI as string, { useUnifiedTopology: true })
    .then((client) => {
      _db = client.db();
      _client = client;
      callback(null, _db, _client);
    })
    .catch((err) => callback(err, _db, _client));
};

export default async function database(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler,
): Promise<void> {
  initDb((err, db, client) => {
    if (err) {
      console.log(err);
    } else {
      req.dbClient = client;
      req.db = db;
      return next();
    }
  });
}
