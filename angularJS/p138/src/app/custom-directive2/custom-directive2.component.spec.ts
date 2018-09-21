import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirective2Component } from './custom-directive2.component';

describe('CustomDirective2Component', () => {
  let component: CustomDirective2Component;
  let fixture: ComponentFixture<CustomDirective2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirective2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirective2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
