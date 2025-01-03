import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowmanagementComponent } from './workflowmanagement.component';

describe('WorkflowmanagementComponent', () => {
  let component: WorkflowmanagementComponent;
  let fixture: ComponentFixture<WorkflowmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
