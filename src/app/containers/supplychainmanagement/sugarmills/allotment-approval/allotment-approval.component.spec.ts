import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentApprovalComponent } from './allotment-approval.component';

describe('AllotmentApprovalComponent', () => {
  let component: AllotmentApprovalComponent;
  let fixture: ComponentFixture<AllotmentApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotmentApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
