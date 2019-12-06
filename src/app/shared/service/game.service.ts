import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url:string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/game";
    }

  get() {
    return this.http.get<any>(this.url, this.httpOptions).pipe();
  }

}
