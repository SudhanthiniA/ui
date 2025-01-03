import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDevicelostViewComponent } from './applicant-devicelost-view.component';

describe('ApplicantDevicelostViewComponent', () => {
  let component: ApplicantDevicelostViewComponent;
  let fixture: ComponentFixture<ApplicantDevicelostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDevicelostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDevicelostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
