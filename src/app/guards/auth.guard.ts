import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(
    private readonly supabase: SupabaseService,
    private router: Router
  ) {}
  async canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const session = await this.supabase.getSession();
    if (session) {
      // Hay una sesión activa, permitir el acceso a la ruta
      return true;
    } else {
      // No hay una sesión activa, redirigir al usuario a la página de inicio de sesión
      return this.router.parseUrl('/auth');
    }
  }
  
}
