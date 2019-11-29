import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
               private router: Router) { }

  ngOnInit() {
  }

  logar(){
    let usuario = {
      "email":this.loginForm.value.email,
	    "senha":this.loginForm.value.senha
    }
    this.loginService.login(usuario).subscribe(response =>{
      sessionStorage.setItem('token',response);
      this.router.navigate(['/']);
    })
  }

}
