import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AUTH_URLs } from './constants/user-auth.constant';
import * as Contract from './interface/index';
import * as Model from './model/index';
import { User } from './model/index';

@Injectable({ providedIn: 'root' })
export class UserAuthenticationService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  public authUser(requsest: Contract.UserAuthRequest): Observable<Model.User> {
    return this.httpClient
      .post<Model.User>(`${this.baseUrl}/${AUTH_URLs.specialistLogin}`, requsest)
      .pipe(
        map((response: Contract.UserAuthResponse) => {
          return new User(response.access_token, response.type, response.id);
        })
      );
  }
  public authPOUser(requsest: Contract.UserAuthRequest): Observable<Model.User> {
    return this.httpClient
      .post<Model.User>(`${this.baseUrl}/${AUTH_URLs.projectownerLogin}`, requsest)
      .pipe(
        map((response: Contract.UserAuthResponse) => {
          return new User(response.access_token, response.type, response.id);
        })
      );
  }

  public authSSUser(requsest: Contract.UserAuthRequest): Observable<Model.User> {
    return this.httpClient
      .post<Model.User>(`${this.baseUrl}/${AUTH_URLs.skillsourceLogin}`, requsest)
      .pipe(
        map((response: Contract.UserAuthResponse) => {
          return new User(response.access_token, response.type, response.id);
        })
      );
  }
}
