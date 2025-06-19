import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ROUTES_LIST } from './tokens/routes-list.token';
import { USERS_TOKEN } from './tokens/users.token';
import { ALL_USERS } from './data/users';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    {provide: ROUTES_LIST, useValue: routes.filter(r => r.title && r.icon)}, 
    {provide: USERS_TOKEN, useValue: ALL_USERS}
  ]
};
