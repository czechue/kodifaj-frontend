"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const db_1 = __importDefault(require("../services/db"));
const mongodb_1 = require("mongodb");
function getAllTasks() {
    return db_1.default
        .getDb()
        .db()
        .collection('tasks')
        .aggregate([
        { $lookup: { from: 'users', localField: '_user', foreignField: '_id', as: 'user' } },
    ])
        .toArray();
}
exports.getAllTasks = getAllTasks;
async function getTaskById(taskId) {
    return await db_1.default
        .getDb()
        .db()
        .collection('tasks')
        .aggregate([
        { $match: { _id: new mongodb_1.ObjectId(taskId) } },
        {
            $lookup: {
                from: 'solutions',
                let: {
                    solutions: '$_solutions',
                },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $in: ['$_id', '$$solutions'],
                            },
                        },
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: '_user',
                            foreignField: '_id',
                            as: '_user',
                        },
                    },
                    {
                        $unwind: '$_user',
                    },
                ],
                as: '_solutions',
            },
        },
    ])
        .next();
}
exports.getTaskById = getTaskById;
async function createTask(newTask) {
    return await db_1.default.getDb().db().collection('tasks').insertOne(newTask);
}
exports.createTask = createTask;
//# sourceMappingURL=tasks.handlers.js.map