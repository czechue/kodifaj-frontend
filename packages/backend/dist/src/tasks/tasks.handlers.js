"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const mongodb_1 = require("mongodb");
const getDb = require('../services/db').getDb;
function getAllTasks() {
    return getDb()
        .db()
        .collection('tasks')
        .aggregate([
        { $lookup: { from: 'users', localField: '_user', foreignField: '_id', as: 'user' } },
    ])
        .toArray();
}
exports.getAllTasks = getAllTasks;
async function getTaskById(taskId) {
    return await getDb()
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
    return await getDb().db().collection('tasks').insertOne(newTask);
}
exports.createTask = createTask;
