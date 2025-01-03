import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentcaselistComponent } from './accidentcaselist.component';

describe('AccidentcaselistComponent', () => {
  let component: AccidentcaselistComponent;
  let fixture: ComponentFixture<AccidentcaselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentcaselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentcaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
