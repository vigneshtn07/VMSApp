import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PROJECT_OWNER_URLs } from './constants/project-owner.constant';
import * as Contract from '../interface/index';
import * as Model from '../models/index';
@Injectable({ providedIn: 'root' })
export class ProjectOwnerService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  register(request: Contract.ProjectOwnerRegisterRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${PROJECT_OWNER_URLs.projectOwnerSignUp}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  resendemail(request: Contract.ProjectOwnerResendEmail): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${PROJECT_OWNER_URLs.projectOwnerResendemail}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  verifyemail(request: Contract.ProjectOwnerEmailVerify): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${PROJECT_OWNER_URLs.projectOwnerEmailverify}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }


  registrationstatus(request: Contract.SkillSourceRegistrationStatus): Observable<string> {
    return this.httpClient
      .post<string>(`${this.baseUrl}/${PROJECT_OWNER_URLs.projectOwnerRegistrationStatus}`, request)
      .pipe(
        map((response: any) => {
          return response.status;
        })
      );
  }


  editregister(request: Contract.ProjectOwnerRegistrationRequest, id: any): Observable<any> {
    debugger;
    return this.httpClient
      .put(`${this.baseUrl}/${PROJECT_OWNER_URLs.projectOwnerEdit}/${id}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }


}
