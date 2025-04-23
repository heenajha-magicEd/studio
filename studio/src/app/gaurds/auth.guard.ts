import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { I } from 'node_modules/@angular/common/common_module.d-Qx8B6pmN';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the guard globally available
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const targetRoute = route.routeConfig?.path;

    if (isLoggedIn && (targetRoute === '' || targetRoute === 'login')) {
      // User is logged in but trying to access login or root — redirect to home
      this.router.navigate(['/home']);
      return false;
    }

    if (!isLoggedIn && targetRoute !== 'login' && targetRoute !== '') {
      // User is not logged in and trying to access a protected route — redirect to login
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
