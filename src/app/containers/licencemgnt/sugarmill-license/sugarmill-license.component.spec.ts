import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarmillLicenseComponent } from './sugarmill-license.component';

describe('SugarmillLicenseComponent', () => {
  let component: SugarmillLicenseComponent;
  let fixture: ComponentFixture<SugarmillLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarmillLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarmillLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
