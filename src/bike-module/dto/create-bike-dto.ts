import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from "class-validator";
import { bikeType } from "../constant/constants";
import { Schema } from "mongoose";

export class CreateBikeDto {
  readonly _id: Object;
  readonly owner: Schema.Types.ObjectId;
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(bikeType)
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly color: string;

  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly id: string;

  @IsString()
  readonly description: string;
}
