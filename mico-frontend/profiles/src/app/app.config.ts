import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],

  // providers: [
  //   provideHttpClient(
  //     withInterceptors([AuthInterceptor, responseAlertInterceptor])
  //   ),
  //   provideZoneChangeDetection({ eventCoalescing: true }),
  //   provideRouter(routes),
  //   provideAnimationsAsync(),
  //   provideStore({ favorites: favoritesReducer }),
  //   providePrimeNG({
  //     theme: {
  //       preset: Material,
  //       options: {
  //         darkModeSelector: '.my-app-dark',
  //       },
  //     },
  //   }),
  // ],
};
