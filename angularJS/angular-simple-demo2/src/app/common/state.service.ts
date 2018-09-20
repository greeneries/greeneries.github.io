import { Injectable } from '@angular/core';

// Component 다수에서 동시에 사용해야 할 로직이 있다면
// 그 로직을 서비스로 분리한 다음 필요할 때 요청해서 주입하겠다.
// @Injectable() 파라미터를 주지 않고도 사용가능하다.
@Injectable()
export class StateService {
  private message = 'Hello Message';

  getMessage(): string {
    return this.message;
  };

  setMessage(message: string): void {
    this.message = message;
  };
}
