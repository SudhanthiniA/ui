import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensedomainComponent } from './licensedomain.component';

describe('LicensedomainComponent', () => {
  let component: LicensedomainComponent;
  let fixture: ComponentFixture<LicensedomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensedomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
