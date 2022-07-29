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
exports.AuthController = void 0;
const empleado_entity_1 = require("../entities/empleado.entity");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const functions_helper_1 = __importDefault(require("../helpers/functions.helper"));
class AuthController {
    index(req, res) {
        return res.status(200).json({ message: "Api is running...!!" });
    } //index
    auth(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            if (username && password) {
                const user = yield empleado_entity_1.EmpleadoEntity.findOneBy({ username: username.trim() });
                if (!user) {
                    return res.status(404).json({ success: 0, message: "Username not found" });
                }
                else {
                    if (user.status === 1) {
                        const isCorrectPassword = bcryptjs_1.default.compareSync(password, ((_a = user === null || user === void 0 ? void 0 : user.password) === null || _a === void 0 ? void 0 : _a.toString()) || '');
                        user.password = '';
                        if (isCorrectPassword) {
                            const token = new functions_helper_1.default().generateAccessToken({ user });
                            return res.status(200).json({
                                success: 1,
                                message: "Login successfully",
                                token: token
                            });
                        }
                        else {
                            return res.status(500).json({ success: 0, message: "Sorry your password is incorrect!" });
                        }
                    }
                    else {
                        return res.status(500).json({ success: 0, message: "Sorry your account is inactive!" });
                    }
                }
            }
            else {
                return res.status(500).json({ success: 0, message: "Username and password are required!" });
            }
        });
    } //auth
} //AuthController
exports.AuthController = AuthController;
