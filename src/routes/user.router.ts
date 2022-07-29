import { BaseRouter } from "../routes/router";
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class UserRouter extends BaseRouter<UserController,AuthMiddleware> {
  constructor() {
    super(UserController,AuthMiddleware);
  }

  routes(): void {
    this.router.get("/users", (req,res, next)=>this.middleware.validateJWT(req,res,next),(req, res) => this.controller.getAllUsers(req, res));
    this.router.get("/user/:id", (req,res, next)=>this.middleware.validateJWT(req,res,next),(req, res) => this.controller.getUserByID(req, res));
  }

}//UserRouter