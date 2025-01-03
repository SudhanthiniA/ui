import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseapplicenseregComponent } from './licenseapplicensereg.component';

describe('LicenseapplicenseregComponent', () => {
  let component: LicenseapplicenseregComponent;
  let fixture: ComponentFixture<LicenseapplicenseregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseapplicenseregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseapplicenseregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
