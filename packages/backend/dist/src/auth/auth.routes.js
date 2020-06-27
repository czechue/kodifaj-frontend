"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('express').Router;
const passport_1 = __importDefault(require("passport"));
const router = Router();
router.get('/auth/github', passport_1.default.authenticate('github', {
    scope: ['read:user', 'public_repo'],
    session: true,
}));
router.get('/auth/github/callback', passport_1.default.authenticate('github'), (_req, res) => {
    console.log('redirect', _req.user);
    res.redirect('http://localhost:3000');
});
router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
router.get('/api/current_user', (req, res) => {
    console.log('api curr user', req.user);
    res.send(req.user);
});
exports.default = router;
