import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,  } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.has('HeaderInterceptor')) {

            // no necesita estar auth para hacer la agregacion de la cabecera
            const addHeader = request.clone({
              headers: request.headers.set('apikey', environment.supabase.publickey)
            });
            return next.handle(addHeader);
          } else {
            return next.handle(request);
          }
    }

  }



