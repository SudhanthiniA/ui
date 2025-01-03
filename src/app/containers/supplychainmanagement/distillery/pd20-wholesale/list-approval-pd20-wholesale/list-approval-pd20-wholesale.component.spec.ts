import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApprovalPd20WholesaleComponent } from './list-approval-pd20-wholesale.component';

describe('ListApprovalPd20WholesaleComponent', () => {
  let component: ListApprovalPd20WholesaleComponent;
  let fixture: ComponentFixture<ListApprovalPd20WholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApprovalPd20WholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApprovalPd20WholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
