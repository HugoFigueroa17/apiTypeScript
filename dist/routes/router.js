"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
class BaseRouter {
    constructor(TController, UMiddelware) {
        this.router = (0, express_1.Router)();
        this.controller = new TController();
        this.middleware = new UMiddelware();
        this.routes();
    }
    routes() { }
}
exports.BaseRouter = BaseRouter;
