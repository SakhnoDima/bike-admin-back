import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

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

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  wheelSize: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, enum: Status, default: Status[0] })
  status: string;
}

export const CatSchema = SchemaFactory.createForClass(Bike);
