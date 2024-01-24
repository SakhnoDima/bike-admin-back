export declare class UserRegisterResponseDTO {
    readonly email: string;
}
export declare class UserRegisterRequestDTO extends UserRegisterResponseDTO {
    readonly password: string;
}
export declare class UserWithTokenDTO extends UserRegisterResponseDTO {
    readonly token: string;
}
