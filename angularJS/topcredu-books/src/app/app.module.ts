import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInFormComponent } from './sign/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign/sign-up-form/sign-up-form.component';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import { UpdateFormComponent } from './profile/update-form/update-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book/detail/book-detail/book-detail.component';
import { CartComponent } from './book/cart/cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditTransferComponent } from './payment/waystopay/credit-transfer/credit-transfer.component';
import { EasyPaymentComponent } from './payment/waystopay/easy-payment/easy-payment.component';
import { CommonComponent } from './payment/waystopay/common/common.component';
import { CreditCardComponent } from './payment/waystopay/credit-card/credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInFormComponent,
    SignUpFormComponent,
    BookComponent,
    ProfileComponent,
    UpdateFormComponent,
    BookDetailComponent,
    CartComponent,
    PaymentComponent,
    CreditTransferComponent,
    EasyPaymentComponent,
    CommonComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, BookService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
