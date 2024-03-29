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
exports.BikesSchema = exports.Bike = exports.Status = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const constants_1 = require("../bike-module/constant/constants");
var Status;
(function (Status) {
    Status[Status["available"] = 0] = "available";
    Status[Status["busy"] = 1] = "busy";
    Status[Status["unavailable"] = 2] = "unavailable";
})(Status || (exports.Status = Status = {}));
let Bike = class Bike {
};
exports.Bike = Bike;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Bike.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, enum: constants_1.bikeType }),
    __metadata("design:type", String)
], Bike.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Bike.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Bike.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Bike.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Bike.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Bike.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Status, default: Status[0] }),
    __metadata("design:type", String)
], Bike.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, require: true, ref: "user" }),
    __metadata("design:type", String)
], Bike.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Bike.prototype, "photo", void 0);
exports.Bike = Bike = __decorate([
    (0, mongoose_1.Schema)()
], Bike);
exports.BikesSchema = mongoose_1.SchemaFactory.createForClass(Bike);
//# sourceMappingURL=bike-schemas.js.map