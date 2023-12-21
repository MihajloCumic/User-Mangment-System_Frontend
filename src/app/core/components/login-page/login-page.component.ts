import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';
  constructor(private loginService: LoginService) {}
  login(): void {
    this.loginService
      .login(this.email, this.password)
      .subscribe((res) => console.log(res));
  }
}
