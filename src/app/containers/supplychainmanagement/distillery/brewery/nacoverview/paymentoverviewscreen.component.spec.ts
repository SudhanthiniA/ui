import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentoverviewscreenComponent } from './paymentoverviewscreen.component';

describe('PaymentoverviewscreenComponent', () => {
  let component: PaymentoverviewscreenComponent;
  let fixture: ComponentFixture<PaymentoverviewscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentoverviewscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentoverviewscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
