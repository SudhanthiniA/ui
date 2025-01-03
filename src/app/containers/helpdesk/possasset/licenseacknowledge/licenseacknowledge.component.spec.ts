import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseacknowledgeComponent } from './licenseacknowledge.component';

describe('LicenseacknowledgeComponent', () => {
  let component: LicenseacknowledgeComponent;
  let fixture: ComponentFixture<LicenseacknowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseacknowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseacknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
