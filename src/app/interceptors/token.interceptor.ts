import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, from, mergeMap } from 'rxjs';
import { SupabaseService } from '../services/supabase.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private supabase: SupabaseService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Obtener el token de acceso del usuario
    const sessionPromise = this.supabase.getSession();
    const tokenPromise = sessionPromise.then(session => session?.access_token);
    return from(tokenPromise).pipe(
      mergeMap(token => {
        if (token) {
          // Clonar la solicitud y agregar la cabecera Authorization con el token de acceso del usuario
          const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
          });
          // Enviar la solicitud clonada con la cabecera Authorization
          return next.handle(authReq);
        } else {
          // Si no hay token, verificar si la solicitud es un POST, PATCH o DELETE
          if (['POST', 'PATCH', 'DELETE'].includes(request.method)) {
            // Si es así, lanzar un error porque el usuario no está autenticado
            throw new Error('Usuario no autenticado');
          } else {
          // Enviar la solicitud original sin modificar
          return next.handle(request);
        }
      }
    })
    );
  }
}


