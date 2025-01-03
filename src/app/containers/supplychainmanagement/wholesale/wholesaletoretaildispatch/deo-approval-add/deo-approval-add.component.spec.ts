import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoApprovalAddComponent } from './deo-approval-add.component';

describe('DeoApprovalAddComponent', () => {
  let component: DeoApprovalAddComponent;
  let fixture: ComponentFixture<DeoApprovalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoApprovalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoApprovalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
