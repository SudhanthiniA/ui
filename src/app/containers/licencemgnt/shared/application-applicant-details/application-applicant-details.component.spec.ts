import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationApplicantDetailsComponent } from './application-applicant-details.component';

describe('ApplicationApplicantDetailsComponent', () => {
  let component: ApplicationApplicantDetailsComponent;
  let fixture: ComponentFixture<ApplicationApplicantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationApplicantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationApplicantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
