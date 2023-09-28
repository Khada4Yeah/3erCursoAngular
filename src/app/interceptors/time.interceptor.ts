import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}
  // Cada vez que se envie una solicitud se podra ver cuanto tiempo demoró
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const start = performance.now();
    return next.handle(request).pipe(
      tap((response) => {
        const time = performance.now() - start + 'ms';
        console.log(request.url, time);
      })
    );
  }
}
