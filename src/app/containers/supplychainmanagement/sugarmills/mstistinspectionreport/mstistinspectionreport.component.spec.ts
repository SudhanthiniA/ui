import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstistinspectionreportComponent } from './mstistinspectionreport.component';

describe('MstistinspectionreportComponent', () => {
  let component: MstistinspectionreportComponent;
  let fixture: ComponentFixture<MstistinspectionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstistinspectionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstistinspectionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
