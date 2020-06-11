"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./services/db"));
const keys_1 = __importDefault(require("./config/keys"));
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const tasks_routes_1 = __importDefault(require("./tasks/tasks.routes"));
const tasks_controller_1 = __importDefault(require("./tasks/tasks.controller"));
const users_controller_1 = __importDefault(require("./users/users.controller"));
const passport_service_1 = __importDefault(require("./auth/passport.service"));
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express_1.default();
    passport_service_1.default();
    server.use(body_parser_1.default.json());
    server.use(cookie_session_1.default({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys_1.default.cookieKey],
    }));
    server.use(passport_1.default.initialize());
    server.use(passport_1.default.session());
    tasks_controller_1.default(server);
    users_controller_1.default(server);
    auth_routes_1.default(app, server);
    tasks_routes_1.default(app, server);
    server.all('*', (req, res) => {
        return handle(req, res);
    });
    db_1.default.initDb((err) => {
        if (err) {
            console.log(err);
        }
        else {
            server.listen(port, () => {
                console.log(`> Ready on PORT: ${port}`);
            });
        }
    });
});
//# sourceMappingURL=index.js.map