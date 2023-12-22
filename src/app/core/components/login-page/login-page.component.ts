import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { JwtData } from 'src/app/models/JWTModel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';
  constructor(private loginService: LoginService, private router: Router) {}
  login(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (res) => {
        const decodedJwt: JwtData = jwtDecode(res.jwt);
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem(
          'authorization',
          JSON.stringify(decodedJwt.authorization)
        );

        this.router.navigate(['/users']);
      },
      (err) => alert('Bad credentials.')
    );
  }
}
