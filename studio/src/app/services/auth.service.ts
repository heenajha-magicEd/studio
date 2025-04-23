declare var google: any;
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/dataTypes.model';
import { environment as env } from 'src/environment';

interface GoogleTokenPayload {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

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

  initGoogleLogin(): void {
    google.accounts.id.initialize({
      client_id: env.GOOGLE_CLIENT_ID,
      callback: (response: any) => {
        const token = response.credential;

        // Decode the ID token (JWT) to get user info
        const userData: GoogleTokenPayload = jwtDecode(token);

        // Save to localStorage or your app state
        this.saveUserData(userData);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/home']);
      },
    });

    google.accounts.id.renderButton(
      document.getElementById('googleSignInBtn') as HTMLElement,
      {
        theme: 'filled_black',
        size: 'large',
        width: 350,
        shape: 'rectangular',
      }
    );
  }

  // Method to save user data to localStorage (upon login)
  saveUserData(user: any): void {
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
