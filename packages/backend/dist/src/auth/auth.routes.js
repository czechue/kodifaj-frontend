"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
function authRoutes(server) {
    server.get('/auth/github', passport_1.default.authenticate('github', {
        scope: ['read:user', 'public_repo'],
    }));
    server.get('/auth/github/callback', passport_1.default.authenticate('github'), (_req, res) => {
        res.redirect('/');
    });
    server.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    server.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
exports.default = authRoutes;
