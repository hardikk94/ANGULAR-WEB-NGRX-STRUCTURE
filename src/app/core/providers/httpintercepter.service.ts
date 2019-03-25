import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ResponseState } from './../../store/states/auth.state'
@Injectable({
  providedIn: 'root'
})
export class HTTPintercepterService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event
      })).catch((error: HttpErrorResponse) => {
        let errorResponse: ResponseState = {
          status: 'error',
          message: '',
          data: {},
          error: error
        }
        return throwError(errorResponse);
      });

  }
  constructor() { }
}
