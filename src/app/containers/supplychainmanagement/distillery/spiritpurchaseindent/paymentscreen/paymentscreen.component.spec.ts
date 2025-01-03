import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentscreenComponent } from './paymentscreen.component';

describe('PaymentscreenComponent', () => {
  let component: PaymentscreenComponent;
  let fixture: ComponentFixture<PaymentscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
