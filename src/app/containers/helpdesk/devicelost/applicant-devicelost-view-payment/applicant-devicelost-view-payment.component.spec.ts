import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDevicelostViewPaymentComponent } from './applicant-devicelost-view-payment.component';

describe('ApplicantDevicelostViewPaymentComponent', () => {
  let component: ApplicantDevicelostViewPaymentComponent;
  let fixture: ComponentFixture<ApplicantDevicelostViewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDevicelostViewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDevicelostViewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
