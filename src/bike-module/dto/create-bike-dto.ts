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

  readonly _id: Object;

  @IsString()
  readonly description: string;

  readonly owner: Schema.Types.ObjectId;
}
