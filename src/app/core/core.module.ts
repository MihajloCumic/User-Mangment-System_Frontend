import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersPageComponent,
    UsersTableComponent,
    CreateUserComponent,
    UserFormComponent,
    LoginPageComponent,
  ],
  exports: [
    UsersPageComponent,
    UsersTableComponent,
    CreateUserComponent,
    UserFormComponent,
    LoginPageComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class CoreModule {}
