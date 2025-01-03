import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialchallandepositComponent } from './financialchallandeposit.component';

describe('FinancialchallandepositComponent', () => {
  let component: FinancialchallandepositComponent;
  let fixture: ComponentFixture<FinancialchallandepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialchallandepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialchallandepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
