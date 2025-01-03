import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptandconsumptionreportComponent } from './receiptandconsumptionreport.component';

describe('ReceiptandconsumptionreportComponent', () => {
  let component: ReceiptandconsumptionreportComponent;
  let fixture: ComponentFixture<ReceiptandconsumptionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptandconsumptionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptandconsumptionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
