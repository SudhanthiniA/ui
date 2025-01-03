import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallreportComponent } from './overallreport.component';

describe('OverallreportComponent', () => {
  let component: OverallreportComponent;
  let fixture: ComponentFixture<OverallreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
