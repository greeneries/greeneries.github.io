import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-easy-payment',
  templateUrl: './easy-payment.component.html',
  styleUrls: ['./easy-payment.component.css']
})
export class EasyPaymentComponent implements OnInit {
  // ishidden = false;

  cacaoIsHidden = false;
  kpayIsHidden = false;
  paycoIsHidden = false;
  pay11IsHidden = false;
  naverIsHidden = false;

  selectedpayment;

  constructor() { }

  ngOnInit() {
  }

  // @Input()
  // set isHidden(hidden : boolean){
  //   this.ishidden = hidden;
  // }

  @Input()
  set selectedPayment(value: string){
    this.selectedpayment = value;

    this.setFalse();
    if(value === "6"){ // 카카오페이일 경우
      this.cacaoIsHidden = true;
    }else if(value === "7"){ // kpay일 경우
      this.kpayIsHidden = true;
    }else if(value === "8"){ // payco일 경우
      this.paycoIsHidden = true;
    }else if(value === "9"){ // 11pay일 경우
      this.pay11IsHidden = true;
    }else if(value === "10"){ // Naverpay 일 경우
      this.naverIsHidden = true;
    }

  }

  setFalse(){
    this.cacaoIsHidden = false;
    this.kpayIsHidden = false;
    this.paycoIsHidden = false;
    this.pay11IsHidden = false;
    this.naverIsHidden = false;
  }

}
