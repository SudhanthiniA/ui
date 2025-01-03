import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalrequestforeodComponent } from './approvalrequestforeod.component';

describe('ApprovalrequestforeodComponent', () => {
  let component: ApprovalrequestforeodComponent;
  let fixture: ComponentFixture<ApprovalrequestforeodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalrequestforeodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalrequestforeodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
