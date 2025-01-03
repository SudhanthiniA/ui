import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpenaltyonaccidentalcasesComponent } from './viewpenaltyonaccidentalcases.component';

describe('ViewpenaltyonaccidentalcasesComponent', () => {
  let component: ViewpenaltyonaccidentalcasesComponent;
  let fixture: ComponentFixture<ViewpenaltyonaccidentalcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpenaltyonaccidentalcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpenaltyonaccidentalcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
