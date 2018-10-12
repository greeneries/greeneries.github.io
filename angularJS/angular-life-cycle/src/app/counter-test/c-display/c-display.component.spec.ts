import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDisplayComponent } from './c-display.component';

describe('CDisplayComponent', () => {
  let component: CDisplayComponent;
  let fixture: ComponentFixture<CDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
