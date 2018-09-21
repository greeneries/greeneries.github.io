import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpopComponent } from './kpop/kpop.component';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { KpopHttpService } from './kpop/kpop-http.service';
import { EmpComponent } from './emp/emp.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    KpopComponent,
    EmpComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [KpopHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
