import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaliaJogoComponent } from './avalia-jogo.component';


const routes: Routes = [{
  path: '',
  component: AvaliaJogoComponent
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliaJogoRoutingModule { }
