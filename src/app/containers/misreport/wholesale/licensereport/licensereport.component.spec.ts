import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensereportComponent } from './licensereport.component';

describe('LicensereportComponent', () => {
  let component: LicensereportComponent;
  let fixture: ComponentFixture<LicensereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
