import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaJogoRoutingModule } from './lista-jogo-routing.module';
import { ListaJogoComponent } from './lista-jogo.component';
import { MatCardModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [ListaJogoComponent],
  imports: [
    CommonModule,
    ListaJogoRoutingModule,
    MatCardModule,
    MatSnackBarModule,
  ]
})
export class ListaJogoModule { }
