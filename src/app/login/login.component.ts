import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });


  constructor( private loginService: LoginService,
               private router: Router,
               private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  logar(){
    let usuario: Usuario = {
      "email":this.loginForm.value.email,
	    "senha":this.loginForm.value.senha
    }
    this.loginService.login(usuario).subscribe(response =>{

      sessionStorage.setItem('token',response.token);
      sessionStorage.setItem('refreshToken',response.refreshToken);
      sessionStorage.setItem('validTime',response.validTime);
      sessionStorage.setItem('email',usuario.email);
      this.router.navigateByUrl("/");
    },error=>{
      console.log(error)
      this.snackBar.open("login invalido","ok", {
        duration: 2000,
      });
    })
  }
  
  irRegistro(){
    this.router.navigateByUrl("/register");

  }

}
