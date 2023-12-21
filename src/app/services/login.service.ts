import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWTModel } from '../models/JWTModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly loginUrl: string = 'http://localhost:8080/auth/login';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    let body = { email, password };
    return this.httpClient.post<any>(this.loginUrl, body);
  }
}
