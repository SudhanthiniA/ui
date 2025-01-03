import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedetailsofmolassesreportComponent } from './ratedetailsofmolassesreport.component';

describe('RatedetailsofmolassesreportComponent', () => {
  let component: RatedetailsofmolassesreportComponent;
  let fixture: ComponentFixture<RatedetailsofmolassesreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedetailsofmolassesreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedetailsofmolassesreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
