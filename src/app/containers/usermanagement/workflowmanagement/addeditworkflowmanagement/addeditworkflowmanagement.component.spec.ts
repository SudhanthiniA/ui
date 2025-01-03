import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditworkflowmanagementComponent } from './addeditworkflowmanagement.component';

describe('AddeditworkflowmanagementComponent', () => {
  let component: AddeditworkflowmanagementComponent;
  let fixture: ComponentFixture<AddeditworkflowmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditworkflowmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditworkflowmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
