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


export interface viewregisteredusers {
    users: Array<allRegistredusers>;
    // message: string;
}

export interface getSingleuser {
    user: allRegistredusers;
    //message: string;
}


export interface allRegistredusers {
    status: string;
    userId: string;
    username: string;
    accountType: string;
    date: string;
    // assignedDate: string;
}