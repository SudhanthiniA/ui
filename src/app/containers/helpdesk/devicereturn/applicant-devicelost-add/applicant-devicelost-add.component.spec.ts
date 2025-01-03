import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDevicelostAddComponent } from './applicant-devicelost-add.component';

describe('ApplicantDevicelostAddComponent', () => {
  let component: ApplicantDevicelostAddComponent;
  let fixture: ComponentFixture<ApplicantDevicelostAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDevicelostAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDevicelostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
