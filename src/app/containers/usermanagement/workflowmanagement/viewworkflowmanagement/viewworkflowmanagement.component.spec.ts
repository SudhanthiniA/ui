import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewworkflowmanagementComponent } from './viewworkflowmanagement.component';

describe('ViewworkflowmanagementComponent', () => {
  let component: ViewworkflowmanagementComponent;
  let fixture: ComponentFixture<ViewworkflowmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewworkflowmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewworkflowmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
