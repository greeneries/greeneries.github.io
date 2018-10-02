import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpComponent } from './sign/up/up.component';
import { InOutComponent } from './sign/in-out/in-out.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    InOutComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
