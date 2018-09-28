import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'; // subscriber
import { Subject } from 'rxjs/Subject'; // subject


/*
  Observable가 이벤트를 방출하면 subject가 구독해서 받는다.
 */
@Injectable()
export class CounterBridgeService {

  private subject = new Subject<any>();

  constructor() { }

  // 이벤트를 수신받으면
  incremnet() {
    this.subject.next({ type: 'incremnet' });
  }

  decrement() {
    this.subject.next({ type: 'decrement' });
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
