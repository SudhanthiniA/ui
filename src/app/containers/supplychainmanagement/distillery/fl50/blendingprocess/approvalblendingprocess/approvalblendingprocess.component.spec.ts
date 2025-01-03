import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalblendingprocessComponent } from './approvalblendingprocess.component';

describe('ApprovalblendingprocessComponent', () => {
  let component: ApprovalblendingprocessComponent;
  let fixture: ComponentFixture<ApprovalblendingprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalblendingprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalblendingprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
