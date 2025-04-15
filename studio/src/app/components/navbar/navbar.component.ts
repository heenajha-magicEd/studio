import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    Menubar,
    BadgeModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  loggedIn: boolean = false;
  AuthButtonLoading: boolean = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Artists',
        icon: 'pi pi-home',
        routerLink: '/artists',
      },
      {
        label: 'Pagination',
        icon: 'pi pi-home',
        routerLink: '/pagination',
      },
      {
        label: 'Reviews',
        icon: 'pi pi-home',
        routerLink: '/reviews',
      },
    ];
  }

  logout() {
    this.AuthButtonLoading = true;
    setTimeout(() => {
      this.AuthButtonLoading = false;
      localStorage.setItem('isLoggedIn', 'false');
    }, 1000);
  }
}
