import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';
import { ShareModule } from './share/share.module';

import { IntroComponent, HelloComponent, CoreTestComponent } from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    CoreTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({nickName:'happy'}),
    FormsModule,
    HttpModule,
    CoreModule,
    MemberModule,
    //PlayerModule,
    ShareModule
  ],
  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('AppModule constructor is called');
  }
}

// playerModule을 engar 로딩과 동시에 Lazy 로딩 방식으로 사용 불가능
// TIP : Lazy 로딩 방식을 테스트 서버가 제대로 변경 감지하지 못합니다.
// 그래서 이 경우, 테스트 서버를 재기동하면 됩니다.
