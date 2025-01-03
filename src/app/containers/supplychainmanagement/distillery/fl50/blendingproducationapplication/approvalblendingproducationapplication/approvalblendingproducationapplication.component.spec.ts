import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalblendingproducationapplicationComponent } from './approvalblendingproducationapplication.component';

describe('ApprovalblendingproducationapplicationComponent', () => {
  let component: ApprovalblendingproducationapplicationComponent;
  let fixture: ComponentFixture<ApprovalblendingproducationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalblendingproducationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalblendingproducationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
