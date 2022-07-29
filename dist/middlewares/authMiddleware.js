"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddleware {
    index(req, res, next) {
        next();
    }
    validateJWT(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let token = req.get("authorization");
            if (token) {
                console.log(token);
                // Remove Bearer from string
                token = token.slice(7);
                const jwtSecret = ((_a = process.env['JWT_TOKEN_SECRET']) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                jsonwebtoken_1.default.verify(token, jwtSecret, (err, decoded) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            success: 0,
                            message: "Invalid Token..."
                        });
                    }
                    else {
                        //req.decoded = decoded;
                        next();
                    }
                });
            }
            else {
                return res.json({
                    success: 0,
                    message: "Access Denied! Unauthorized User"
                });
            }
        });
    } //updateUser
}
exports.AuthMiddleware = AuthMiddleware;
