import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowconfigurationComponent } from './workflowconfiguration.component';

describe('WorkflowconfigurationComponent', () => {
  let component: WorkflowconfigurationComponent;
  let fixture: ComponentFixture<WorkflowconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
