import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalcasedeologinComponent } from './accidentalcasedeologin.component';

describe('AccidentalcasedeologinComponent', () => {
  let component: AccidentalcasedeologinComponent;
  let fixture: ComponentFixture<AccidentalcasedeologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalcasedeologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalcasedeologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
