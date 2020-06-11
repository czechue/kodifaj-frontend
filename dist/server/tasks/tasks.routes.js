"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app, server) {
    server.get('/tasks/:[id]', (req, res) => {
        return app.render(req, res, '/tasks', {
            id: req.params.id,
        });
    });
    server.get('/tasks', (req, res) => {
        return app.render(req, res, '/');
    });
    server.get('/', (req, res) => {
        return app.render(req, res, '/');
    });
}
exports.default = routes;
//# sourceMappingURL=tasks.routes.js.map