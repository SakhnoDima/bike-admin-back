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
import { HydratedDocument } from "mongoose";
export type BikeDocument = HydratedDocument<Bike>;
export declare enum Status {
    "available" = 0,
    "busy" = 1,
    "unavailable" = 2
}
export declare class Bike {
    name: string;
    type: string;
    color: string;
    wheelSize: number;
    price: number;
    id: string;
    description: string;
    status: string;
}
export declare const CatSchema: import("mongoose").Schema<Bike, import("mongoose").Model<Bike, any, any, any, import("mongoose").Document<unknown, any, Bike> & Bike & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Bike, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Bike>> & import("mongoose").FlatRecord<Bike> & {
    _id: import("mongoose").Types.ObjectId;
}>;
