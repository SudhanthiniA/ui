import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseAssignedOfficerComponent } from './license-assigned-officer.component';

describe('LicenseAssignedOfficerComponent', () => {
  let component: LicenseAssignedOfficerComponent;
  let fixture: ComponentFixture<LicenseAssignedOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseAssignedOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseAssignedOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
