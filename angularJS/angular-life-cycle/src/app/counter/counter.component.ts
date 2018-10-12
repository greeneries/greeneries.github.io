import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from './counter-bridge.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor(private counterBridgeService: CounterBridgeService) { }
   ngOnInit() {}

   increment() {
     // alert('CounterDisplayComponent 의 count 값을 +1 한다.');
     this.counterBridgeService.incremnet();
   }

   decrement() {
     // alert('CounterDisplayComponent 의 count 값을 -1 한다.');
     this.counterBridgeService.decrement();
   }

}
