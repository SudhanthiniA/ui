import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantrequestforealComponent } from './applicantrequestforeal.component';

describe('ApplicantrequestforealComponent', () => {
  let component: ApplicantrequestforealComponent;
  let fixture: ComponentFixture<ApplicantrequestforealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantrequestforealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantrequestforealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
