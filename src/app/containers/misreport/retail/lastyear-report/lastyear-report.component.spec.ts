import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastyearReportComponent } from './lastyear-report.component';

describe('LastyearReportComponent', () => {
  let component: LastyearReportComponent;
  let fixture: ComponentFixture<LastyearReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastyearReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastyearReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
