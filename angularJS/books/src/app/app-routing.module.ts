import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { UpComponent } from './sign/up/up.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { InOutComponent } from './sign/in-out/in-out.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path : '', redirectTo : 'book', pathMatch : 'full'},
  { path : 'book', component : BookComponent },
  { path : 'signUpForm', component: UpComponent},
  { path : 'signUp', component : UpComponent},
  { path : 'signIn', component : InOutComponent },
  { path : 'signOut', component : InOutComponent },
  { path : 'signInForm', component : InOutComponent },
  { path : 'profile', component : ProfileComponent, canActivate: [AuthGuard]},
  { path : 'login-test', component : LoginTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//   { path : 'profile', component : ProfileComponent, canActivate: [AuthGuard]},
