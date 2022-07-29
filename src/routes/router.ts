import { Router } from "express";

export class BaseRouter<T,U> {
  public router: Router;
  public controller: T;
  public middleware: U;

  constructor(TController: { new (): T }, UMiddelware: {new () : U }) {
    this.router = Router();
    this.controller = new TController();
    this.middleware = new UMiddelware();
    this.routes();
  }

  routes() {}
}