import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { UserService, UserServiceConfig } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TitleComponent],
  declarations: [TitleComponent],
  providers: [UserService]
})

export class CoreModule {

    // 생성자에서 핵심모듈 CoreModule을 주입받고자 시도한다. 부모 주입기에 핵심모듈이 이미 생성됐는지 검사한다.
    // 주입기 체계에서 자신은 건너 뛰고 자신으로부터 위에 존재하는 부모 주입기에서 CoreModule 을 찾는다.
    constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
      console.log('CoreModule # Constructor() called.');
      if (parentModule) {
        // 코어 모듈은 전체 모듈이 공유해서 언제나 사용하는 기능을 가진 모듈입니다.
        // 코어 모듈은 하나만 존재하면 됩니다. 코어 모듈은 루트 모듈이 임포트해서 사용하는 방식입니다.
        throw new Error('CoreModule이 이미 로딩되었습니다.');
      }
    }

  static forRoot(config: UserServiceConfig) : ModuleWithProviders {
    // CoreModule 모듈을 리턴해야 한다.
        return {
          ngModule: CoreModule,
          providers: [
            { provide: UserServiceConfig, useValue: config }
          ]
      };
  }
}
// coreModule 자료형의 객체를 사용할 때
// 대신 providers가 가진 값을 사용합니다.
