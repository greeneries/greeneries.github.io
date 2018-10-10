import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyPaymentComponent } from './easy-payment.component';

describe('EasyPaymentComponent', () => {
  let component: EasyPaymentComponent;
  let fixture: ComponentFixture<EasyPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
