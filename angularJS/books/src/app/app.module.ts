import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpComponent } from './sign/up/up.component';
import { InOutComponent } from './sign/in-out/in-out.component';
import { BookComponent } from './book/book.component';
import { UpdateFormComponent } from './profile/update-form/update-form.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    InOutComponent,
    BookComponent,
    UpdateFormComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
