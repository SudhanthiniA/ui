import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAfterpaymentComponent } from './applicant-afterpayment.component';

describe('ApplicantAfterpaymentComponent', () => {
  let component: ApplicantAfterpaymentComponent;
  let fixture: ComponentFixture<ApplicantAfterpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAfterpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantAfterpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
