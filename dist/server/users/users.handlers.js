"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUser = exports.getUsers = void 0;
const db_1 = __importDefault(require("../services/db"));
const mongodb_1 = require("mongodb");
function getUsers() {
    return db_1.default.getDb().db().collection('users').find().toArray();
}
exports.getUsers = getUsers;
function getUser(user) {
    return db_1.default.getDb().db().collection('users').findOne(user);
}
exports.getUser = getUser;
function getUserById(userId) {
    return db_1.default
        .getDb()
        .db()
        .collection('users')
        .findOne({ _id: new mongodb_1.ObjectId(userId) })
        .then((data) => {
        console.log('x', data);
        return data;
    });
}
exports.getUserById = getUserById;
async function createUser(newUser) {
    return await db_1.default.getDb().db().collection('users').insertOne(newUser);
}
exports.createUser = createUser;
//# sourceMappingURL=users.handlers.js.map