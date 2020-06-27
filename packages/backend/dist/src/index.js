"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const keys_1 = __importDefault(require("./config/keys"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const users_controller_1 = __importDefault(require("./users/users.controller"));
const tasks_controller_1 = __importDefault(require("./tasks/tasks.controller"));
const passport_service_1 = __importDefault(require("./auth/passport.service"));
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const initDb = require('./services/db').initDb;
const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const server = express_1.default();
server.set('trust proxy', true);
server.use(body_parser_1.default.json());
server.use(cors_1.default({
    origin: ['http://localhost:3000', 'https://kodifaj.pl'],
    credentials: true,
}));
server.use(cookie_session_1.default({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys_1.default.cookieKey],
}));
server.use(passport_1.default.initialize());
server.use(passport_1.default.session());
passport_service_1.default(passport_1.default);
server.use(auth_routes_1.default);
server.use('/api/tasks', tasks_controller_1.default);
server.use('/api/users', users_controller_1.default);
initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        server.listen(port, () => {
            console.log(`> Ready on PORT: ${port}`);
        });
    }
});
