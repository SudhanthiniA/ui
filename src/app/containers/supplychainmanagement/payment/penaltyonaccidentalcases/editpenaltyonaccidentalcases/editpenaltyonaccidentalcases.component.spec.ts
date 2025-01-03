import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpenaltyonaccidentalcasesComponent } from './editpenaltyonaccidentalcases.component';

describe('EditpenaltyonaccidentalcasesComponent', () => {
  let component: EditpenaltyonaccidentalcasesComponent;
  let fixture: ComponentFixture<EditpenaltyonaccidentalcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpenaltyonaccidentalcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpenaltyonaccidentalcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
