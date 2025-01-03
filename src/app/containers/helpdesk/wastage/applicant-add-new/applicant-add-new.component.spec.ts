import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAddNewComponent } from './applicant-add-new.component';

describe('ApplicantAddNewComponent', () => {
  let component: ApplicantAddNewComponent;
  let fixture: ComponentFixture<ApplicantAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
