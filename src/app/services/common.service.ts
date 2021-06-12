import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { COMMON_API_URLs } from './constants/common-api-url.constants';
import * as Contract from '../interface/index';
import { viewregisteredusers, getSingleuser } from '../interface/index';

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

  viewAllUsers(): Observable<any> {
    return this.httpClient
      .post<viewregisteredusers>(`${this.baseUrl}/${COMMON_API_URLs.viewAllusers}`, {
        // responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response.users;
        })
      );
  }

  getSingleRecord(id: any): Observable<any> {
    return this.httpClient
      .get<getSingleuser>(`${this.baseUrl}/${COMMON_API_URLs.getSingleRecord}/${id}`, {
        // responseType: 'text',
      })
      .pipe(
        map((response) => {
          return response.user;
        })
      );
  }



}
