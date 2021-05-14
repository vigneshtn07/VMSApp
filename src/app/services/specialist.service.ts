import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SPECIALIST_URLs } from './constants/specialist.constant';
import * as Contract from './interface/index';

@Injectable({ providedIn: 'root' })
export class SpecialistService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  register(request: Contract.SpecialistRegisterRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SPECIALIST_URLs.specialistRegister}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  editregister(request: Contract.EditSpecialistRequest, id: any): Observable<any> {
    return this.httpClient
      .put(`${this.baseUrl}/${SPECIALIST_URLs.editspecialist}/${id}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  resendemail(request: Contract.SpecialistResendEmail): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SPECIALIST_URLs.resendEmailSpecialist}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  verifyemail(request: Contract.SpecialistEmailVerify): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${SPECIALIST_URLs.specialistEmailVerify}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

}
