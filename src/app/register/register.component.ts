import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  Form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
              private registerService: RegisterService,
              private loginService: LoginService,
    ) { }

  ngOnInit() {
  }

  registrar(){
    let user = {
      "nome": this.Form.value.nome,
      "email": this.Form.value.email,
      "senha": this.Form.value.senha,
    } as Usuario;
    this.registerService.register( user ).subscribe(response=>{
      this.loginService.login(user).subscribe(res =>{

        sessionStorage.setItem('token',res.token);
        sessionStorage.setItem('refreshToken',res.refreshToken);
        sessionStorage.setItem('validTime',res.validTime);
        sessionStorage.setItem('email',user.email);
        console.log(sessionStorage.getItem('token'))
        this.router.navigateByUrl("/");
      })
    }) 
  }

}
