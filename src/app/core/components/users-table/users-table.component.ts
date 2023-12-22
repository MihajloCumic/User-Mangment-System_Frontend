import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  public users: User[] = [];
  public pageNumber = 0;
  public pageSize = 10;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsersPageable();
  }
  getUsersPageable(): void {
    this.userService.getUsersPageable(this.pageNumber, this.pageSize).subscribe(
      (res) => this.resolveUsers(res),
      (err) => alert(err)
    );
  }
  resolveUsers(users: User[]): void {
    this.users = users;
  }

  hasPrivilege(user: User, privilege: string): boolean {
    let privileges = user.privileges;

    return privileges.some((obj) => obj.name === privilege);
  }

  nextPage(event: Event): void {
    if (this.users.length < this.pageSize) {
      return;
    }
    event.preventDefault();
    this.pageNumber += 1;
    this.getUsersPageable();
  }

  previousPage(event: Event): void {
    event.preventDefault();
    if (this.pageNumber === 0) return;
    this.pageNumber -= 1;
    this.getUsersPageable();
  }

  emailHandler(event: Event, email: string): void {
    event.preventDefault();
    this.userService.getUserByEmail(email).subscribe(
      (res) => this.routeToUpdateUser(email),
      (err) => console.log(err)
    );
  }

  routeToUpdateUser(email: string): void {
    this.router.navigate(['/update', email]);
  }

  deleteUser(email: string, i: number): void {
    this.userService.deleteUser(email).subscribe(
      (res) => this.successfullyDeletedUser(email, i),
      (err) => alert(`Could not delete user: ${email}.`)
    );
  }

  successfullyDeletedUser(email: string, i: number): void {
    alert(`Deleted user: ${email}.`);
    this.getUsersPageable();
  }
}
