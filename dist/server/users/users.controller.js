"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_handlers_1 = require("./users.handlers");
function usersController(server) {
    server.get('/api/users', (_req, res) => {
        return users_handlers_1.getUsers()
            .then((users) => {
            res.send(users);
        })
            .catch((e) => console.warn(e));
    });
    server.get('/api/users/:id', (req, res) => {
        var _a;
        const userId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        return users_handlers_1.getUserById(userId)
            .then((user) => {
            res.send(user);
        })
            .catch((e) => console.warn(e));
    });
}
exports.default = usersController;
//# sourceMappingURL=users.controller.js.map