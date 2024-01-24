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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_schema_1 = require("../schemas/user-schema");
const handleErrors_1 = require("../helpers/handleErrors");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async register({ email, password, }) {
        const user = await this.userModel.findOne({ email });
        if (user) {
            (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.FORBIDDEN, `Email - ${email} is already in use`);
        }
        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(password, salt);
        const newUser = await this.userModel.create({ email, password: hashPass });
        return newUser;
    }
    async logIn({ email, password, }) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.FORBIDDEN, `Email or Password is wrong`);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.FORBIDDEN, `Email or Password is wrong`);
        }
        const payload = { email: user.email, id: user._id };
        const token = this.jwtService.sign(payload);
        await this.userModel.findByIdAndUpdate(user._id, {
            token,
        });
        return {
            email: user.email,
            token,
        };
    }
    async logOut(id) {
        await this.userModel.findByIdAndUpdate(id, {
            token: null,
        });
        return {
            message: "User successfully logout",
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map