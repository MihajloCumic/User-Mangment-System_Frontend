import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserCreate, UserUpdate } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersUrl: string = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) {}

  getUserByEmail(email: string): Observable<User> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.get<User>(`${this.usersUrl}/email`, {
      headers,
      params: {
        email,
      },
    });
  }

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

  updateUser(email: string, user: UserUpdate): Observable<User> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.patch<User>(this.usersUrl, user, {
      headers,
      params: {
        email,
      },
    });
  }

  deleteUser(email: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.delete<any>(this.usersUrl, {
      headers,
      params: {
        email,
      },
    });
  }
}
