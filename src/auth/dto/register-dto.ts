import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserRegisterDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  //! ===  @IsStrongPassword()  === проверить
  readonly password: string;
}
