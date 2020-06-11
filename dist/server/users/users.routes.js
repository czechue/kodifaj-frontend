"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app, server) {
    server.get('/users/:[id]', (req, res) => {
        return app.render(req, res, '/users', {
            id: req.params.id,
        });
    });
}
exports.default = routes;
//# sourceMappingURL=users.routes.js.map