import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/service/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { UserService } from '../../shared/service/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-avalia-jogo',
  templateUrl: './avalia-jogo.component.html',
  styleUrls: ['./avalia-jogo.component.css']
})
export class AvaliaJogoComponent implements OnInit {


  jogo: Jogo = {};
  constructor(private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
               private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    console.log('aqui')
    let jogoId;
    this.activatedRoute.queryParams.subscribe(params => {
      jogoId = params['jogoId'];
      console.log(jogoId)
      
    });
    if(jogoId){
      this.gameService.getById(jogoId).subscribe(res=>{
        this.jogo = res;
        console.log(this.jogo)
      })
    }
  }
  naoRecomendo(){
    this.userService.getByEmail(sessionStorage.getItem('email')).subscribe(user=>{
    let avaliacao = {
      "user_id":user[0].id,
      "jogo_id": this.jogo.id,
      "nota":0
    } as Avaliacao

      this.gameService.avalia(avaliacao).subscribe(res=>{
        this.snackBar.open("Jogo Avaliado com sucesso","ok", {
          duration: 2000,
        });
      },err=>{
        this.snackBar.open("ocorreu um erro na avaliação","ok", {
          duration: 2000,
        });
      })
    })

  }

  recomendo(){
    this.userService.getByEmail(sessionStorage.getItem('email')).subscribe(user=>{
      let avaliacao = {
        "user_id":user[0].id,
        "jogo_id": this.jogo.id,
        "nota":1
      } as Avaliacao
  
        this.gameService.avalia(avaliacao).subscribe(res=>{
          this.snackBar.open("Jogo Avaliado com sucesso","ok", {
            duration: 2000,
          });
        },err=>{
          this.snackBar.open("ocorreu um erro na avaliação","ok", {
            duration: 2000,
          });
        })
      })
  

  }

}
