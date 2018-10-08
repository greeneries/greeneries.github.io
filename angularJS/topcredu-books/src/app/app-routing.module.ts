import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInFormComponent } from './sign/sign-in-form/sign-in-form.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpFormComponent } from './sign/sign-up-form/sign-up-form.component';
import { UpdateFormComponent } from './profile/update-form/update-form.component';
import { BookDetailComponent } from './book/detail/book-detail/book-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './book/cart/cart/cart.component';
// import { HashLocationStrategy } from '@angular/common'; 해시기반 주소로 변경

const routes: Routes = [
  { path : '', redirectTo : 'book', pathMatch : 'full'},
  { path : 'book', component : BookComponent },
  { path : 'signInForm', component : SignInFormComponent },
  { path : 'signUpForm', component : SignUpFormComponent },
  { path : 'profile', component : ProfileComponent, canActivate : [AuthGuard]},
  { path : 'update-form', component: UpdateFormComponent, canActivate : [AuthGuard]},
  { path: 'book/book-detail/:id', component: BookDetailComponent},
  { path: 'search_book', component: BookDetailComponent},
  { path: 'cart-list', component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
