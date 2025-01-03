import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditapprovalComponent } from './auditapproval.component';

describe('AuditapprovalComponent', () => {
  let component: AuditapprovalComponent;
  let fixture: ComponentFixture<AuditapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
