import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateBikeDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  readonly color: string;

  @IsNotEmpty()
  @IsNumber()
  readonly wheelSize: number;

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
