import { UserIdFromReqDTO } from "../dto/register-dto";
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    handleRequest(err: any, user: UserIdFromReqDTO, info: any, context: any, status: any): any;
}
export {};
