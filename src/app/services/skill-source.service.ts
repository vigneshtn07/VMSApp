import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'node:http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SKILL_SOURCE_URLs } from './constants/skill-source-constant';
import * as Contract from '../interface/index';

@Injectable({ providedIn: 'root' })
export class SkillSourceService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  register(request: Contract.SkillSourceRegisterRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SKILL_SOURCE_URLs.skillsourceRegister}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  resendemail(request: Contract.SkillSourceResendEmail): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SKILL_SOURCE_URLs.skillResendemail}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  verifyemail(request: Contract.SkillSourceEmailVerify): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SKILL_SOURCE_URLs.skillEmailverify}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  registrationstatus(request: Contract.SkillSourceRegistrationStatus): Observable<string> {
    return this.httpClient.post<string>(`${this.baseUrl}/${SKILL_SOURCE_URLs.registrationStatus}`, request).pipe(
      map((response: any) => {
        return response.status;
      })
    );
  }

  skillSourceUpdate(request: FormData): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SKILL_SOURCE_URLs.skillsourceEdit}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }


  uploadskillsource(request: FormData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${SKILL_SOURCE_URLs.skillsourceEdit}`, request, {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
      responseType: 'text',
    });
  }

}
