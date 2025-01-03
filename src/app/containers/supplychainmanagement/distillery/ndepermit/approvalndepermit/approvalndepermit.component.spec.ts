import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalndepermitComponent } from './approvalndepermit.component';

describe('ApprovalndepermitComponent', () => {
  let component: ApprovalndepermitComponent;
  let fixture: ComponentFixture<ApprovalndepermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalndepermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalndepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
