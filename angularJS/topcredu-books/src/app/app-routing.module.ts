import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInFormComponent } from './sign/sign-in-form/sign-in-form.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpFormComponent } from './sign/sign-up-form/sign-up-form.component';
import { UpdateFormComponent } from './profile/update-form/update-form.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path : '', redirectTo : 'book', pathMatch : 'full'},
  { path : 'book', component : BookComponent },
  { path : 'signInForm', component : SignInFormComponent },
  { path : 'signUpForm', component : SignUpFormComponent },
  { path : 'profile', component : ProfileComponent, canActivate : [AuthGuard]},
  { path : 'update-form', component: UpdateFormComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
