/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { BikeModuleService } from "./bike-module.service";
import { CreateBikeDto } from "./dto/create-bike-dto";
import { Bike } from "src/schemas/bike-schemas";
import { UpdateStatusDto } from "./dto/update-status-dto";
import { IRez } from "src/helpers/statisticsCalculator";
import { Schema } from "mongoose";
import { UserIdFromReqDTO } from "src/auth/dto/register-dto";
import { AddBikePhotoDto } from "./dto/add-bike-photo-dto";
export declare class BikeModuleController {
    private readonly bikeService;
    constructor(bikeService: BikeModuleService);
    create(createCatDto: CreateBikeDto, req: UserIdFromReqDTO): Promise<Bike>;
    find(): Promise<Bike[]>;
    findUserBikes(req: UserIdFromReqDTO): Promise<Bike[]>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, Bike> & Bike & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<Bike>;
    getInfo(req: UserIdFromReqDTO): Promise<IRez>;
    uploadFile(file: Express.Multer.File, req: UserIdFromReqDTO, body: {
        id: Schema.Types.ObjectId;
    }): Promise<AddBikePhotoDto>;
}
