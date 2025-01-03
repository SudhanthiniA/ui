import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbrLicenseViewComponent } from './hbr-license-view.component';

describe('HbrLicenseViewComponent', () => {
  let component: HbrLicenseViewComponent;
  let fixture: ComponentFixture<HbrLicenseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbrLicenseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbrLicenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
