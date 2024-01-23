import { IsNotEmpty, IsString } from "class-validator";

export class UploadPhotoDto {
  @IsNotEmpty()
  @IsString()
  readonly path: string;
}
