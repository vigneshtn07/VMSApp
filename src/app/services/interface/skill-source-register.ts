export interface SkillSourceRegisterRequest {
    email: string;
    password: string;
}

export interface SkillSourceResendEmail {
    fname: string;
    email: string;
}

export interface SkillSourceEmailVerify {
    string: string;
}

export interface SkillSourceRegistrationStatus {
    email: string;
}

export interface SkillSourceRegistrationStatusResponse {
    status: string;
}

