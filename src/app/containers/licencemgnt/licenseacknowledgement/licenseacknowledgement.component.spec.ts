import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseacknowledgementComponent } from './licenseacknowledgement.component';

describe('LicenseacknowledgementComponent', () => {
  let component: LicenseacknowledgementComponent;
  let fixture: ComponentFixture<LicenseacknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseacknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseacknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
