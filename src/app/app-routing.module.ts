import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './core/components/users-page/users-page.component';
import { CreateUserComponent } from './core/components/create-user/create-user.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
