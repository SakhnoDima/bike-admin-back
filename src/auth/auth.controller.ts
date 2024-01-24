import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserRegisterDTO } from "./dto/register-dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  signInn(@Body() user: UserRegisterDTO): Promise<UserRegisterDTO> {
    return this.authService.register(user);
  }
}
