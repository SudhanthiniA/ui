import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalcaserequestComponent } from './accidentalcaserequest.component';

describe('AccidentalcaserequestComponent', () => {
  let component: AccidentalcaserequestComponent;
  let fixture: ComponentFixture<AccidentalcaserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalcaserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalcaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
