import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalrequestforspiritComponent } from './accidentalrequestforspirit.component';

describe('AccidentalrequestforspiritComponent', () => {
  let component: AccidentalrequestforspiritComponent;
  let fixture: ComponentFixture<AccidentalrequestforspiritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalrequestforspiritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalrequestforspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
