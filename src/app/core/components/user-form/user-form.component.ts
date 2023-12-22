import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Privilege, User, UserCreate, UserUpdate } from 'src/app/models/User';
import { PrivilegeService } from 'src/app/services/privilege.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() formType = '';
  @Input() updateEmail = '';
  @Input() userData!: User;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public password: string = '';
  public selectedPrivileges: { [key: string]: boolean } = {};
  public allPrivileges: string[] = [];

  constructor(
    private userService: UserService,
    private privilegeService: PrivilegeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.privilegeService.getPrivileges().subscribe(
      (res) => (this.allPrivileges = res.privileges),
      (err) => alert(err)
    );
    if (this.updateEmail) {
      this.userService.getUserByEmail(this.updateEmail).subscribe(
        (res) => {
          this.userData = res;
          this.firstName = this.userData.firstName;
          this.lastName = this.userData.lastName;
          this.email = this.userData.email;
          this.userData.privileges.forEach((privilage) => {
            this.selectedPrivileges[privilage.name] = true;
          });
        },
        (err) => alert('Could not get user data.')
      );
    }
  }

  onCheckboxChange(privilegeName: string): void {
    this.selectedPrivileges[privilegeName] =
      !this.selectedPrivileges[privilegeName];
  }

  createUser(): void {
    const privileges: string[] = Object.keys(this.selectedPrivileges)
      .filter((key) => this.selectedPrivileges[key])
      .map((key) => key);
    const user: UserCreate = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      privileges: privileges,
    };
    this.userService.createUser(user).subscribe(
      (res) => this.userCreated(res),
      (err) => this.createError(err)
    );
  }

  updateUser(): void {
    const privileges: string[] = Object.keys(this.selectedPrivileges)
      .filter((key) => this.selectedPrivileges[key])
      .map((key) => key);
    const user: UserUpdate = { privileges };
    if (!this.checkIfNotNull(this.firstName)) {
      user.firstName = this.firstName;
    }
    if (!this.checkIfNotNull(this.lastName)) {
      user.lastName = this.lastName;
    }
    if (!this.checkIfNotNull(this.email)) {
      user.email = this.email;
    }
    if (!this.checkIfNotNull(this.password)) {
      user.password = this.password;
    }
    this.userService.updateUser(this.updateEmail, user).subscribe(
      (res) => this.userCreated(res),
      (err) => this.createError(err)
    );
  }

  checkIfNotNull(field: string): boolean {
    return field === '';
  }

  userCreated(user: User): void {
    this.router.navigate(['/users']);
    alert(`User ${user.email} has been created.`);
  }

  createError(err: any): void {
    if (err) {
      alert(err.status);
    }
  }
}
