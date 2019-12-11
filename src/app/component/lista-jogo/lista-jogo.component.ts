import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/service/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-jogo',
  templateUrl: './lista-jogo.component.html',
  styleUrls: ['./lista-jogo.component.css']
})
export class ListaJogoComponent implements OnInit {

  jogo: Jogo[] = [];
  constructor(private gameService: GameService,private router: Router,) { }

  ngOnInit() {
    this.gameService.get().subscribe(res=>{

      this.jogo = res;
      this.jogo.sort((a,b) => (a.nota > b.nota?-1:1) )
      console.log(this.jogo)
    })

  }
  irAvaliacao(jogo: Jogo){
    this.router.navigateByUrl(`/avaliaJogo?jogoId=${jogo.id}`)
  }

}
