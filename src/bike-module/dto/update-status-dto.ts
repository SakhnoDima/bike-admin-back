import { IsEnum, IsNotEmpty } from "class-validator";
import { Status } from "src/schemas/bike-schemas";

export class UpdateStatusDto {
  @IsNotEmpty()
  @IsEnum(Status)
  readonly status: string;
}
