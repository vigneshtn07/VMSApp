export interface SpecialistRegisterRequest {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export interface EditSpecialistRequest {
  fname: string;
  lname: string;
  email: string;
  dob: string;
  gender: string;
  phoneno: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  passNumber: string;
  linkedinLink: string;
  roles: string;
  indKnowledge: string;
  check: boolean;
  skills: string;
}

