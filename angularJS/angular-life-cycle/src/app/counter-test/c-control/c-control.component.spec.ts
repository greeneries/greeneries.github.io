import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CControlComponent } from './c-control.component';

describe('CControlComponent', () => {
  let component: CControlComponent;
  let fixture: ComponentFixture<CControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
