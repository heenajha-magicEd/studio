import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './gaurds/auth.guard';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'artists',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './Artists',
      }).then((m) => m.ArtistsComponent),
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
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/home/home.component').then((m) => m.HomeComponent),
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'pagination',
    loadComponent: () =>
      import('./pages/pagination/pagination.component').then(
        (m) => m.PaginationComponent
      ),
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
