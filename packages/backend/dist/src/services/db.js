"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const mongoClient = mongodb_1.default.MongoClient;
const mongoDbUrl = 'mongodb://mo1272_kodifaj_p:Cymbalki15!@195.167.159.159:27017/mo1272_kodifaj_p';
let _db;
const initDb = (callback) => {
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
const getDb = () => {
    if (!_db) {
        throw Error('Database not initialzed');
    }
    return _db;
};
module.exports = {
    initDb,
    getDb,
};
//# sourceMappingURL=db.js.map