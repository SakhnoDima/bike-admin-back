import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BikeDocument = HydratedDocument<Bike>;

enum Status {
  AVAILABLE = 'available',
  BUSY = 'busy',
  UNAVAILABLE = 'unavailable',
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
  wheelSize: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: String, enum: Status, default: Status.AVAILABLE })
  status: Status;
}

export const CatSchema = SchemaFactory.createForClass(Bike);
