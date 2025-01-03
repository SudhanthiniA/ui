import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalmatrixindentlistComponent } from './approvalmatrixindentlist.component';

describe('ApprovalmatrixindentlistComponent', () => {
  let component: ApprovalmatrixindentlistComponent;
  let fixture: ComponentFixture<ApprovalmatrixindentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalmatrixindentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalmatrixindentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
