import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBridgeComponent } from './c-bridge.component';

describe('CBridgeComponent', () => {
  let component: CBridgeComponent;
  let fixture: ComponentFixture<CBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
