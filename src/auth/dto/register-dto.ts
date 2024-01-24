import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserRegisterResponseDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;
}

export class UserRegisterRequestDTO extends UserRegisterResponseDTO {
  @IsNotEmpty()
  @IsString()
  //! ===  @IsStrongPassword()  === проверить
  readonly password: string;
}

export class UserWithTokenDTO extends UserRegisterResponseDTO {
  @IsNotEmpty()
  @IsString()
  readonly token: string;
}
