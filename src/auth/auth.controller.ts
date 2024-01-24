import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  UserRegisterRequestDTO,
  UserRegisterResponseDTO,
  UserWithTokenDTO,
} from "./dto/register-dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  register(
    @Body() user: UserRegisterRequestDTO
  ): Promise<UserRegisterResponseDTO> {
    return this.authService.register(user);
  }
  @Post("logIn")
  loginIn(@Body() user: UserRegisterRequestDTO): Promise<UserWithTokenDTO> {
    return this.authService.logIn(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logOut")
  logOut(@Request() req) {
    return this.authService.logOut(req.user.id);
  }
}
