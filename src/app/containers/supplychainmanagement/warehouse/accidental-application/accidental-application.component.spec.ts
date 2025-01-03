import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalApplicationComponent } from './accidental-application.component';

describe('AccidentalApplicationComponent', () => {
  let component: AccidentalApplicationComponent;
  let fixture: ComponentFixture<AccidentalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
