import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowconfigurationscmComponent } from './workflowconfigurationscm.component';

describe('WorkflowconfigurationscmComponent', () => {
  let component: WorkflowconfigurationscmComponent;
  let fixture: ComponentFixture<WorkflowconfigurationscmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowconfigurationscmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowconfigurationscmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
