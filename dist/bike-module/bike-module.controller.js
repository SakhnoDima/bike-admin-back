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
exports.BikeModuleController = void 0;
const common_1 = require("@nestjs/common");
const bike_module_service_1 = require("./bike-module.service");
const create_bike_dto_1 = require("./dto/create-bike-dto");
const update_status_dto_1 = require("./dto/update-status-dto");
let BikeModuleController = class BikeModuleController {
    constructor(bikeService) {
        this.bikeService = bikeService;
    }
    async create(createCatDto) {
        return await this.bikeService.create(createCatDto);
    }
    async find() {
        return await this.bikeService.findAll();
    }
    async delete(id) {
        return this.bikeService.delete(id);
    }
    async update(id, updateStatusDto) {
        return this.bikeService.update(id, updateStatusDto);
    }
    async getInfo() {
        return await this.bikeService.getInfo();
    }
};
exports.BikeModuleController = BikeModuleController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bike_dto_1.CreateBikeDto]),
    __metadata("design:returntype", Promise)
], BikeModuleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BikeModuleController.prototype, "find", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BikeModuleController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], BikeModuleController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("/info"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BikeModuleController.prototype, "getInfo", null);
exports.BikeModuleController = BikeModuleController = __decorate([
    (0, common_1.Controller)("bike"),
    __metadata("design:paramtypes", [bike_module_service_1.BikeModuleService])
], BikeModuleController);
//# sourceMappingURL=bike-module.controller.js.map