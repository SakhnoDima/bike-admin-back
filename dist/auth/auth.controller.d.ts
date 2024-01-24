import { AuthService } from "./auth.service";
import { UserRegisterRequestDTO, UserRegisterResponseDTO, UserWithTokenDTO } from "./dto/register-dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: UserRegisterRequestDTO): Promise<UserRegisterResponseDTO>;
    loginIn(user: UserRegisterRequestDTO): Promise<UserWithTokenDTO>;
    logOut(req: any): Promise<{
        message: string;
    }>;
}
