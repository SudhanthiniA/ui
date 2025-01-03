import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentacknowledgementComponent } from './paymentacknowledgement.component';

describe('PaymentacknowledgementComponent', () => {
  let component: PaymentacknowledgementComponent;
  let fixture: ComponentFixture<PaymentacknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentacknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentacknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
