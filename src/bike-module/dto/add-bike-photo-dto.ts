import { IsString } from "class-validator";
import { CreateBikeDto } from "./create-bike-dto";

export class AddBikePhotoDto extends CreateBikeDto {
  @IsString()
  readonly photo: string;
}
