import { ApplicationConfig, } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <-- IMPORT AJOUTÉ

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // (Je garde ta fonction personnalisée)
    provideRouter(routes),
    provideHttpClient() // <-- C'est ce qui permet à ton AuthService de fonctionner !
  ]
};