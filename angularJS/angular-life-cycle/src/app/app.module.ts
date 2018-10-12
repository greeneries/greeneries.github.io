import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookImageComponent } from './book/book-image/book-image.component';
//import { ViewChildComponent, Item, ItemComponent } from './view-child/view-child.component';
import { CounterComponent } from './counter/counter.component';
import { CounterDisplayComponent } from './counter/counter-display/counter-display.component';
import { CounterControlComponent } from './counter/counter-control/counter-control.component';
// import { CounterBridgeComponent } from './counter/counter-bridge/counter-bridge.component';
import { CounterBridgeService } from './counter/counter-bridge.service';
import { CControlComponent } from './counter-test/c-control/c-control.component';
import { CDisplayComponent } from './counter-test/c-display/c-display.component';
import { CBridgeComponent } from './counter-test/c-bridge/c-bridge.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    BookComponent,
    BookImageComponent,
    CounterComponent, CounterDisplayComponent, CounterControlComponent, CControlComponent, CDisplayComponent, CBridgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CounterBridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//   ViewChildComponent, Item, ItemComponent,
