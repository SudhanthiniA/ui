import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmisComponent } from './paymentmis.component';

describe('PaymentmisComponent', () => {
  let component: PaymentmisComponent;
  let fixture: ComponentFixture<PaymentmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
