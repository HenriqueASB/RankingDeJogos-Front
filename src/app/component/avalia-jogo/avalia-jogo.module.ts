import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliaJogoRoutingModule } from './avalia-jogo-routing.module';
import { MatCardModule, MatSnackBarModule } from '@angular/material';
import { AvaliaJogoComponent } from './avalia-jogo.component';


@NgModule({
  declarations: [AvaliaJogoComponent],
  imports: [
    CommonModule,
    AvaliaJogoRoutingModule,
    MatCardModule,
    MatSnackBarModule,
  ]
})
export class AvaliaJogoModule { }
