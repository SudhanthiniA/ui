import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApprovalPd20WholesaleComponent } from './view-approval-pd20-wholesale.component';

describe('ViewApprovalPd20WholesaleComponent', () => {
  let component: ViewApprovalPd20WholesaleComponent;
  let fixture: ComponentFixture<ViewApprovalPd20WholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApprovalPd20WholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApprovalPd20WholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
