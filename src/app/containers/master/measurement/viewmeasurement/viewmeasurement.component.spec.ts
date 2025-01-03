import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmeasurementComponent } from './viewmeasurement.component';

describe('ViewmeasurementComponent', () => {
  let component: ViewmeasurementComponent;
  let fixture: ComponentFixture<ViewmeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
