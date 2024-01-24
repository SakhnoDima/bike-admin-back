import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from "mongoose";
import { bikeType } from "src/bike-module/constant/constants";

export type BikeDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, type: IsEmail })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
