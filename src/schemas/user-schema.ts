import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from "mongoose";

export type BikeDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, type: IsEmail })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: null })
  token: string;

  @Prop({ default: null })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
