import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalrequestforomdComponent } from './accidentalrequestforomd.component';

describe('AccidentalrequestforomdComponent', () => {
  let component: AccidentalrequestforomdComponent;
  let fixture: ComponentFixture<AccidentalrequestforomdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalrequestforomdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalrequestforomdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
