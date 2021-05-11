import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { COMMON_API_URLs } from './constants/common-api-url.constants';
import * as Contract from './interface/index';

@Injectable({ providedIn: 'root' })
export class CommonService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }
  forgotPassword(request: Contract.ForgotPasswordRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${COMMON_API_URLs.forgotPassword}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
  createPassword(request: Contract.createPasswordRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${COMMON_API_URLs.createPassword}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  additionalInfoRequest(request: Contract.additionalInfoRequest): Observable<any> {
    return this.httpClient
      .post(`${this.baseUrl}/${COMMON_API_URLs.additionalInfo}`, request, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

}
