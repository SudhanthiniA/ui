import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmappedComponent } from './paymentmapped.component';

describe('PaymentmappedComponent', () => {
  let component: PaymentmappedComponent;
  let fixture: ComponentFixture<PaymentmappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentmappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
