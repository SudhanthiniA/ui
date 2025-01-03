import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentindentComponent } from './paymentindent.component';

describe('PaymentindentComponent', () => {
  let component: PaymentindentComponent;
  let fixture: ComponentFixture<PaymentindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
