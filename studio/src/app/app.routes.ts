import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './gaurds/auth.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ReviewsPageComponent } from './pages/reviews-page/reviews-page.component';

export const routes: Routes = [
  {
    path: 'artists',
    loadComponent: () =>
      import('./pages/artists/artists.component').then(
        (m) => m.ArtistsComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./pages/reviews-page/reviews-page.component').then(
        (m) => m.ReviewsPageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites-page/favorites-page.component').then(
        (m) => m.FavoritesPageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
      {
        path: 'details',
        loadComponent: () =>
          import(
            './pages/profile/profile-section/profile-section.component'
          ).then((m) => m.ProfileSectionComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/profile/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
