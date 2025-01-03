import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentforcancelrequestComponent } from './paymentforcancelrequest.component';

describe('PaymentforcancelrequestComponent', () => {
  let component: PaymentforcancelrequestComponent;
  let fixture: ComponentFixture<PaymentforcancelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentforcancelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentforcancelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
