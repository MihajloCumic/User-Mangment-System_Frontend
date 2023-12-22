import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWTRes } from '../models/JWTModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly loginUrl: string = 'http://localhost:8080/auth/login';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<JWTRes> {
    let body = { email, password };
    return this.httpClient.post<JWTRes>(this.loginUrl, body);
  }
}
