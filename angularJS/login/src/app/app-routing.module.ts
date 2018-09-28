import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserOnlyComponent } from './user-only/user-only.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { ListComponent } from './list/list.component';

import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'join', component : JoinComponent},
  { path : 'user-only', component : UserOnlyComponent , canActivate : [LoginGuard] },
  { path : 'list', component : ListComponent, canActivate : [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
ng g c home
ng g c user-only
ng g c login
ng g c join
ng g g guards/login
ng g s services/login
*/
