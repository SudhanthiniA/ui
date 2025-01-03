import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensetenureComponent } from './licensetenure.component';

describe('LicensetenureComponent', () => {
  let component: LicensetenureComponent;
  let fixture: ComponentFixture<LicensetenureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensetenureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensetenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
