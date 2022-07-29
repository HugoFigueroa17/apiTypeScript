"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class FunctionsHelper {
    encryptPassword(string) {
        const hash = bcryptjs_1.default.hashSync(string, 10);
        return hash;
    } //encryptPassword
    generateAccessToken(datos) {
        var _a;
        const jwtSecret = ((_a = process.env['JWT_TOKEN_SECRET']) === null || _a === void 0 ? void 0 : _a.trim()) || '';
        return jsonwebtoken_1.default.sign(datos, jwtSecret, { expiresIn: process.env['JWT_EXPIRES_IN'] });
    } //generateAccessToken
}
exports.default = FunctionsHelper;
