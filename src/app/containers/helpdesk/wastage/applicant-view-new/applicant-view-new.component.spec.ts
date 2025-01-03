import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantViewNewComponent } from './applicant-view-new.component';

describe('ApplicantViewNewComponent', () => {
  let component: ApplicantViewNewComponent;
  let fixture: ComponentFixture<ApplicantViewNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantViewNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantViewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
