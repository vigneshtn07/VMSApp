import { ProjectOwnerRegistrationRequest } from '../interface/project-owner-registration.interface';

export class ProjectOwnerRegistration implements ProjectOwnerRegistrationRequest {
    cname!: string;
    fedTaxId!: string;
    phoneno!: string;
    stateOfInc!: string;
    year!: string;
    industry!: string;
    division!: string;
    annualRevenue!: bigint;
    noOfContractor!: number;
    website!: string;
    address!: string;
    city!: string;
    state!: string;
    country!: string;
    pincode!: string;
    fullname!: string;
    phone!: string;
    email!: string;
    bfullname!: string;
    bphone!: string;
    bemail!: string;
    businessDesc!: string;
    invoice!: string;
    pname!: string;
    pdesc!: string;
    s1!: boolean;
    s2!: boolean;
    s3!: boolean;
    dec!: boolean;

    constructor() { }
}