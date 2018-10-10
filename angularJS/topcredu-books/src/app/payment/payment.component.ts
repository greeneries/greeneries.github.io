import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  shoulShow = false;

  creditIsActive = true;
  transferIsActive = false;
  easyIsActive = false;
  transferName = "";

  selected_payment;

  paymentForm: FormGroup = new FormGroup({
      payment: new FormControl('1',Validators.required),
      creditCard: new FormControl('none'),
      bankType : new FormControl('none'),
      transferName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {

  }

  goCharge(){

    console.log('결제 방식 선택 : ',this.paymentForm.controls.payment.value);
    console.log('신용카드 선택 : ',this.paymentForm.controls.creditCard.value);
    console.log('무통장 입금 은행 선택 : ',this.paymentForm.controls.bankType.value);
    console.log('무통장 입금 입금자 : ',this.paymentForm.controls.transferName.value);
  }

  initialize(){
    this.creditIsActive = false;
    this.transferIsActive = false;
    this.easyIsActive = false;
  }

  displayPayment(type: string, selected_value : string){
    this.selected_payment = selected_value;
    console.log('type: ',type,'this.selected_payment: ',this.selected_payment);

    this.initialize();
    switch(type){
      case 'credit_card':
        this.creditIsActive = true;
        break;
      case 'trasfer':
        this.transferIsActive = true;
        break;
      case 'easypayment':
        this.easyIsActive = true;
        break;
      default:
          this.creditIsActive = true;
          break;
    }

  }


}
