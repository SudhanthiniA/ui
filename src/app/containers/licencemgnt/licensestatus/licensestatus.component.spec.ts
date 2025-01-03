import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensestatusComponent } from './licensestatus.component';

describe('LicensestatusComponent', () => {
  let component: LicensestatusComponent;
  let fixture: ComponentFixture<LicensestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
