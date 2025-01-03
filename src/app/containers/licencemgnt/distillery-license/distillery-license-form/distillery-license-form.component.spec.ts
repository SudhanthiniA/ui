import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryLicenseFormComponent } from './distillery-license-form.component';

describe('DistilleryLicenseFormComponent', () => {
  let component: DistilleryLicenseFormComponent;
  let fixture: ComponentFixture<DistilleryLicenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryLicenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
