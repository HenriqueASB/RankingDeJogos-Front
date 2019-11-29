import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPerfilRoutingModule } from './user-perfil-routing.module';
import { UserPerfilComponent } from './user-perfil.component';


@NgModule({
  declarations: [UserPerfilComponent],
  imports: [
    CommonModule,
    UserPerfilRoutingModule
  ],
  exports:[UserPerfilComponent]
})
export class UserPerfilModule { }
