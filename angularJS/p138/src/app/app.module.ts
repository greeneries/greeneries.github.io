import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloService } from './service/hello.service';
import { AboutComponent } from './about/about.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { MyDataPipe } from './pipe/my-data.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MyReversePipe } from './pipe/my-reverse.pipe';
import { MyHiddenDirective } from './directive/my-hidden.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { MyHidden2Directive } from './directive/my-hidden2.directive';
import { CustomDirective2Component } from './custom-directive2/custom-directive2.component';
import { MyHighlightDirective } from './directive/my-highlight.directive';
import { CustomEventDirectiveComponent } from './custom-event-directive/custom-event-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BuiltInPipeComponent,
    MyDataPipe,
    CustomPipeComponent,
    MyReversePipe,
    MyHiddenDirective,
    CustomDirectiveComponent,
    MyHidden2Directive,
    CustomDirective2Component,
    MyHighlightDirective,
    CustomEventDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
