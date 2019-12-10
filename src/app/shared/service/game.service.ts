import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url:string;
  url_avaliacao: string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/game";
    this.url_avaliacao = "http://localhost:8080/avaliacao";
    }

  get() {
    return this.http.get<any>(this.url, this.httpOptions).pipe();
  }

  getById(id) {
    return this.http.get<any>(this.url+`/${id}`, this.httpOptions).pipe();
  }

  avalia(avaliacao){
    console.log("avaliação",avaliacao)

    return this.http.post<any>(this.url_avaliacao,avaliacao, this.httpOptions).pipe();
    
  }
}
