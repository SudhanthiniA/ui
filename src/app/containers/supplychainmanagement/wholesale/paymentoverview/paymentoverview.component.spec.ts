import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentoverviewComponent } from './paymentoverview.component';

describe('PaymentoverviewComponent', () => {
  let component: PaymentoverviewComponent;
  let fixture: ComponentFixture<PaymentoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
