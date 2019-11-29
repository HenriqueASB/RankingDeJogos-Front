import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/user/login";
    }

  login(usuario) {
    return this.http.post<any>(this.url, usuario, this.httpOptions).pipe();
  }

}
