import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportservicerequestComponent } from './reportservicerequest.component';

describe('ReportservicerequestComponent', () => {
  let component: ReportservicerequestComponent;
  let fixture: ComponentFixture<ReportservicerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportservicerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportservicerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
