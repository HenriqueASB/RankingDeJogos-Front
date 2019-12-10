import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/user";
    }

  update(usuario: Usuario) {
    console.log(usuario)
    return this.http.put<any>(this.url, usuario, this.httpOptions).pipe();
  }

  getByEmail(email: string) {
    return this.http.get<any>(this.url+`/email?email=${email}`, this.httpOptions).pipe();
  }

}
