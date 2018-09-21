import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';
import { InterpolitationComponent } from './interpolitation/interpolitation.component';
import { OnewayComponent } from './binding/oneway/oneway.component';
import { ContactComponent } from './binding/contact/contact.component';
import { MyClickDirective } from './binding/my-click.directive';
import { OnewayStatementComponent } from './binding/oneway-statement/oneway-statement.component';
import { TwowayComponent } from './binding/twoway/twoway.component';
import { NgclassComponent } from './binding/ngclass/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle/ngstyle.component';
import { NgifComponent } from './binding/ngif/ngif.component';
import { NgswitchComponent } from './binding/ngswitch/ngswitch.component';
import { NgforComponent } from './binding/ngfor/ngfor.component';
import { RefComponent } from './binding/ref/ref.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    InterpolitationComponent,
    OnewayComponent,
    ContactComponent,
    MyClickDirective,
    OnewayStatementComponent,
    TwowayComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    RefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
