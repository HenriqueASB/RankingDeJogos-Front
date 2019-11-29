import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPerfilComponent } from './user-perfil.component';


const routes: Routes = [{
  path: '',
  component: UserPerfilComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPerfilRoutingModule { }
