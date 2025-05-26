import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account/account.page').then((m) => m.AccountPage),
      },
      {
        path: 'terms',
        loadComponent: () =>
          import('./terms/terms.page').then((m) => m.TermsPage),
      },
      {
        path: 'policy',
        loadComponent: () =>
          import('./policy/policy.page').then((m) => m.PolicyPage),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'explore',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'wishlist',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'chats',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ],
  }
];
