import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ShareModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {
    constructor() {
      console.log('PlayerModule # constructor() called.');
      console.log(new Date().toLocaleString());
    }
}
// 이 모듈은 root모듈이 아님으로 명시적으로 CommonModule을 import해야 합니다.
