import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionreportComponent } from './inspectionreport.component';

describe('InspectionreportComponent', () => {
  let component: InspectionreportComponent;
  let fixture: ComponentFixture<InspectionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
