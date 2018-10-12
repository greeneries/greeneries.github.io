import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBridgeComponent } from './counter-bridge.component';

describe('CounterBridgeComponent', () => {
  let component: CounterBridgeComponent;
  let fixture: ComponentFixture<CounterBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
