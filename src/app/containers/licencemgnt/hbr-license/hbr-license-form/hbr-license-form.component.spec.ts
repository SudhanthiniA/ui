import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbrLicenseFormComponent } from './hbr-license-form.component';

describe('HbrLicenseFormComponent', () => {
  let component: HbrLicenseFormComponent;
  let fixture: ComponentFixture<HbrLicenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbrLicenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbrLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
