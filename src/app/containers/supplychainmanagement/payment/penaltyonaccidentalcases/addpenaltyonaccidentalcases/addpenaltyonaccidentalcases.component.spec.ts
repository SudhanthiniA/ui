import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpenaltyonaccidentalcasesComponent } from './addpenaltyonaccidentalcases.component';

describe('AddpenaltyonaccidentalcasesComponent', () => {
  let component: AddpenaltyonaccidentalcasesComponent;
  let fixture: ComponentFixture<AddpenaltyonaccidentalcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpenaltyonaccidentalcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpenaltyonaccidentalcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
