import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaType, SchemaTypes } from "mongoose";
import { bikeType } from "src/bike-module/constant/constants";

export type BikeDocument = HydratedDocument<Bike>;

export enum Status {
  "available",
  "busy",
  "unavailable",
}

@Schema()
export class Bike {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: String, enum: bikeType })
  type: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  id: string;

  @Prop()
  description: string;

  @Prop({ type: String, enum: Status, default: Status[0] })
  status: string;

  @Prop({ type: SchemaTypes.ObjectId, require: true, ref: "user" })
  owner: string;

  @Prop({ type: String, required: false })
  photo: string;
}

export const BikesSchema = SchemaFactory.createForClass(Bike);
