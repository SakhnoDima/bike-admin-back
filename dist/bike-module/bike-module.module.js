"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeModuleModule = void 0;
const common_1 = require("@nestjs/common");
const bike_module_controller_1 = require("./bike-module.controller");
const bike_module_service_1 = require("./bike-module.service");
const mongoose_1 = require("@nestjs/mongoose");
const bike_schemas_1 = require("../schemas/bike-schemas");
const cloudinary_provider_1 = require("./cloudinary-provider");
let BikeModuleModule = class BikeModuleModule {
};
exports.BikeModuleModule = BikeModuleModule;
exports.BikeModuleModule = BikeModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bike_schemas_1.Bike.name, schema: bike_schemas_1.CatSchema }]),
        ],
        controllers: [bike_module_controller_1.BikeModuleController],
        providers: [bike_module_service_1.BikeModuleService, cloudinary_provider_1.CloudinaryProvider],
    })
], BikeModuleModule);
//# sourceMappingURL=bike-module.module.js.map