import mongodb, { MongoClient } from 'mongodb';

const mongoClient = mongodb.MongoClient;
const mongoDbUrl = 'mongodb://mo1272_kodifaj_p:Cymbalki15!@195.167.159.159:27017/mo1272_kodifaj_p';

let _db: MongoClient;

const initDb = (callback: (err: Error | null, db?: MongoClient) => void): void => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }

  mongoClient
    .connect(mongoDbUrl, { useUnifiedTopology: true })
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = (): MongoClient => {
  if (!_db) {
    throw Error('Database not initialzed');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
