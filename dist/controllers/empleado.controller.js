"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
//import { empleadoEntity } from "../entities/empleado.entity";
class AuthController {
    index(req, res) {
        return res.json({
            success: 0,
            message: "Api is runnign...!"
        });
    }
} //AuthController
exports.AuthController = AuthController;
