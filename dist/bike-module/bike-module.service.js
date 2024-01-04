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
exports.BikeModuleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bike_schemas_1 = require("../schemas/bike-schemas");
const handleErrors_1 = require("../helpers/handleErrors");
const statisticsCalculator_1 = require("../helpers/statisticsCalculator");
let BikeModuleService = class BikeModuleService {
    constructor(bikeModel) {
        this.bikeModel = bikeModel;
    }
    async create(createBikeDto) {
        const idIsExist = await this.bikeModel.findOne({ id: createBikeDto.id });
        if (idIsExist)
            (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.FORBIDDEN, `Bike with id - ${createBikeDto.id} is exist`);
        const createBike = await this.bikeModel.create(createBikeDto);
        const newBike = await this.bikeModel.findById(createBike._id, "-__v");
        return newBike;
    }
    async findAll() {
        return await this.bikeModel.find().exec();
    }
    async delete(id) {
        const deletedBike = await this.bikeModel
            .findByIdAndDelete({ _id: id })
            .exec();
        if (!deletedBike) {
            (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.NOT_FOUND, `Bike with id ${id} not found`);
        }
        return deletedBike;
    }
    async update(id, status) {
        const bikeForUpdating = await this.bikeModel.findByIdAndUpdate(id, status, {
            new: true,
        });
        if (!bikeForUpdating) {
            (0, handleErrors_1.HttpErrors)(common_1.HttpStatus.NOT_FOUND, `Bike with id ${id} not found`);
        }
        return bikeForUpdating;
    }
    async getInfo() {
        const info = await this.bikeModel.aggregate([
            {
                $group: {
                    _id: "$status",
                    totalBike: { $count: {} },
                    avgPrice: { $avg: "$price" },
                },
            },
            { $project: { _id: 1, totalBike: 1, avgPrice: 1 } },
        ]);
        const rez = (0, statisticsCalculator_1.statisticsCalculator)(info);
        return rez;
    }
};
exports.BikeModuleService = BikeModuleService;
exports.BikeModuleService = BikeModuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bike_schemas_1.Bike.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BikeModuleService);
//# sourceMappingURL=bike-module.service.js.map