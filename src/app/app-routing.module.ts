import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './core/components/users-page/users-page.component';
import { CreateUserComponent } from './core/components/create-user/create-user.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { UpdateUserComponent } from './core/components/update-user/update-user.component';
import { authReadGuard } from './guards/auth-read.guard';
import { authCreateGuard } from './guards/auth-create.guard';
import { authUpdateGuard } from './guards/auth-update.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [authReadGuard],
  },
  {
    path: 'create',
    component: CreateUserComponent,
    canActivate: [authCreateGuard],
  },
  {
    path: 'update/:email',
    component: UpdateUserComponent,
    canActivate: [authUpdateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
