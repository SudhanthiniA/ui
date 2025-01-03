import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantstatusComponent } from './applicantstatus.component';

describe('ApplicantstatusComponent', () => {
  let component: ApplicantstatusComponent;
  let fixture: ComponentFixture<ApplicantstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
