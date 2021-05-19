import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { STORAGE_KEYS } from '../storage/storage.constants';

@Injectable()
export class VMSInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken: string = localStorage.getItem(STORAGE_KEYS.AuthToken) ?? '';
    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer  ${authToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        // uncomment for logging response
        // if (event instanceof HttpResponse) { 
        //   console.log('event--->>>', event);
        // }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          let errorResponse = {};
          errorResponse = {
            reason: error && error.error ? error.error : 'Something went wrong..!',
            status: error.status,
          };
          return throwError(error);
        }
        return throwError('[API ERROR]');
      })
    );
  }
}
