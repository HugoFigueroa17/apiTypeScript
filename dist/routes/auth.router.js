"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const router_1 = require("../routes/router");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class AuthRouter extends router_1.BaseRouter {
    constructor() {
        super(auth_controller_1.AuthController, auth_middleware_1.AuthMiddleware);
    }
    routes() {
        this.router.get("/", (req, res) => this.controller.index(req, res));
        this.router.post("/auth", (req, res) => this.controller.auth(req, res));
    }
}
exports.AuthRouter = AuthRouter;
