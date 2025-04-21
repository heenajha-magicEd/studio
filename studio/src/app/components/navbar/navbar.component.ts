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
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { selectAllFavorites } from 'src/app/store/favorites/favorites.selector';
import { map } from 'rxjs';

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
  favouriteBadgeCount: number = 0; //

  constructor(private auth: AuthService, private store: Store) {}

  // ngOnInit() {
  //   this.items = [
  //     {
  //       label: 'Home',
  //       icon: 'pi pi-home',
  //       routerLink: '/home',
  //     },
  //     {
  //       label: 'Artists',
  //       icon: 'pi pi-home',
  //       routerLink: '/artists',
  //     },
  //     {
  //       label: 'favorites',
  //       icon: 'pi pi-home',
  //       routerLink: '/favorites',
  //     },
  //     {
  //       label: 'Reviews',
  //       icon: 'pi pi-home',
  //       routerLink: '/reviews',
  //     },
  //   ];
  // }

  ngOnInit() {
    // Listen to changes in favorites count and build the menu
    this.store
      .select(selectAllFavorites)
      .pipe(map((favs) => favs.length))
      .subscribe((count) => {
        this.items = [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/home',
          },
          {
            label: 'Artists',
            icon: 'pi pi-users',
            routerLink: '/artists',
          },
          {
            label: 'Favorites',
            icon: 'pi pi-star',
            routerLink: '/favorites',
            badge: count > 0 ? count.toString() : undefined, // only if > 0
          },
          {
            label: 'Reviews',
            icon: 'pi pi-comments',
            routerLink: '/reviews',
          },
        ];
      });
  }

  logout() {
    this.AuthButtonLoading = true;
    this.auth.logout();
  }
}
