import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the guard globally available
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // if (isLoggedIn === 'true' && userType === 'admin') {
    if (isLoggedIn === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not logged in
      return false;
    }
  }
}
