"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUser = exports.getUsers = void 0;
const mongodb_1 = require("mongodb");
const db_1 = require("../services/db");
function getUsers() {
    return db_1.getDb().db().collection('users').find().toArray();
}
exports.getUsers = getUsers;
function getUser(user) {
    return db_1.getDb().db().collection('users').findOne(user);
}
exports.getUser = getUser;
function getUserById(userId) {
    return db_1.getDb()
        .db()
        .collection('users')
        .findOne({ _id: new mongodb_1.ObjectId(userId) })
        .then((data) => {
        return data;
    });
}
exports.getUserById = getUserById;
async function createUser(newUser) {
    return await db_1.getDb().db().collection('users').insertOne(newUser);
}
exports.createUser = createUser;
//# sourceMappingURL=users.handlers.js.map