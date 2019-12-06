import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPerfilRoutingModule } from './user-perfil-routing.module';
import { UserPerfilComponent } from './user-perfil.component';
import { MatCardModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserPerfilComponent],
  imports: [
    CommonModule,
    UserPerfilRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    
  ],
  exports:[UserPerfilComponent]
})
export class UserPerfilModule { }
