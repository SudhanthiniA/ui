import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsregistervehicleComponent } from './gpsregistervehicle.component';

describe('GpsregistervehicleComponent', () => {
  let component: GpsregistervehicleComponent;
  let fixture: ComponentFixture<GpsregistervehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsregistervehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsregistervehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
