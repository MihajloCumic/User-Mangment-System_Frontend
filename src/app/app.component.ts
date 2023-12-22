import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user-managment';

  constructor(private router: Router) {}

  canCreateUsers(): boolean {
    return !!localStorage
      .getItem('authorization')
      ?.includes('can_create_users');
  }
  canReadUsers(): boolean {
    return !!localStorage.getItem('authorization')?.includes('can_read_users');
  }

  isLoggedIn(): boolean {
    const jwtToken = localStorage.getItem('jwt');
    return !!jwtToken;
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
    alert('You have logged out.');
  }
}
