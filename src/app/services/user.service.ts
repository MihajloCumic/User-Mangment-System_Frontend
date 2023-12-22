import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserCreate } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersUrl: string = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.get<User[]>(this.usersUrl, {
      headers,
    });
  }

  getUsersPageable(pageNumber: number, pageSize: number): Observable<User[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.get<User[]>(this.usersUrl, {
      headers,
      params: {
        pageNumber,
        pageSize,
      },
    });
  }

  createUser(user: UserCreate): Observable<User> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.post<User>(this.usersUrl, user, {
      headers,
    });
  }
}
