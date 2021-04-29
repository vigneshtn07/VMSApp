import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class VMSInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken: string = localStorage.getItem('token') ?? '';
    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${authToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('[HTTP_Logger]', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorResponse = {};
        errorResponse = {
          reason: error && error.error && error.error.reason ? error.error.reason : '',
          status: error.status,
        };
        return throwError(error);
      })
    );
  }
}
