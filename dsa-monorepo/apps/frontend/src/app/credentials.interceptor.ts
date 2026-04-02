import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HTTP Interceptor that adds credentials to all requests
 * This allows cookies (sessions) to be sent with cross-origin requests
 */
@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request and add withCredentials
    const credentialsReq = req.clone({
      withCredentials: true,
    });

    return next.handle(credentialsReq);
  }
}
