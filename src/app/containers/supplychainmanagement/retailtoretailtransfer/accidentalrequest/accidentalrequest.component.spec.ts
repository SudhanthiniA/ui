import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalrequestComponent } from './accidentalrequest.component';

describe('AccidentalrequestComponent', () => {
  let component: AccidentalrequestComponent;
  let fixture: ComponentFixture<AccidentalrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
