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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { BikeModuleService } from "./bike-module.service";
import { CreateBikeDto } from "./dto/create-bike-dto";
import { Response } from "express";
import { Bike } from "src/schemas/bike-schemas";
import { UpdateStatusDto } from "./dto/update-status-dto";
export declare class BikeModuleController {
    private readonly bikeService;
    constructor(bikeService: BikeModuleService);
    create(createCatDto: CreateBikeDto, res: Response): Promise<void>;
    find(): Promise<Bike[]>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, Bike> & Bike & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<Bike>;
    getInfo(): Promise<void>;
}
