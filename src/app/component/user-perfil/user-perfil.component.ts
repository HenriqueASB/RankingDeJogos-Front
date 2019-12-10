import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  user: Usuario = {};
  editar: boolean;

  form = new FormGroup({

    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])

  });
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit() {
    this.editar = false;
    this.userService.getByEmail(sessionStorage.getItem('email')).subscribe(res=>{
      this.user = res[0]
      console.log(this.user)
    })
  }

  iniciarEdicao(){
    this.editar = true;

  }
  concluirEdicao(){
    console.log(this.form.getRawValue())
    this.user.nome = this.form.value.nome;
    this.user.email = this.form.value.email;
    this.user.senha = this.form.value.senha;
    console.log(this.user)
    this.userService.update(this.user).subscribe(res=>{
      this.snackBar.open("Usuario atualizado com sucesso","ok", {
        duration: 2000,
      });
    },err=>{
      this.snackBar.open("Erro ao atualizar o usuario","ok", {
        duration: 2000,
      });
    })

  }
  cancelar(){
    this.editar = false;
  }



}
