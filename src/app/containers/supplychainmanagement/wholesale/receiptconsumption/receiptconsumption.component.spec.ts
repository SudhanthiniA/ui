import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptconsumptionComponent } from './receiptconsumption.component';

describe('ReceiptconsumptionComponent', () => {
  let component: ReceiptconsumptionComponent;
  let fixture: ComponentFixture<ReceiptconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
