import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarmillLicenseFormComponent } from './sugarmill-license-form.component';

describe('SugarmillLicenseFormComponent', () => {
  let component: SugarmillLicenseFormComponent;
  let fixture: ComponentFixture<SugarmillLicenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarmillLicenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarmillLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
