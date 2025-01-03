import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyonaccidentalcasesComponent } from './penaltyonaccidentalcases.component';

describe('PenaltyonaccidentalcasesComponent', () => {
  let component: PenaltyonaccidentalcasesComponent;
  let fixture: ComponentFixture<PenaltyonaccidentalcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyonaccidentalcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyonaccidentalcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
