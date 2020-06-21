"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('express').Router;
const tasks_handlers_1 = require("./tasks.handlers");
const common_1 = require("@kodifaj/common");
const router = Router();
// export default function tasksController(server: Express): void {
router.get('', (_req, res) => {
    return tasks_handlers_1.getAllTasks()
        .then((tasks) => {
        res.send(tasks);
    })
        .catch((e) => console.warn(e));
});
router.get('/:id', (req, res) => {
    var _a;
    const taskId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    return tasks_handlers_1.getTaskById(taskId)
        .then((task) => {
        res.send(task);
    })
        .catch((e) => console.warn(e));
});
router.post('', (req, res) => {
    var _a;
    const authorId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
    if (!authorId) {
        res.status(403).send('No authorized');
        return;
    }
    const CreateTask = new common_1.CreateTaskModel(req.body, authorId);
    const createdTask = CreateTask.get();
    return tasks_handlers_1.createTask(createdTask).then((value) => console.log(value));
});
// }
exports.default = router;
