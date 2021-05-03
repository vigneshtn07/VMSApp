import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SPECIALIST_URLs } from './constants/specialist.constant';
import * as Contract from './interface/index';

@Injectable({ providedIn: 'root' })
export class SpecialistService {
  private baseUrl: string = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) {}

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
}
