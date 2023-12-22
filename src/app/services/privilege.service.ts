import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrivilegeService {
  private privilegeUrl: string = 'http://localhost:8080/privileges';
  constructor(private httpClient: HttpClient) {}

  getPrivileges(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    return this.httpClient.get<any>(this.privilegeUrl, {
      headers,
    });
  }
}
