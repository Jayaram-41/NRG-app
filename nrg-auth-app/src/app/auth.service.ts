import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7182/api/auth'; // 
  private loggedUser: any = null;

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  
  setUser(user: any) {
    this.loggedUser = user;
  }

 
  getUser() {
    return this.loggedUser;
  }

  
  logout() {
    this.loggedUser = null;
  }
}
