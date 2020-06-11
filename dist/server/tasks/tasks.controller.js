"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_handlers_1 = require("./tasks.handlers");
const CreateTask_1 = require("../../lib/models/task/CreateTask");
function tasksController(server) {
    server.get('/api/tasks', (_req, res) => {
        return tasks_handlers_1.getAllTasks()
            .then((tasks) => {
            res.send(tasks);
        })
            .catch((e) => console.warn(e));
    });
    server.get('/api/tasks/:id', async (req, res) => {
        var _a;
        const taskId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        return tasks_handlers_1.getTaskById(taskId)
            .then((task) => {
            res.send(task);
        })
            .catch((e) => console.warn(e));
    });
    server.post('/api/tasks', async (req, res) => {
        var _a;
        const authorId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        if (!authorId) {
            res.status(403).send('No authorized');
            return;
        }
        const CreateTask = new CreateTask_1.CreateTaskModel(req.body, authorId);
        const createdTask = CreateTask.get();
        return tasks_handlers_1.createTask(createdTask).then((value) => console.log(value));
    });
}
exports.default = tasksController;
//# sourceMappingURL=tasks.controller.js.map