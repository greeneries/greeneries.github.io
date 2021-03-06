import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
  constructor() {
      console.log('HomeModule constructor is called.');
  }
}
