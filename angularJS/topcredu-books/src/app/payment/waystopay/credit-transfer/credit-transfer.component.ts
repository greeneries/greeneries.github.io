import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-transfer',
  templateUrl: './credit-transfer.component.html',
  styleUrls: ['./credit-transfer.component.css']
})
export class CreditTransferComponent implements OnInit {
  ishidden = false;

  transferName = "";
  selectedpayment;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set isHidden(hidden : boolean){
    this.ishidden = hidden;
    console.log('넘겨받은 값 : ',hidden);
  }

  @Input()
  set selectedPayment(value: string){
    this.selectedpayment = value;
  }


}
