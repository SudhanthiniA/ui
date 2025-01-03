import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryLicenseViewComponent } from './distillery-license-view.component';

describe('DistilleryLicenseViewComponent', () => {
  let component: DistilleryLicenseViewComponent;
  let fixture: ComponentFixture<DistilleryLicenseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryLicenseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryLicenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
