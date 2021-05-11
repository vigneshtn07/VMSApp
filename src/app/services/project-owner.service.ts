import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PROJECT_OWNER_URLs } from './constants/project-owner.constant';
import * as Contract from './interface/index';

@Injectable({ providedIn: 'root' })
export class ProjectOwnerService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  register(request: Contract.ProjectOwnerRegisterRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${PROJECT_OWNER_URLs.projectOwnerRegister}`, request, {
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
}
