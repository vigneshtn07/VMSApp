import { SkillSourceRegistrationStatusResponse } from '../interface';
import { UserAuthResponse } from '../interface/user-auth-response';

export class User implements UserAuthResponse {
  access_token: string;
  type: string;
  id: string;

  constructor(access_token: string, type: string, id: string) {
    this.access_token = access_token;
    this.type = type;
    this.id = id;
  }
}


export class RegistrationStatusResponse implements SkillSourceRegistrationStatusResponse {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}