import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(private router: Router){}
  sair(){
    sessionStorage.clear();
    this.router.navigateByUrl("/login")
  }
  perfil(){
    this.router.navigateByUrl("/user-perfil")
  }


}
