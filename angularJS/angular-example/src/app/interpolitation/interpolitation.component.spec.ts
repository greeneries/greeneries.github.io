import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolitationComponent } from './interpolitation.component';

describe('InterpolitationComponent', () => {
  let component: InterpolitationComponent;
  let fixture: ComponentFixture<InterpolitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
