import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/dataTypes.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      return true;
    }
    return false;
  }

  // Get the current user data from localStorage
  getCurrentUser(): User | null {
    try {
      const storedUserData = localStorage.getItem('userData');
      return storedUserData ? JSON.parse(storedUserData) : null;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return null;
    }
  }

  // Method to save user data to localStorage (upon login)
  saveUserData(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['/login']);
    }, 1000);
  }
}
