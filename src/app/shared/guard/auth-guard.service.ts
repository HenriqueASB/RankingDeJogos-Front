import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  private token: string = sessionStorage.getItem('token');
// private token: string ="skdasddasd";
  

  canActivate() {
    if(this.token){
        return true;
    }else{
        // return true
        this.router.navigate(['/login'])
    }
     
  }
}