"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const keys_1 = __importDefault(require("../config/keys"));
const users_handlers_1 = require("../users/users.handlers");
const common_1 = require("@kodifaj/common");
const GitHubStrategy = require('passport-github2').Strategy;
function passportService() {
    passport_1.default.serializeUser((user, done) => {
        done(undefined, user._id);
    });
    passport_1.default.deserializeUser((id, done) => {
        users_handlers_1.getUserById(id).then((user) => {
            done(undefined, user);
        });
    });
    passport_1.default.use(new GitHubStrategy({
        clientID: keys_1.default.githubClientID,
        clientSecret: keys_1.default.githubClientSecret,
        callbackURL: '/auth/github/callback',
    }, async (_accessToken, _refreshToken, profile, done) => {
        const existingUser = await users_handlers_1.getUser({
            githubId: profile.id,
        });
        if (existingUser) {
            return done(undefined, existingUser);
        }
        const createdUser = new common_1.CreateUserModel(profile);
        users_handlers_1.createUser(createdUser.get())
            .then(() => {
            done(undefined, createdUser);
        })
            .catch((e) => {
            done(e);
        });
    }));
}
exports.default = passportService;
//# sourceMappingURL=passport.service.js.map