import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
  count = 0;

  // 1번 : display가 CounterBridgeService를 받는다.
  constructor(private counterBridgeService: CounterBridgeService) { }

  ngOnInit() {
    // 2번 구독자가 먼저 구독 신청을 합니다.
    this.counterBridgeService.getObservable().subscribe(
      message => {
        if (message.type === 'incremnet') {
          this.count++;
        } else {
          this.count--;
        }
      }
    );

  }

}
