"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const handleErrors_1 = require("../../helpers/handleErrors");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)("jwt") {
    handleRequest(err, user, info, context, status) {
        if (info instanceof jwt_1.JsonWebTokenError) {
            throw (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.UNAUTHORIZED, `Expire token`);
        }
        return super.handleRequest(err, user, info, context, status);
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map