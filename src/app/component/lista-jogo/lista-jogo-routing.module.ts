import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJogoComponent } from './lista-jogo.component';


const routes: Routes = [{
  path: '',
  component: ListaJogoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaJogoRoutingModule { }
