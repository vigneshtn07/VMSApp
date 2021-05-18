export interface ForgotPasswordRequest {
    email: string;
}

export interface createPasswordRequest {
    id: string;
    password: string;
}

export interface additionalInfoRequest {
    email: string;
    fname: string;
    link: string;
}
