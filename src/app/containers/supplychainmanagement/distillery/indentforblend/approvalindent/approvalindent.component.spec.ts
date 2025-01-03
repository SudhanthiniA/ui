import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalindentComponent } from './approvalindent.component';

describe('ApprovalindentComponent', () => {
  let component: ApprovalindentComponent;
  let fixture: ComponentFixture<ApprovalindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
