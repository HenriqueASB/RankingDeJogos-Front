import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/service/game.service';

@Component({
  selector: 'app-lista-jogo',
  templateUrl: './lista-jogo.component.html',
  styleUrls: ['./lista-jogo.component.css']
})
export class ListaJogoComponent implements OnInit {

  jogo: Jogo[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.get().subscribe(res=>{
      this.jogo = res;
    })

  }

}
