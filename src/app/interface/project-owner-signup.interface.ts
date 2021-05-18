export interface ProjectOwnerRegisterRequest {
    email: string;
    password: string;
}
export interface ProjectOwnerResendEmail {
    fname: string;
    email: string;
}

export interface ProjectOwnerEmailVerify {
    string: string;
}

export interface ProjectOwnerRegistrationStatusResponse {
    status: string;
}

export interface ProjectOwnerStatement {
    id: number;
    title: string;
    checked: boolean;
    formkey: boolean;
}
