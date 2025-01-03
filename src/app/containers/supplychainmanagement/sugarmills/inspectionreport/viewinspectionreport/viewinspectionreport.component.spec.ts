import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinspectionreportComponent } from './viewinspectionreport.component';

describe('ViewinspectionreportComponent', () => {
  let component: ViewinspectionreportComponent;
  let fixture: ComponentFixture<ViewinspectionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinspectionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinspectionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
