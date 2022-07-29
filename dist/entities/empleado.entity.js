"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoEntity = void 0;
const typeorm_1 = require("typeorm");
const basic_entity_1 = require("../config/basic.entity");
let EmpleadoEntity = class EmpleadoEntity extends basic_entity_1.BasicEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmpleadoEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmpleadoEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1000 }),
    __metadata("design:type", String)
], EmpleadoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EmpleadoEntity.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], EmpleadoEntity.prototype, "jobPosition", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 12 }),
    __metadata("design:type", String)
], EmpleadoEntity.prototype, "numberPhone", void 0);
EmpleadoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "empleado" })
], EmpleadoEntity);
exports.EmpleadoEntity = EmpleadoEntity;
