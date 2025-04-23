declare var google: any;
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    IftaLabelModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signUpForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.loginForm = this.fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.viewSignUpForm();
    this.viewLoginForm();
    this.loadGoogleBtn();
  }

  loadGoogleBtn() {
    this.auth.initGoogleLogin();
  }

  onSignUpSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      localStorage.setItem('userData', JSON.stringify(formData));
      this.signUpForm.reset();
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        if (
          parsedUserData.email === formData.loginEmail &&
          parsedUserData.password === formData.loginPassword
        ) {
          this.userSuccessfullyLoggedIn();
        } else {
          alert('Login failed: Invalid credentials');
        }
      } else {
        alert('No user data found in local storage.');
      }
    }
  }

  userSuccessfullyLoggedIn() {
    this.router?.navigate(['/home']);
    localStorage.setItem('isLoggedIn', 'true');
  }

  viewSignUpForm() {
    const container = document.getElementById('container');
    const signUpButton = document.getElementById('signUp');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add('right-panel-active');
    });
  }

  viewLoginForm() {
    const container = document.getElementById('container');
    const signInButton = document.getElementById('signIn');

    signInButton?.addEventListener('click', () => {
      container?.classList.remove('right-panel-active');
    });
  }
}
