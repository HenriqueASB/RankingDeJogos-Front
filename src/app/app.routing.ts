import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuardService } from './shared/guard/auth-guard.service';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        // canActivate:[AuthGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
        // canActivate:[AuthGuardService]
      },
      {
        path: 'user-perfil',
        loadChildren: () => import('./component/user-perfil/user-perfil.module').then(m => m.UserPerfilModule)
      }
    ],
    canActivate:[AuthGuardService]
  },
  {
    path:'login',
    component: LoginComponent
  }
];
