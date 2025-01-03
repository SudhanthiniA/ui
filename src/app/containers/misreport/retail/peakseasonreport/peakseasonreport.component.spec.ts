import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakseasonreportComponent } from './peakseasonreport.component';

describe('PeakseasonreportComponent', () => {
  let component: PeakseasonreportComponent;
  let fixture: ComponentFixture<PeakseasonreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakseasonreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeakseasonreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
