import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenseStatusComponent } from './view-license-status.component';

describe('ViewLicenseStatusComponent', () => {
  let component: ViewLicenseStatusComponent;
  let fixture: ComponentFixture<ViewLicenseStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenseStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
