"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const router_1 = require("../routes/router");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController, auth_middleware_1.AuthMiddleware);
    }
    routes() {
        this.router.get("/users", (req, res, next) => this.middleware.validateJWT(req, res, next), (req, res) => this.controller.getAllUsers(req, res));
        this.router.get("/user/:id", (req, res, next) => this.middleware.validateJWT(req, res, next), (req, res) => this.controller.getUserByID(req, res));
    }
} //UserRouter
exports.UserRouter = UserRouter;
