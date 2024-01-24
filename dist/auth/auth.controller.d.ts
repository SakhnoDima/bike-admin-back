import { AuthService } from "./auth.service";
import { UserRegisterDTO } from "./dto/register-dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signInn(user: UserRegisterDTO): Promise<UserRegisterDTO>;
}
