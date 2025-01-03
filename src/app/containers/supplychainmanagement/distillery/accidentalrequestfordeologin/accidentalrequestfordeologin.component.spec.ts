import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalrequestfordeologinComponent } from './accidentalrequestfordeologin.component';

describe('AccidentalrequestfordeologinComponent', () => {
  let component: AccidentalrequestfordeologinComponent;
  let fixture: ComponentFixture<AccidentalrequestfordeologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalrequestfordeologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalrequestfordeologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
