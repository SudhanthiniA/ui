import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalrequestforspiritdeoComponent } from './accidentalrequestforspiritdeo.component';

describe('AccidentalrequestforspiritdeoComponent', () => {
  let component: AccidentalrequestforspiritdeoComponent;
  let fixture: ComponentFixture<AccidentalrequestforspiritdeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalrequestforspiritdeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalrequestforspiritdeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
