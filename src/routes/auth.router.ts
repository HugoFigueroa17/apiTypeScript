import { BaseRouter } from "../routes/router";
import { AuthController } from "../controllers/auth.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRouter extends BaseRouter<AuthController,AuthMiddleware> {
  constructor() {
    super(AuthController,AuthMiddleware);
  }

  routes(): void {
    this.router.get("/", (req, res) => this.controller.index(req, res));
    this.router.post("/auth", (req,res) => this.controller.auth(req, res));
  }
}