import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Interception In Progress');
    const token = localStorage.getItem('admin');
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log('Interception Ending'); 

    return next.handle(
      req.clone({
        setHeaders: { authorization: `Bearer ${token}` },
      })
    );
  }
}
