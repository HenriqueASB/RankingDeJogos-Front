import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuardService } from './shared/guard/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
      },
      {
        path: 'listaJogo',
        loadChildren: () => import('./component/lista-jogo/lista-jogo.module').then(m => m.ListaJogoModule)
      }
    ],
    canActivate:[AuthGuardService]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];
