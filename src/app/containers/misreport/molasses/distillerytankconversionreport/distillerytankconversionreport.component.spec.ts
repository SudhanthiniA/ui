import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistillerytankconversionreportComponent } from './distillerytankconversionreport.component';

describe('DistillerytankconversionreportComponent', () => {
  let component: DistillerytankconversionreportComponent;
  let fixture: ComponentFixture<DistillerytankconversionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistillerytankconversionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistillerytankconversionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
