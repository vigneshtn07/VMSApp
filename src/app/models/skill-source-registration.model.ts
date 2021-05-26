import { SkillSourceRegistrationRequest } from '../interface/skill-source-registration.interface';

export class SkillSourceRegistration implements SkillSourceRegistrationRequest {
  cname!: string;
  fedTaxId!: string;
  phoneno!: string;
  cstate!: string;
  year!: string;
  industry!: string;
  division!: string;
  payroll!: string;
  address!: string;
  noOfEmployees!: string;
  noOfFulltime!: string;
  noOfSubContractors!: string;
  HWorkers!: string;
  noOfVisa!: string;
  website!: string;
  city!: string;
  state!: string;
  country!: string;
  pincode!: string;
  fullname!: string;
  email!: string;
  area!: string;
  phone!: string;
  bname!: string;
  bemail!: string;
  bphone!: string;
  topSkills!: string;
  benefits!: string;
  service!: string;
  training!: string;
  naics!: string;
  dnb!: string;
  wForm!: File;
  article!: File;
  goodStanding!: File;
  lastQuaters!: File;
  reason!: string;
  repName!: string;
  repTitle!: string;
  signature!: File;
  password!: string;
  id!: string;
  constructor() { }
}
