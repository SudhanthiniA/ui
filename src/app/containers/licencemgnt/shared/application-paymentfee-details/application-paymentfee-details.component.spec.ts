import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPaymentfeeDetailsComponent } from './application-paymentfee-details.component';

describe('ApplicationPaymentfeeDetailsComponent', () => {
  let component: ApplicationPaymentfeeDetailsComponent;
  let fixture: ComponentFixture<ApplicationPaymentfeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPaymentfeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPaymentfeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
