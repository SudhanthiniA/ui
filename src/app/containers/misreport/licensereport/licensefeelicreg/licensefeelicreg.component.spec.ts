import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensefeelicregComponent } from './licensefeelicreg.component';

describe('LicensefeelicregComponent', () => {
  let component: LicensefeelicregComponent;
  let fixture: ComponentFixture<LicensefeelicregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensefeelicregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensefeelicregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
