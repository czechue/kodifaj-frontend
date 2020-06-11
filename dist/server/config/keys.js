"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const prod_1 = __importDefault(require("./prod"));
const dev_1 = __importDefault(require("./dev"));
const keys = process.env.NODE_ENV === 'production' ? prod_1.default : dev_1.default;
exports.default = keys;
//# sourceMappingURL=keys.js.map