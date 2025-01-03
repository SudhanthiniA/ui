import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditinspectionreportComponent } from './addeditinspectionreport.component';

describe('AddeditinspectionreportComponent', () => {
  let component: AddeditinspectionreportComponent;
  let fixture: ComponentFixture<AddeditinspectionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditinspectionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditinspectionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
