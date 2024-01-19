import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from "class-validator";
import { bikeType } from "../constant/constants";

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
  @MinLength(5)
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

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly description: string;
}
